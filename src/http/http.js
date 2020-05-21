import axios from "axios";

let my_axios = {};
my_axios.install = function(Vue) {
  const instance = axios.create({
    baseURL: "http://www.xmall.com/",
    timeout: 5000
  });
  Vue.prototype.$http = instance;
};

export default my_axios;
