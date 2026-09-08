import { getRequestConfig } from "next-intl/server";

function mergeMessages(
  defaultMessages: Record<string, unknown>,
  localeMessages: Record<string, unknown>,
) {
  const merged = { ...defaultMessages, ...localeMessages };

  for (const [key, value] of Object.entries(localeMessages)) {
    const defaultValue = defaultMessages[key];

    if (
      value &&
      defaultValue &&
      typeof value === "object" &&
      typeof defaultValue === "object" &&
      !Array.isArray(value) &&
      !Array.isArray(defaultValue)
    ) {
      merged[key] = mergeMessages(
        defaultValue as Record<string, unknown>,
        value as Record<string, unknown>,
      );
    }
  }

  return merged;
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requestedLocale = await requestLocale;
  const locale = requestedLocale === "ar" ? "ar" : "en";
  const defaultMessages = (await import("../messages/en.json")).default;
  const localeMessages =
    locale === "en"
      ? defaultMessages
      : (await import(`../messages/${locale}.json`)).default;

  return {
    locale,
    messages: mergeMessages(defaultMessages, localeMessages),
  };
});
