import { fetchWeatherData } from "../apiClient";

// fetchのモック
global.fetch = jest.fn();

describe("fetchWeatherData", () => {
  beforeEach(() => {
    // 各テスト前にモックをリセット
    jest.clearAllMocks();
  });

  it("正しく天気データを取得できる", async () => {
    const mockResponse = {
      dt: 1704067200,
      main: { temp: 20 },
      weather: [{ description: "晴れ" }],
    };

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockResponse),
    });

    const result = await fetchWeatherData("Tokyo");
    expect(result).toEqual({
      timestamp: 1704067200,
      temperature: 20,
      description: "晴れ",
    });
  });

  it("APIエラー時に例外をスローする", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
    });

    await expect(fetchWeatherData("Tokyo")).rejects.toThrow(
      "Weather data fetch failed"
    );
  });
});
