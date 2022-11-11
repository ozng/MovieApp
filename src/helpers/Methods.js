import { getUserLocale } from "get-user-locale";

export const getUserLocaleHandler = () => {
  const userLocale = getUserLocale();

  return userLocale.slice(0, 2).toUpperCase();
};
