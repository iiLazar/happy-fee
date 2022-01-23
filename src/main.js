import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { colors, values } from './settings/settings';

// This mixin was not being used...
// Set globaly accessible values
// Use colors in every component data() object
// const colorsDataMixin = {
//     data() {
//         return {
//             colors: colors,
//             values: values,
//         }
//     }
// };

// const app = createApp(App, {mixins: [colorsDataMixin]});

const app = createApp(App);
// Set globaly accessible values
// Use colors in every component (this.colors)
app.config.globalProperties.colors = colors;
app.config.globalProperties.values = values;

app.use(router).mount('#app');

