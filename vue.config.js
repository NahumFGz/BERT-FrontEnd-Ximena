const base_path = process.env.VUE_APP_BASE_NAME_ROUTE;
process.env.VUE_APP_VERSION = require("./package.json").version;

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? `/${base_path}/` : "/",
};
