const { setFailed, setOutput } = require("@actions/core");
const { resolve } = require("path");

const { version } = require(resolve(
  process.env.PACKAGE_PATH,
  "./package.json"
));

if (typeof version === "undefined") {
  return setFailed("Error: Could not get version");
}

setOutput("version", version);
