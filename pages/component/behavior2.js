module.exports = Behavior({
  behaviors: [require('behavior1.js')],
  definitionFilter(defFields, definitionFilterArr) {
    // definitionFilterArr[0](defFields)
  },
})