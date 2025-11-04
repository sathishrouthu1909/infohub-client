import { useState } from "react";
import { fetchWeather } from "../api";

export default function Weather() {
  const [city, setCity] = useState("Hyderabad");
  const [data, setData] = useState(null);
  const [state, setState] = useState("idle"); // idle | loading | error
  const [error, setError] = useState("");

  const onSearch = async (e) => {
    e.preventDefault();
    setState("loading");
    setError("");
    setData(null);
    try {
      const d = await fetchWeather(city);
      setData(d);
      setState("idle");
    } catch (err) {
      setError(err.message);
      setState("error");
    }
  };

  return (
    <section className="card">
      <h2>Weather</h2>
      <form onSubmit={onSearch} className="row">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <button type="submit">Get Weather</button>
      </form>

      {state === "loading" && <p className="muted">Loading…</p>}
      {state === "error" && <p className="error">Error: {error}</p>}
      {data && (
        <div className="grid">
          <div className="big">{Math.round(data.tempC)}°C</div>
          <div>
            <div>
              <b>{data.city}</b>{data.country ? `, ${data.country}` : ""}
            </div>
            <div className="muted">{data.description}</div>
            <div className="muted">Feels like {Math.round(data.feelsLikeC)}°C</div>
            <div className="muted">
              Humidity {data.humidity}% • Wind {data.windKph} kph
            </div>
            {data.note && <div className="note">{data.note}</div>}
          </div>
        </div>
      )}
    </section>
  );
}
