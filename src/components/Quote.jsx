import { useState } from "react";
import { fetchQuote } from "../api";

export default function Quote() {
  const [data, setData] = useState(null);
  const [state, setState] = useState("idle");
  const [error, setError] = useState("");

  const onGet = async () => {
    setState("loading");
    setError("");
    setData(null);
    try {
      const d = await fetchQuote();
      setData(d);
      setState("idle");
    } catch (err) {
      setError(err.message);
      setState("error");
    }
  };

  return (
    <section className="card">
      <h2>Motivational Quote</h2>
      <button onClick={onGet}>Get Quote</button>

      {state === "loading" && <p className="muted">Fetching…</p>}
      {state === "error" && <p className="error">Error: {error}</p>}
      {data && (
        <blockquote className="quote">
          <p>“{data.text}”</p>
          <footer>— {data.author || "Unknown"}</footer>
          {data.note && <div className="note">{data.note}</div>}
        </blockquote>
      )}
    </section>
  );
}
