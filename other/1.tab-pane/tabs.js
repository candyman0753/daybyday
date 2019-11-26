Vue.component("tabs", {
  template: `<div class='tabs'>
  <div class='tabs-bar'>
  <div class='tabs-tab' v-for='(item,index) in navList' :class='activeNav(item.name)' @click='clickHandle(index)'>
  {{item.label}}
  <span class='close-icon' v-show='item.closable' @click.stop='closeTab(index)'>x</span>
  </div>
  </div>
  <div class='tabs-content'>
  <slot></slot>
  </div>
  </div>`,
  props: {
    value: [String, Number]
  },
  data() {
    return {
      navList: [],
      currentValue: this.value
    };
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },
    currentValue() {
      this.updateStatus();
    }
  },
  methods: {
    activeNav(name) {
      return name === this.currentValue ? "active" : "";
    },
    clickHandle(i) {
      const { name } = this.navList[i];
      // this.currentValue = name;
      this.$emit("input", name);
      this.$emit("on-click", name);
    },
    updateNav() {
      const arr = this.getPanes().map((item, index) => {
        const name = item.name || index,
          label = item.label,
          closable = item.closable;
        item.currentName = name;
        return { name, label, closable };
      });
      // 默认第一项
      if (arr[0] && !this.currentValue) {
        this.currentValue = arr[0].name;
      }
      this.navList = arr;
      this.updateStatus();
    },
    updateStatus() {
      this.getPanes().forEach(item => {
        return (item.isShow = item.currentName === this.currentValue);
      });
    },
    getPanes() {
      return this.$children.filter(item => item.$options.name === "pane");
    },
    closeTab(index) {
      this.$emit("on-close", index);
      this.currentValue = "";
      setTimeout(() => {
        this.updateNav();
      }, 0);
    }
  }
});
