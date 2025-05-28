import { convertUnixToJST } from "../dateUtils";

describe("convertUnixToJST", () => {
  it("正しくUNIXタイムスタンプをJSTに変換できる", () => {
    // 2024-01-01 00:00:00 UTC (1704067200)
    const unixTimestamp = 1704067200;
    const result = convertUnixToJST(unixTimestamp);
    expect(result).toBe("2024/01/01 09:00:00");
  });

  it("異なるタイムスタンプでも正しく変換できる", () => {
    // 2024-06-15 12:00:00 UTC (1718452800)
    const unixTimestamp = 1718452800;
    const result = convertUnixToJST(unixTimestamp);
    expect(result).toBe("2024/06/15 21:00:00");
  });

  it("1970年1月1日のUNIXエポックを正しく変換できる", () => {
    const unixTimestamp = 0; // 1970-01-01 00:00:00 UTC
    const result = convertUnixToJST(unixTimestamp);
    expect(result).toBe("1970/01/01 09:00:00");
  });

  it("2038年問題の境界値を正しく変換できる", () => {
    const unixTimestamp = 2147483647; // 2038-01-19 03:14:07 UTC
    const result = convertUnixToJST(unixTimestamp);
    expect(result).toBe("2038/01/19 12:14:07");
  });

  it("不正な入力値に対してエラーをスローする", () => {
    expect(() => convertUnixToJST(NaN)).toThrow();
    expect(() => convertUnixToJST(Infinity)).toThrow();
    expect(() => convertUnixToJST(-Infinity)).toThrow();
  });

  it("夏時間の影響を受けないことを確認", () => {
    // 2024-07-01 00:00:00 UTC
    const summerTimestamp = 1719792000;
    const result = convertUnixToJST(summerTimestamp);
    expect(result).toBe("2024/07/01 09:00:00");
  });

  it("年末年始の日付を正しく変換できる", () => {
    // 2024-12-31 23:59:59 UTC
    const newYearTimestamp = 1735689599;
    const result = convertUnixToJST(newYearTimestamp);
    expect(result).toBe("2025/01/01 08:59:59");
  });
});
