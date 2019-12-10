const router = require('express').Router()
const request = require('superagent') 


router.post('/', (req,res) => {
  const email = "alice.alsford@gmail.com"

  const subject = "Splinter - invoice"

  const message = "This is your invoice"

  request.post('https://api.sendgrid.com/v3/mail/send')
  .set("Authorization", "Bearer " + process.env.SENDGRID_API_KEY)
  .send(
    {
        "personalizations": [
          {
            "to": [
              {
                "email": email
              }
            ],
            "subject": subject
          }
        ],
        "from": {
          "email": "splinterapp@example.com"
        },
        "content": [
          {
            "type": "text/plain",
            "value": message
          }
        ]
      }
).then(apiResponse => {
    console.log('message sent', message)
    res.json({})
})
.catch(err => {
  console.error(err)
})


})

module.exports = router