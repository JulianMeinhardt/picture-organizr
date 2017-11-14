const container = require('src/container');

const app = container.resolve('app');

app
  .start()
  .catch((error) => {
    // TODO: Add logger if there was an exception while starting the app
    process.exit();
  });
