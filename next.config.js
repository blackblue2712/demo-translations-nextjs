const withImages = require("next-images");
const nextTranslate = require("next-translate");

const nextConfig = {
  ...nextTranslate(),

  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },

  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      test: /\.inline\.svg$/,
      include: [require("path").resolve(__dirname, "src/assets")],
      use: [
        {
          loader: "svg-react-loader",
        },
      ],
    });

    return config;
  },
};

module.exports = withImages(nextConfig);
