import * as React from "react";
import * as ReactDOM from "react-dom";

import { Home } from "./components/home";

ReactDOM.render(
    <Home compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);