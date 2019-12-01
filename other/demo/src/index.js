import _ from 'lodash'
import printMe from './print.js'
import style from './style.less'

function component() {
  const el = document.createElement('div')
  const btn = document.createElement('button')

  el.innerHTML = _.join(['hello', 'webpack demo'], ' ')
  el.classList.add('hello')

  btn.innerHTML = 'click me'
  btn.onclick = printMe

  el.appendChild(btn)

  return el
}
document.body.appendChild(component())

if (module.hot) {
  module.hot.accpet('./print.js', function() {
    console.log('Accepting the updated printMe module!')
    printMe()
  })
}
