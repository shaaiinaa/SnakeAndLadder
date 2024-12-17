import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./src/pages/homepage";
import Game from "./src/pages/game";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const parent = document.getElementById("parent");
const root = ReactDOM.createRoot(parent);

const App = () => {
  const defaultValue8 = localStorage.getItem("row");
  const data8 = defaultValue8 ? defaultValue8 : "";
  const [row, setRow] = useState(data8);
  const defaultValue9 = localStorage.getItem("column");
  const data9 = defaultValue9 ? defaultValue9 : "";
  const [column, setColumn] = useState(data9);
  const defaultValue10 = localStorage.getItem("emoji1");
  const data10 = defaultValue10 ? defaultValue10 : "";
  const [emoji1, setEmoji1] = useState(data10);
  const defaultValue11 = localStorage.getItem("emoji2");
  const data11 = defaultValue11 ? defaultValue11 : "";
  const [emoji2, setEmoji2] = useState(data11);

  localStorage.setItem("row", row);
  localStorage.setItem("column", column);
  localStorage.setItem("emoji1", "🐼");
  localStorage.setItem("emoji2", "🐼");

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Homepage
          row={row}
          column={column}
          setRow={setRow}
          setColumn={setColumn}
          setEmoji1={setEmoji1}
          setEmoji2={setEmoji2}
          emoji1={emoji1}
          emoji2={emoji2}
        />
      ),
    },
    {
      path: "/game",
      element: (
        <Game row={row} column={column} emoji1={emoji1} emoji2={emoji2} />
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};
root.render(<App />);
