// import _ from 'lodash'

function component() {
  return import(/* webpackChunkName: "lodash" */ "lodash").then(_ => {
    const el = document.createElement("div");
    el.innerHTML = _.join(["hi", "jack"], " ");
    return el;
  });
}
component().then(el => document.body.appendChild(el));

// 热更新处理
// if (module.hot) {
//   module.hot.accpet('./print.js', function() {
//     console.log('Accepting the updated printMe module!')
//     printMe()
//   })
// }
