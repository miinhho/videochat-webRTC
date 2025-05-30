const { createApp } = require("./server");
const { socketSetup } = require("./socket");
require("dotenv").config();

const server = createApp();
socketSetup(server);

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
