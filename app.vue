// app.vue
import { createApp } from 'vue';
import tooltip from "./tooltip.js";

const app = createApp(App);
app.directive('tooltip', tooltip);
app.mount('#app');