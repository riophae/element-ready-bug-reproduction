import elementReady from 'element-ready'

const $ = document.querySelector.bind(document)

elementReady('#target').then(elementReadyResult => {
  const querySelectorResult = $('#target')

  console.log(`elementReady('#target')`, elementReadyResult)
  console.log(`document.querySelector('#target')`, querySelectorResult)

  $('#element-ready-result').textContent = String(elementReadyResult)
  $('#query-selector-result').textContent = String(querySelectorResult)
})
