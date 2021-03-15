// const vm = require("vm");

// const sandbox = {
//   animal: "cat",
//   count: 2,
//   globalVar: 99,
// };
// vm.createContext(sandbox);

// //必须传入第二个参数，sandbox或context
// vm.runInContext("globalVar *= 2", sandbox);

// console.log(sandbox);

// 性能分析沙箱
let vm = require("vm"),
  code = "var square = n * n;",
  script = vm.createScript(code),
  sandbox;

n = 5;
sandbox = { n: n };

benchmark = function (title, func) {
  let end, i, start;
  start = new Date();
  for (i = 0; i < 5000; i++) {
    func();
  }
  end = new Date();
  console.log(title + ": " + (end - start) + "ms");
};

let ctx = vm.createContext(sandbox);
benchmark("vm.runInThisContext", function () {
  vm.runInThisContext(code);
});
benchmark("vm.runInNewContext", function () {
  vm.runInNewContext(code, sandbox);
});
benchmark("script.runInThisContext", function () {
  script.runInThisContext();
});
benchmark("script.runInNewContext", function () {
  script.runInNewContext(sandbox);
});
benchmark("script.runInContext", function () {
  script.runInContext(ctx);
});
benchmark("vm.compileFunction", function () {
  vm.compileFunction(code, ["n"])(n);
});
benchmark("new Function", function () {
  new Function("n", code)(n);
});
