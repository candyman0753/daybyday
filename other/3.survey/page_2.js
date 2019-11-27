Vue.component('page_2', {
  name: 'page_2',
  template: `<div class='page' v-show='i === index'>
  2.爱好
  <g-checkbox :list='list' v-model='currentValue'></g-checkbox>
  <div class='bar'>
  <g-button :disabled='disabled' @on-click='changeTab("next")'>下一步</g-button>
  <g-button @on-click='changeTab("pre")'>上一步</g-button>
  <g-button type='warning' @on-click='reset'>重置</g-button>
</div>
  </div>`,
  props: {
    i: Number,
    index: Number,
    value: Array
  },
  data() {
    return {
      currentValue: this.value,
      list: ['锤子', '电锯', '小刀', '榔头']
    }
  },
  watch: {
    currentValue(e) {
      this.emit(e)
    }
  },
  computed: {
    disabled() {
      const len = this.currentValue.length
      return len < 2 || len > 3
    }
  },
  methods: {
    changeTab(arg = 'next') {
      this.$emit('change-tab', arg)
    },
    reset() {
      this.currentValue = []
      this.emit([])
    },
    emit(e) {
      this.$emit('input', e)
    }
  }
})
