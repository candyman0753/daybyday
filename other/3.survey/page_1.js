Vue.component("page_1", {
  name: "page_1",
  template: `<div class='page' v-show='i === index'>
  1.性别
  <g-radio :list='list' v-model='currentValue'></g-radio>
  <div class='bar'>
  <g-button :disabled='disabled' @on-click='changeTab("next")'>下一步</g-button>
  <g-button @on-click='reset'>重置</g-button>
</div>
  </div>`,
  props: {
    i: Number,
    index: Number,
    value: String
  },
  data() {
    return {
      currentValue: this.value,
      list: ["man", "woman", "notsure"]
    };
  },
  watch: {
    currentValue(e) {
      this.emit(e);
    }
  },
  computed: {
    disabled() {
      return !this.currentValue;
    }
  },
  methods: {
    changeTab(arg = "next") {
      this.$emit("change-tab", arg);
    },
    reset() {
      this.currentValue = "";
      this.emit("");
    },
    emit(e) {
      this.$emit("input", e);
    }
  }
});
