const storage = typeof window === "undefined" ? null : localStorage;

export const getLocalStorage = (key: string) =>
  JSON.parse(storage?.getItem(key) || "{}");

export const setLocalStorage = (key: string, value: string) =>
  setTimeout(() => storage?.setItem(key, JSON.stringify(value)));

export const removeLocalStorage = (key: string) => storage?.removeItem(key);
