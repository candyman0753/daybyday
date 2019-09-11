define("b", function() {
  console.log("moduleB 执行");
  return {
    hello: function() {
      console.log("hello module b");
    }
  };
});
