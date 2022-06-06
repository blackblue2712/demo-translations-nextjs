const { format: formatDate } = require("date-fns");
const  { enUS, frCH, ja, ru, zhCN, he} = require("date-fns/locale");


const formatters = {
  fr: new Intl.NumberFormat("es-ES"),
  en: new Intl.NumberFormat("en-EN"),
};

const localeMap = {
  en: enUS,
  fr: frCH,
  ja,
  ru,
  "zh-CN": zhCN,
  he
}

module.exports = {
  locales: [...Object.keys(localeMap)],
  defaultLocale: "en",
  pages: {
    "*": ["header"],
  },
  interpolation: {
    prefix: "{{",
    suffix: "}}",

    format: (value, format, lng) => {
      if (format === "number") return formatters[lng].format(value);

      const isDate = value instanceof Date;
      if (isDate) {
        const locale = localeMap[lng];
        switch (format) {
          case "en-date":
            return formatDate(value, "MMMM dd, yyyy", { locale });
          case "vi-date":
            return formatDate(value, "dd MMMM yyyy", { locale });
          default:
            return formatDate(value, format);
        }
      }

      return value;
    },
  },
  objectNotation: true,
  keySeparator: ".",
  nsSeparator: ":"
};
