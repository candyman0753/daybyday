Vue.component("g-radio", {
  name: "g-radio",
  template: `<div><span class='g-radio' v-for='(item,index) in list'>
  <input type="radio" v-model="currentValue" :value="item" :id="index" />
  <label :for="index">{{item}}</label>
  </span>
  </div>`,
  props: {
    value: {
      type: String,
      default: ""
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
