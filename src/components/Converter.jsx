import { useState } from "react";
import { convertInr } from "../api";

export default function Converter() {
  const [amount, setAmount] = useState(100);
  const [to, setTo] = useState("USD");
  const [result, setResult] = useState(null);
  const [state, setState] = useState("idle");
  const [error, setError] = useState("");

  const onConvert = async (e) => {
    e.preventDefault();
    setState("loading");
    setError("");
    setResult(null);
    try {
      const d = await convertInr(amount, to);
      setResult(d);
      setState("idle");
    } catch (err) {
      setError(err.message);
      setState("error");
    }
  };

  return (
    <section className="card">
      <h2>Currency Converter</h2>
      <form onSubmit={onConvert} className="row">
        <input
          type="number"
          min="1"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount in INR"
        />
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          <option>USD</option>
          <option>EUR</option>
        </select>
        <button type="submit">Convert</button>
      </form>

      {state === "loading" && <p className="muted">Converting…</p>}
      {state === "error" && <p className="error">Error: {error}</p>}
      {result && (
        <div className="grid">
          <div className="big">{result.from} → {result.to}</div>
          <div>
            <div>Rate: <b>{result.rate.toFixed(4)}</b></div>
            <div>{result.amount} {result.from} = <b>{result.converted.toFixed(2)} {result.to}</b></div>
            {result.note && <div className="note">{result.note}</div>}
          </div>
        </div>
      )}
    </section>
  );
}
