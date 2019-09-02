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
    resultHtml += `<li>`
    resultHtml += `<code>${tests[i]}</code>`
    resultHtml += `<br>`
    resultHtml += `<span class="indent"> => <code>${results[i]}</code></span>`
    resultHtml += `</li>`
  }

  document.querySelector('#results').innerHTML = `<ol>${resultHtml}</ol>`
})
