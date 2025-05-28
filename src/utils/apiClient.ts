export interface WeatherData {
  timestamp: number;
  temperature: number;
  description: string;
}

export const fetchWeatherData = async (city: string): Promise<WeatherData> => {
  // 実際のAPIキーは環境変数から取得することを推奨
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  if (!response.ok) {
    throw new Error("Weather data fetch failed");
  }

  const data = await response.json();
  return {
    timestamp: data.dt,
    temperature: data.main.temp,
    description: data.weather[0].description,
  };
};
