# Splinter

## Final Group Project

Keeping track of group expenditures can be tough and awkward. 

This is an app that helps to track spending and divide and settle the bills.

## The Tech

The tech that this project will use is the following: 

* [React](https://reactjs.org/docs/getting-started.html)
* [Redux](https://redux.js.org/)
* [Express](https://expressjs.com/en/api.html)
* [Knex.js (SQL)](https://knexjs.org/)
* [Bootstrap]
* [JWT Auth (Local)](https://jwt.io/)


## User Stories

### MVP

As a user:
  * I want to register for the App under my name, and email and signin
  * I want to be able to create a group
  * I want to be able to add people to a group and remove if I am admin of the group
  * I want to be able to see what groups I am part of
  * I want to be able to add a transaction to the group with the amount and other members involved
  * I want to see a list of transactions for my groups
  
 

### Stretch
  * I want to be able to see the balance owed for everyone
  * I want to be able to see the past groups
  * I want to send an email to people in a group when the debt has been settled

  ---

## Views (Client Side)
  | name | purpose |
  | --- | --- |
  | Login | View for user to enter their login credentials |
  | Register | View for user to sign up for the App |
  | LandingPage | Filler content |
  | Taskbar | Navbar on the side  |
  | CreateGroup | View to create a new group |
  | CreateTransaction | View to add a new transaction to a group |
  | AllTransactions | View to display all transactions for current group |
  | HistoricalGroups | View to display all past groups and transactions |
  | SettleTransactions | View to settle outstanding transactions |
  | About | View to show what the app is about and who created it |


## Reducers (Client Side)

  | name | purpose |
  | --- | --- |
  | auth | Store information regarding user logins, auth status and auth errors |
  | transactions | store the list of transactions for each group |
  | groups | store the list of groups the user is apart of |
  | users | store a list of users who can be part of the group |

 ## Actions

 ### transactions

 | type | data | purpose |
 | --- | --- | --- |
 | RECEIVE_TRANSACTIONS| transactions | retreive meetings from the db and store in redux |
 | ADD_TRANSACTION | transactions | Add a single transaction |
 | DELETE_TRANSACTION | transactions | Delete a transaction |
 | UPDATE_TRANSACTION | transactions | Update a transaction |


 ### users
 | type | data | purpose |
 | --- | --- | --- |
 | RECEIVE_USERS | users | retreive the users from the server |
 | GET_USER | users | retreive a specific user from the server |
 | ADD_USER | users | add a user to the group |
 | DELETE_USER | users | delete a user |
 | UPDATE_USER | users | update a user |

 ### groups
  | type | data | purpose |
| --- | --- | --- |
| ADD_GROUP | groups | add a new group |
| GET_GROUPS | groups | get a list of groups |
| DELETE_GROUP | groups | delete a single group |
| EDIT_GROUP | groups | edit a single group |
| ADD_MEMBER | groups | add member to group |
| DELETE_MEMBER | groups | delete member from group |
| UPDATE_MEMBER | groups | update member from group |



## API (Client - Server)

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| Post | /api/auth/login | Yes | Log In a User | The Users JWT Token |
| Post | /api/auth/register | Yes | Register a User | The Users JWT Token |
| Get | /api/transactions | Yes | Get a transaction list for chosen group | An Array of transactions |
| Post | /api/transactions | Yes | Add a new transaction for chosen group | id of new transaction |
| Put | /api/transactions | Yes | Update a transaction for chosen group | id of updated transaction |
| Delete | /api/transactions | Yes | Delete a transaction for chosen group | id of deleted transaction |
| Get | /api/groups | Yes | Get a group list | An Array of groups |
| Post | /api/groups | Yes | Add a new group  | id of new group |
| Put | /api/groups | Yes | Update a group  | id of updated group |
| Delete | /api/groups | Yes | Delete a group  | id of deleted group |
| Get | /api/users | Yes | Get a user list | An Array of users |
| Post | /api/users | Yes | Add a new user  | id of new user |
| Put | /api/users | Yes | Update a user  | id of updated user |
| Delete | /api/users | Yes | Delete a user  | id of deleted user |



| Get | /api/users | Yes | Get a Users Meeting Histroy | An Array of Meetings |
| Get | /api/groups | Yes | Get a Users Meeting Histroy | An Array of Meetings |



## DB (Server Side)
  There should be three tables for MVP

### Users
  | Column Name | Data Type |
  | --- | --- |
  | user_id | Integer |
  | email| String |
  | first_name | String |
  | last_name | String |
  | hash | text |

### Groups
  | Column Name | Data Type |
  | --- | --- |
  | group_id | Integer |
  | description | String |
  | user_id | Integer |
  | settled | Boolean |

  ### GroupMembers
  | Column Name | Data Type |
  | --- | --- |
  | groupMember_id | Integer |
  | name | String |
  | group_id | Integer |

   ### Transactions
  | Column Name | Data Type |
  | --- | --- |
  | transaction_id | Integer |
  | group_id | Integer |
  | groupMember_id | Integer |
  | transaction_total | Integer |
  | transaction_name | String |
  | date | BigInt |



nb: cost recorded in cents

 ### TransactionsDetails (Join Table One2M)
  | Column Name | Data Type |
  | --- | --- |
  | transactionsDetails_id | Integer |
  | transaction_id | Integer |
  | groupMember_id | Integer |
  | total_contribution | Integer |


### UserGroup (Join Table M2M)

  Many Users attend Many Meetings

 | Column Name | Data Type |
 | --- | --- |
 | user_id | Integer |
 | group_id | Integer |

 ---

 ## JSON Setup

  GET request - 


 Post request - 


## Setup

Run the following commands in your terminal:

```sh
npm install
npx knex migrate:latest
npx knex seed:run
mv .env.example .env
```

To run in development:
```sh
npm run dev
```

To run in production:
```sh
npm start
```


## Heroku!!!

### Creating your app

Create your app with `heroku create [name]`

You can check that this was successful by running `heroku apps` to view a list of your apps


### Adding postgres

Add postgresql (hobby dev) to your app at `https://dashboard.heroku.com/apps/[APP NAME HERE]/resources`

Check that pg has been added by running `heroku addons` to ensure the postgresql db is on your app


### Deploying!

I have created several npm scripts that will be useful for deploying your app to heroku easily.

To push your local master branch to your heroku app:
```sh
npm run h:deploy
```

Run heroku migrations:
```sh
npm run h:migrate
```

Run heroku seeds:
```sh
npm run h:seed
```

If ever you need to rollback, you can also:
```sh
npm run h:rollback
```


### Ta-Da!
Your app should be deployed!
