import elementReady from 'element-ready'
import domLoaded from 'dom-loaded'

window.elementReady = elementReady
window.domLoaded = domLoaded

const tests = [
  `elementReady('#target')`,
  `elementReady('#target', { stopOnDomReady: false, timeout: 5000 })`,
  `domLoaded.then(() => document.querySelector('#target'))`,
]

Promise.all(tests.map(test => eval(test))).then(results => {
  let resultHtml = ''

  for (let i = 0; i < tests.length; i++) {
    resultHtml += `<div><code>${tests[i]}</code> => <code>${results[i]}</code></div>`
  }

  document.querySelector('#result').innerHTML = resultHtml
})
