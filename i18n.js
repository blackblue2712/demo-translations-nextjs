const { format: formatDate } = require("date-fns");

const formatters = {
  fr: new Intl.NumberFormat("es-ES"),
  en: new Intl.NumberFormat("en-EN"),
};

module.exports = {
  locales: ["en", "fr", "ja", "ru", "zh-CN", "he"],
  defaultLocale: "en",
  pages: {
    "*": ["header"],
  },
  interpolation: {
    prefix:'{{',
    suffix: '}}',

    format: (value, format, lng) => {
      if(format === 'number') return formatters[lng].format(value);
        
      const isDate = value instanceof Date;
      if (isDate) {
        switch (format) {
          case "en-date":
            return formatDate(value, "MM/dd/yyyy");
          case "vi-date":
            return formatDate(value, "dd-MM-yyyy");
          default:
            return formatDate(value, format);
        }
      }

      return value
    },
  },
};
