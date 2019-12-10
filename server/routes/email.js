const { generateDebtMessages, generateDebtArray } = require('../../client/utils/settleDebts')
const router = require('express').Router()
const request = require('superagent') 




router.post('/', (req,res) => {
  const email = req.body.email
  const group = req.body.group
  const total_cost = req.body.totalSpend.totalSpent
  const groupMembersArray = req.body.members
  const balanceArray = req.body.membersTotal
  const messageArray = generateDebtMessages(generateDebtArray(groupMembersArray, balanceArray))
 

  const subject = `Splinter - ${group} invoice`

  const message = `This is your invoice for ${group} 
  Total Spend: $${total_cost/100}
  
  Group Members:
  ${req.body.members.map(member => {
    return member
  })}

  Recommended repayments: ${messageArray.map(message => { 
    return message
  })}  

  Time to pay up!`


  
  const htmlMessage = `
  <h1>This is your invoice for ${group}</h1>
  <h4>Total Spend: $${total_cost/100}</h4>
  
  <h4>Group Members:</h4>
  
  <h5>${req.body.members.map(member => {
    return  member
  })}</h5>

 

  <h5>Recommended repayments: ${messageArray.map(message => { 
    return message
  })}  </h5>

  <h4>Time to pay up!</h4>
  `

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
          },
          {
            "type": "text/html",
            "value": htmlMessage
          }
        ]
      }
).then(apiResponse => {
    console.log('message sent', message)
    res.json(apiResponse)
})
.catch(err => {
  console.error(err)
})


})

module.exports = router