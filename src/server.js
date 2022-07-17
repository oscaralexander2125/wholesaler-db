const http = require("http");

const app = require("./app");
const { PORT } = require("./config");

const server = http.createServer(app);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
