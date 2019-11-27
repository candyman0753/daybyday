Vue.directive("clickoutside", {
  bind(el, binding) {
    addListener(el, binding);
  },
  update(el, binding) {
    const { value, oldValue } = binding;
    if (value === oldValue) return;
    removeListener(el);
    addListener(el, binding);
  },
  unbind(el) {
    removeListener(el);
    delete el._clickoutside;
  }
});
function addListener(el, binding) {
  const clickEvent = e => {
    if (e.type === "keyup" && e.keyCode !== 27) return false;
    if (e.type === "click" && el.contains(e.target)) return false;
    if (binding.expression) {
      binding.value(e);
    }
  };
  el._clickoutside = clickEvent;
  document.addEventListener("click", clickEvent);
  if (binding.modifiers.esc) {
    document.addEventListener("keyup", clickEvent);
  }
}
function removeListener(el) {
  document.removeEventListener("click", el._clickoutside);
  document.removeEventListener("keydown", el._clickoutside);
}
