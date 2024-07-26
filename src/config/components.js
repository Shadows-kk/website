import { defineAsyncComponent } from "vue"

const components = import.meta.glob('../components/*.vue')

export default function install(app) {
    for (const [key, value] of Object.entries(components)) {
        const name = key.split('components/')[1].split('.')[0]
        app.component(name, defineAsyncComponent(value))
    }
}