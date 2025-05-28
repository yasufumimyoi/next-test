export const convertUnixToJST = (unixTimestamp: number): string => {
  // 不正な入力値のチェック
  if (isNaN(unixTimestamp) || !isFinite(unixTimestamp)) {
    throw new Error("Invalid timestamp");
  }

  const date = new Date(unixTimestamp * 1000);
  return date.toLocaleString("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
};
