import "./styles.css";
import Home from "./Components/Home.jsx";
import Add from "./Components/Add";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {
  const [e, setE] = useState([]);
  const [t, setT] = useState(0);
  const [toggle, setToggle] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home
          e={e}
          setE={setE}
          t={t}
          setT={setT}
          toggle={toggle}
          setToggle={setToggle}
        />
      ),
    },
    {
      path: "/add",
      element: (
        <Add
          e={e}
          setE={setE}
          t={t}
          setT={setT}
          toggle={toggle}
          setToggle={setToggle}
        />
      ),
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
