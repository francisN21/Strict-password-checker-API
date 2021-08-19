const router = require("express").Router()

router.get("/check/:password", (req, res) => {
  let securityLevel = 0
  let message = {
    positiveMessage: [],
    negativeMessage: []
  }
  const pw = req.params.password
  try {
    if (pw.match(/[a-z]+/)) {securityLevel++} else {message.negativeMessage.push("Please add lowercase letter")}
    if (pw.match(/[A-Z]+/)) {securityLevel++} else {message.negativeMessage.push("Please add capital letter")}
    if (pw.match(/[0-9]+/)) {securityLevel++} else {message.negativeMessage.push("Please add at least 1 number")}
    if (pw.match(/[$@&!=-+.,;:]+/)) {securityLevel++} else {message.negativeMessage.push("Please add special characters $ @ # & !")}
    if (pw.length > 8) {securityLevel++, message.positiveMessage.push("Minimum length requirement passed")}
    if (pw.length < 8) {securityLevel--, message.negativeMessage.push("Must have atleast 8 Characters to pass minimum length requirement")}
    if (pw.length > 15) {securityLevel++, message.positiveMessage.push("15 Character password +++")}
    if (pw.length < 15) {securityLevel--, message.negativeMessage.push("Password not secure enough")}
    if (securityLevel < 1) {message.negativeMessage.push("Please follow password guidelines")}
    if (securityLevel === 6) {message.positiveMessage.push("Secure password")}
  
    res.send({ pw: pw, passed: securityLevel, message: message , total: 6 })
  } catch (error) {
    res.send("can only take = - + . , ; : $ @ & ! as a special character" + error)
  }
})



module.exports = router;