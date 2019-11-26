Vue.component("pane", {
  name: "pane",
  template: `<div class='pane' v-show='isShow'>
  <slot></slot>
  </div>`,
  props: {
    name: {
      type: String
    },
    label: {
      type: String,
      default: ""
    },
    closable: Boolean
  },
  data() {
    return {
      isShow: false,
      currentName: this.name
    };
  },
  watch: {
    label() {
      this.updateNav();
    }
  },
  mounted() {
    this.updateNav();
  },
  methods: {
    updateNav() {
      this.$parent.updateNav();
    }
  }
});
