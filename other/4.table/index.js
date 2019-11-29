const app = new Vue({
  el: "#app",
  data() {
    return {
      columns: [
        { title: "姓名", key: "name" },
        { title: "年龄", key: "age", sortable: true },
        { title: "生日", key: "birthday", sortable: true },
        { title: "地址", key: "address" }
      ],
      data: [
        {
          name: "小明",
          age: 18,
          birthday: "1999-02-21",
          address: "北京市朝阳区"
        },
        {
          name: "老明",
          age: 54,
          birthday: "1799-02-21",
          address: "北京市朝星区"
        },
        {
          name: "中明",
          age: 36,
          birthday: "1899-02-21",
          address: "北京市朝月区"
        }
      ]
    };
  },
  methods: {
    addData() {
      this.data.push({
        name: "小红",
        age: 19,
        birthday: "2099-02-21",
        address: "北京市朝天区"
      });
    }
  }
});
