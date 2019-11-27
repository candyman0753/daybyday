Vue.component('anchor', {
  props: {
    level: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      default: ''
    }
  },
  render(createElement) {
    return createElement('h' + this.level, [
      createElement(
        'a',
        { attrs: { href: `#${this.title}` } },
        this.$slots.default
      )
    ])
  }
})
const child = {
  render(h) {
    return h('p', 'childVnode')
  }
}
Vue.component('ele', {
  render(h) {
    return h(
      'div',
      Array.from('12345').map(() => h(child))
    )
  }
})
