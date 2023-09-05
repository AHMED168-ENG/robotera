import { createApp } from "vue";
import router from "./router";
import store from "./store";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import App from "./App.vue";
library.add(fas, fab, far);
dom.watch();

createApp(App).use(store).use(router).mount("#app");
