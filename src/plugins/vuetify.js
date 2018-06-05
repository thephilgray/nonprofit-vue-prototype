import Vue from "vue";
import Vuetify from "vuetify";

import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "font-awesome/css/font-awesome.min.css";

Vue.use(Vuetify, {
  theme: {
    primary: "#fff",
    secondary: "#D6D6D6",
    accent: "#303030",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107"
  }
});
