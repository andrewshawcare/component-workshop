require("http").createServer((request, response) => {
  require("serve-static")(__dirname)(
    request,
    response,
    require("finalhandler")(request, response)
  );
}).listen(80);

require("livereload").createServer().watch(__dirname);
