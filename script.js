import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./src/pages/homepage";
import Game from "./src/pages/game";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const parent = document.getElementById("parent");
const root = ReactDOM.createRoot(parent);

const App = () => {
  const [row, setRow] = useState("");
  const [column, setColumn] = useState("");
  const [emoji1, setEmoji1] = useState("🐼");
  const [emoji2, setEmoji2] = useState("🐼");

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
