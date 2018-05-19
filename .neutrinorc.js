module.exports = neutrino => {
  neutrino.use([
    "@neutrinojs/react",
    {
      devServer: { port: 5000 },
      html: {
        title: "momentum"
      }
    }
  ]);

  neutrino.config
    .entry("./src/index.js")
    .add("./src/index.js")
    .end()
    .output.publicPath("/");
};
