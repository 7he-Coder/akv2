import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/FONTS/font.css";
import "./index.css";
// import "./script.js";
// import "../globle.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
