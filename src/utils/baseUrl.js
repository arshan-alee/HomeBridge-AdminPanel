const environment = "production";
// const environment = "DEV";

let baseUrl;
if (environment === "production") {
  // baseUrl = "https://black-panda-slip.cyclic.app";
  baseUrl = "https://home-bridge-backend-0e155295c3cc.herokuapp.com";
} else {
  baseUrl = "http://localhost:5000";
}

export default baseUrl;
