Vue.component("g-button", {
  name: "g-button",
  template: `<button class='g-button' :disabled='disabled'  :class='className' @click='cilckHandle'><slot></slot></button>`,
  props: {
    disabled: Boolean,
    type: {
      type: String,
      default: "primary"
    }
  },
  computed: {
    className() {
      return [this.type, this.disabled ? "disabled" : ""];
    }
  },
  methods: {
    cilckHandle(e) {
      this.$emit("on-click", e);
    }
  }
});
