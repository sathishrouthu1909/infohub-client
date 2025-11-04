export const API_BASE = import.meta.env.VITE_API_BASE || "";

async function request(path) {
  const res = await fetch(`${API_BASE}${path}`);
  const json = await res.json();
  if (!json.ok) throw new Error(json.error || "Request failed");
  return json.data;
}

export const fetchWeather = (city) =>
  request(`/api/weather?city=${encodeURIComponent(city)}`);

export const convertInr = (amount, to) =>
  request(`/api/convert?amount=${encodeURIComponent(amount)}&to=${encodeURIComponent(to)}`);

export const fetchQuote = () => request(`/api/quote`);
