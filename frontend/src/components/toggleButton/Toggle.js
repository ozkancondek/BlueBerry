import React from "react";

import { useTheme } from "../../providers/ThemeProvider";

import "./toggle.css";

export const Toggle = () => {
  const { darkTheme, setChecked, lightTheme, setTheme, checked } = useTheme();

  const trigger = (e) => {
    setChecked(e.target.checked);

    setTheme(checked ? lightTheme : darkTheme);
    // localStorage.setItem("theme", JSON.stringify(checked));
  };

  return (
    <div>
      <main>
        <input className="l" type="checkbox" onClick={trigger} />
      </main>
    </div>
  );
};
