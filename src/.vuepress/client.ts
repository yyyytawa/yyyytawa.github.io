import { defineClientConfig } from "vuepress/client";
import Sticker from './components/Sticker.vue'

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component('Sticker', Sticker)
    }
})