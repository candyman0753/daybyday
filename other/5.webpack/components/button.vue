<template>
  <button
    class="g-button"
    :disabled="disabled"
    :class="className"
    @click="cilckHandle"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "g-button",
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
};
</script>

<style scoped>
button {
  background-color: transparent;
}
.g-button {
  display: inline-block;
  /* width: 100%; */
  border: 0;
  padding: 6px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.g-button.primary {
  color: #fff;
  background-color: #39f;
}
.g-button.warning {
  color: #fff;
  background-color: rgb(251, 138, 31);
}
.g-button.success {
  color: #fff;
  background-color: rgb(14, 172, 130);
}
.g-button.disabled {
  background-color: #bbb;
  opacity: 0.5;
}
.g-button:active {
  transform: translate3d(1px, 1px, 0);
}
</style>
