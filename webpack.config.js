module.exports = {
    entry: [__dirname + "/src/scss/main.scss"],
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                implementation: require("sass"),
                api: "modern-compiler",
                sourceMap: true,
                sassOptions: {
                  // Your sass options
                },
              },
            },
          ],
        },
      ],
    },
  };