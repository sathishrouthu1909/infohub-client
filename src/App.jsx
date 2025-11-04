import { useState } from "react";
import Weather from "./components/Weather.jsx";
import Converter from "./components/Converter.jsx";
import Quote from "./components/Quote.jsx";
import "./App.css";



const TABS = ["Weather", "Convert", "Quote"];

export default function App() {
  const [tab, setTab] = useState(TABS[0]);

  return (
    <div className="wrap">
      <header>
        <h1>InfoHub</h1>
        <nav>
          {TABS.map((t) => (
            <button
              key={t}
              className={tab === t ? "active" : ""}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
          ))}
        </nav>
      </header>

      <main>
        {tab === "Weather" && <Weather />}
        {tab === "Convert" && <Converter />}
        {tab === "Quote" && <Quote />}
      </main>

      <footer>
        <span>ByteXL Coding Challenge • Demo</span>
      </footer>
    </div>
  );
}
