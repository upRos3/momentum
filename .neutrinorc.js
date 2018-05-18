// module.exports = {
//   use: [
//     [
//       '@neutrinojs/react',
//       {
//         html: {
//           title: 'momentum'
//         }
//       }
//     ]
//   ]
// };

module.exports = neutrino => {
  neutrino.use(["@neutrinojs/react"]);
  neutrino.use([
    "@neutrinojs/react",
    {
      devServer: { port: 5000 }
    }
  ]);
  neutrino.config
    .entry("./src/index.js")
    .add("./src/index.js")
    .end()
    .output.publicPath("/");
};
