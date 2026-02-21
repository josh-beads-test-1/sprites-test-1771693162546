const server = Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response("sprites-integration-test-v2");
  },
});
console.log(`Listening on ${server.port}`);