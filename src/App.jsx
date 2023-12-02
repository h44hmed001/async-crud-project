import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Create from "./components/Create";
import Read from "./components/Read";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Create />
      <Read />
    </>
  );
}

export default App;
