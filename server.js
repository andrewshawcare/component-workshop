require("http").createServer((request, response) => {
  require("serve-static")(__dirname)(
    request,
    response,
    require("finalhandler")(request, response)
  );
}).listen(80);

require("livereload").createServer({
  exclusions: ["node_modules/**"],
  exts: ["html", "css", "js", "png", "gif", "jpg", "json"]
}).watch(__dirname);
