Vue.component("vTable", {
  props: {
    columns: {
      type: Array,
      default() {
        return [];
      }
    },
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentColumns: [],
      currentData: []
    };
  },
  mounted() {
    this.initData();
  },
  watch: {
    data() {
      const sortCol = this.currentColumns.filter(
        col => col._sortType !== "normal"
      );

      this.initData();
      if (sortCol.length) {
        this.handleSort(sortCol[0]._index, sortCol[0]._sortType);
      }
    }
  },
  methods: {
    initData() {
      this.currentColumns = this.columns.map((item, index) => {
        item._sortType = "normal";
        item._index = index;
        return item;
      });
      this.currentData = this.data.map((item, index) => {
        item._index = index;
        return item;
      });
    },
    handleSort(index, type) {
      this.currentColumns.forEach(col => (col._sortType = "normal"));
      const col = this.currentColumns[index],
        key = col.key;
      col._sortType = type;
      const _sort = type === "asc" ? num => num : num => -num;
      this.currentData.sort((a, b) => {
        return a[key] > b[key] ? _sort(1) : _sort(-1);
      });
    }
  },
  render(h) {
    const th = [],
      tr = [];
    this.currentColumns.forEach((col, index) => {
      if (!col.sortable) {
        th.push(h("th", col.title));
        return;
      }
      th.push(
        h("th", [
          h("span", col.title),
          h(
            "a",
            {
              class: {
                active: col._sortType === "asc"
              },
              on: {
                click: () => {
                  this.handleSort(index, "asc");
                }
              }
            },
            "↑"
          ),
          h(
            "a",
            {
              class: {
                active: col._sortType === "dsc"
              },
              on: {
                click: () => {
                  this.handleSort(index, "dsc");
                }
              }
            },
            "↓"
          )
        ])
      );
    });
    this.currentData.forEach(row => {
      const td = this.currentColumns.map(cell => h("td", row[cell.key]));
      tr.push(h("tr", td));
    });
    return h("table", [h("thead", [h("tr", th)]), h("tbody", tr)]);
  }
});
