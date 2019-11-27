Vue.component("g-checkbox", {
  name: "g-checkbox",
  template: `<div><div class='g-checkbox' v-for='(item,index) in list'>
  <input type="checkbox" v-model="currentValue" :value="item" :id="index" />
  <label :for="index">{{item}}</label>
  </div>
  </div>`,
  props: {
    value: {
      type: Array,
      default() {
        return [];
      }
    },
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentValue: this.value
    };
  },
  watch: {
    value(e) {
      this.currentValue = e;
    },
    currentValue(e) {
      this.$emit("on-change", e);
      this.$emit("input", e);
    }
  }
});
