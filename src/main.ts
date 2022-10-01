import { createApp } from "vue";
import App from "./App.vue";
import './assets/main.css';

// const autoImportedModules = import.meta.glob('./autoImports/*.js');
// const autoImportedModules = import.meta.globEager('./autoImports/*.js');

// for(const path in autoImportedModules) {
//     console.log(autoImportedModules[path]());
// }

createApp(App).mount("#app");
