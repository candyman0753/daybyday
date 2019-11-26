Vue.directive('clickoutside', {
  bind(el, binding, vnode) {
    const clickHandle = e => {
      if (el.contains(e.target)) return false
      if (binding.expression) {
        binding.value(e)
      }
    }
    el._clickoutside = clickHandle
    document.addEventListener('click', clickHandle)
  },
  unbind(el, binding) {
    document.removeEventListener('click', el._clickoutside)
    delete el._clickoutside
  }
})
