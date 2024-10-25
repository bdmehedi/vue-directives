# vue-directives

This repository contains custom Vue.js directives. Below are the instructions on how to use the `v-tooltip` directive.

## v-tooltip Directive

The `v-tooltip` directive can be used to add tooltips to your elements.

### Usage

1. **Install dependencies**:
   Make sure you have Vue.js installed in your project.

   ```sh
   npm install vue
   ```

2. Add the directive to your Vue app: Import the tooltip directive and register it in your Vue app.

   ```js
   // app.vue
   import { createApp } from 'vue';
   import tooltip from "./tooltip.js";

   const app = createApp(App);
   app.directive('tooltip', tooltip);
   app.mount('#app');
   ```

3. Use the directive in your components: You can now use the v-tooltip directive in your Vue components.

   ```html
   <template>
     <div v-tooltip="'This is a tooltip'">Hover over me</div>
   </template>
   ```

