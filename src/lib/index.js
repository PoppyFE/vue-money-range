import vueMoneyRange from './index.vue'
const moneyRange = {
    install(Vue, options) {
      Vue.component(vueMoneyRange.name, vueMoneyRange)
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(moneyRange);
}
export default moneyRange //