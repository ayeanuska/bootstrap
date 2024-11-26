import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Welcome from "./normalFunction";
import Varibale1 from "./component/loginform";
import TempComp from "./component/TempComp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Welcome title="Welcome to this coding space" name="Anuska" />
        <Varibale1 />
        <TempComp />
      </div>
    </>
  );
}

export default App;
