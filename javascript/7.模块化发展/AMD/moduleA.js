define("a", function() {
  console.log("moduleA 执行");
  return {
    hello: function() {
      console.log("hello module a");
    }
  };
});
