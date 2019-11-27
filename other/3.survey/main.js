Vue.component("mainBox", {
  template: `<div class='main'>
  <page_1
  :i="0"
  :index="index"
  v-model="form.sex"
  @change-tab="changeTab"
/>
<page_2
  :i="1"
  :index="index"
  v-model="form.habit"
  @change-tab="changeTab"
/>
<page_3
  :i="2"
  :index="index"
  v-model="form.intro"
  @change-tab="changeTab"
  @submit='submit'
/>
  </div>`,
  data() {
    return {
      form: {
        sex: "",
        habit: [],
        intro: ""
      },
      index: 0
    };
  },
  methods: {
    changeTab(e) {
      e === "next" ? this.index++ : this.index--;
    },
    submit() {
      console.log(this.form);
    }
  }
});
