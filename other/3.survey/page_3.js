Vue.component("page_3", {
  name: "page_3",
  template: `<div class='page' v-show='i === index'>
  3.自我介绍
  <div> <textarea v-model='currentValue' placeholder='不小于10个字'/></div>
  <div class='bar'>
  <g-button :disabled='disabled' @on-click='submit'>提交</g-button>
  <g-button @on-click='changeTab("pre")'>上一步</g-button>
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
      currentValue: this.value
    };
  },
  watch: {
    currentValue(e) {
      this.emit(e);
    }
  },
  computed: {
    disabled() {
      return this.currentValue.length < 10;
    }
  },
  methods: {
    changeTab(arg = "next") {
      this.$emit("change-tab", arg);
    },
    submit() {
      this.$emit("submit");
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
