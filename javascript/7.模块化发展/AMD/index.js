require("./moduleA.js", function(a, b) {
  console.log("index入口");
  a.hello();
  setTimeout(() => {
    b.hello();
  }, 2000);
});
