import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import * as dataLoader from "@/data/dataLoader";
import installElementPlus from './plugins/element'
// import elementPlusIcons from '@element-plus/icons-vue'
import * as Icons from '@element-plus/icons'

async function run() {
    await dataLoader.loadData();
    const app = createApp(App);
    installElementPlus(app);
    // app.use(elementPlusIcons)
    Object.keys(Icons).forEach(key => {
        app.component(key, Icons[key])
    })
    app.use(store).mount('#app');
}

run();