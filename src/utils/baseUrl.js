const environment = "production";
// const environment = "DEV";

let baseUrl;
if (environment === "production") {
  baseUrl = "https://black-panda-slip.cyclic.app";
} else {
  baseUrl = "http://localhost:5000";
}

export default baseUrl;
