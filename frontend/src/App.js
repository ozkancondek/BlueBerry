import { ErrorBoundary } from "react-error-boundary";

import { Error } from "./components/error/Error";
import { Footer } from "./components/footer/Footer";
import { Navi } from "./components/navbar/Navi";

import { ApiProvider } from "./providers/ApiProvider";

import { MainProvider } from "./providers/MainProvider";
import { SearchProvider } from "./providers/SearchProvider";
import { ThemeProvider, useTheme } from "./providers/ThemeProvider";

import { AllRoutes } from "./routes/AllRoutes";

const App = () => {
  // const { getPost } = useContext(ApiContext);
  // const { getPost } = useApi();

  // useEffect(() => {
  //   const fetch = async () => {
  //     let res = await getPost();
  //   };

  //   fetch();
  // }, [getPost]);

  const { theme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: ` ${theme.body}`,
        color: ` ${theme.text}`,
      }}
    >
      <Navi />
      <AllRoutes />
      <Footer />
    </div>
  );
};

//will used for getting data from api provider but i am getting data from local right now
const Main = () => (
  <ErrorBoundary
    FallbackComponent={Error}
    /*     onError={() => console.log("helloo")} */
  >
    <ThemeProvider>
      <MainProvider>
        <SearchProvider>
          <ApiProvider>
            <App />
          </ApiProvider>
        </SearchProvider>
      </MainProvider>
    </ThemeProvider>
  </ErrorBoundary>
);

export default Main;
