// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueResource)

// Custom directives
Vue.directive('rainbow', {
  // el: the element the directive is bound to, binding: parameters, modifiers, arguments, etc: https://vuejs.org/guide/reusability/custom-directives.html#directive-hooks
  bind (el, binding, vnode) {
    // console.log('HEX: ', Math.random().toString())
    el.style.color = '#' + Math.random().toString(16).slice(2, 8) // .toString(16) converts a number to a hexidecimal value, the slice gives us 6 digits
  }
})

// Custom directives
Vue.directive('theme', {
  bind (el, binding, vnode) {
    if (binding.value === 'wide') {
      el.style.maxWidth = '1260px'
    } else if (binding.value === 'narrow') {
      el.style.maxWidth = '760px'
    }
    if (binding.arg === 'column') {
      el.style.background = '#eee'
      el.style.padding = '20px'
    }
  }
})

// Filters
Vue.filter('to-uppercase', (value) => {
  return value.toUpperCase()
})

Vue.filter('snippet', (value) => {
  return value.slice(0, 140) + '...'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
