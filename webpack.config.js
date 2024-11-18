module.exports = {
    entry: [__dirname + "/src/scss/main.scss", __dirname + "/src/api/localData/top50DataLocal.json"],
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
        {
          test: /\.(json)$/,
          use: [
            {
              loader: 'json-loader',
              options: {
                name: '[name].[ext]',
              },
            },
          ],
          type: "asset/resource",
          generator: {
              filename: '[path][name].[hash][ext][query]'
          }
      }
      ],
    },
  };