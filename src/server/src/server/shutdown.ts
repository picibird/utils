import gracefulShutdown from "http-graceful-shutdown";

// personal preShutdown function
// - must return a promise
// - the input parameter is optional (only needed if you want to
//   access the signal type inside this function)
// - used, when you need to have HTTP sockets still available and untouched by shutdown process
// - this function here in this example takes 500ms to complete
function preShutdown(signal) {
  console.log();
  console.log('"preShutdown" function');
  console.log("... called signal: " + signal);
  console.log("... for 500 ms");
  console.log("...");
  return Promise.resolve();
}
// personal cleanup function
// - must return a promise
// - the input parameter is optional (only needed if you want to
//   access the signal type inside this function)
// - this function here in this example takes one second to complete
function cleanup(signal) {
  console.log();
  console.log('"onShutdown" function');
  console.log("... called signal: " + signal);
  console.log("... in cleanup");
  console.log("... for 5 seconds");
  console.log("...");
  return Promise.resolve();
}

export default (server) => {
  console.log("HTTP-GRACEFUL-SHUTDOWN");
  console.log("-------------------------------------------");
  console.log(
    "Advanced EXPRESS test using advanced options and cleanup function"
  );
  console.log(`Listening at http://localhost:${server.port}`);
  console.log();
  console.log("Press Ctrl-C to test shutdown");
  // this enables the graceful shutdown with advanced options
  gracefulShutdown(server, {
    signals: "SIGINT SIGTERM",
    timeout: 0,
    development: false,
    preShutdown: preShutdown,
    onShutdown: cleanup,
    forceExit: true,
    finally: function () {
      console.log();
      console.log('In "finally" function');
      console.log("... Server gracefully shutted down.....");
    },
  });
};
