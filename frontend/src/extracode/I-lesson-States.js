import "./App.css";
import React, { useState, useEffect } from "react";

const App = () => {
  const [state, setState] = useState("");
  const [state2, setState2] = useState("");
  const [visibility, setVisibility] = useState(true);

  const decrease = () => {
    setState((state) => state - 1);
  };

  /*  const val1={name:"ibo"}
  const valx=val1
  console.log('assign',val1===valx)
  const val2={name:"ibo"}
  const val3="5"
  const val4="5"
  console.log(val1===val2)
  console.log(val3===val4) */

  /*  let myFnc;
  myFnc?.();
  myFnc = () => console.log("my fnc"); */
  //compdidmount,compdidupdate,unmount
  useEffect(() => {
    setState({ name: { text: "IBO" } });
  }, [state2]);
  //console.log(visibility)

  /* const test=visibility? "at":"esek"
  const myObj={
    test2:visibility? "at":"essek"
  }
  const myArry=[visibility? "at":"esek"] */
  return (
    <div className={visibility ? "App" : "att"}>
      {/*       <p>{state?.name?.text}</p>

      {undefined}
      {state.name && <p>{state.name.text}</p>}
      {state.name? <p>{state.name.text}</p>:null}
      {5 && 3}
      {null && undefined}
      {0 || undefined}
      {undefined || 0}
      {5 || 3} */}
      <p>{JSON.stringify(state)}</p>
      <p>{JSON.stringify(state2)}</p>
      <button onClick={() => setState(0)}>reset</button>
      <button onClick={() => setState((prev) => prev + 1)}>increase1</button>
      <button onClick={() => setState(state + 1)}>increase2</button>
      <button onClick={() => setState2("5")} d>
        state2
      </button>
      <button onClick={decrease}>decrease</button>
      <button onClick={() => setVisibility(!visibility)}>hide</button>
      {visibility && <At setState={setState} />}
    </div>
  );
};

const At = ({ setState }) => {
  const [myState, setMyState] = useState(5);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setMyState({ name: "ibo" });
    }, 5000);
    return () => clearTimeout(timeOut);
  }, []);
  //console.log('testtt')
  return (
    <div>
      <button
        onClick={() =>
          setState((prev) => {
            return prev + 1;
          })
        }
      >
        At kpmponnetii
      </button>
      <p>{myState?.name}</p>
    </div>
  );
};

export { App };
