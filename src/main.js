import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { colors } from './settings/settings';

// Set globaly accessible values
// Use colors in every component data() object
const colorsDataMixin = {
    data() {
        return {
            colors: colors
        }
    }
};

const app = createApp(App, {mixins: [colorsDataMixin]});
// Set globaly accessible values
// Use colors in every component (this.colors)
app.config.globalProperties.colors = colors;

app.use(router).mount('#app');

