require('dotenv').config()
const express = require('express')
const { Http2ServerRequest } = require('http2')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const githubData = {
  "login": "vaibhav0925",
  "id": 124309121,
  "node_id": "U_kgDOB2jOgQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/124309121?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/vaibhav0925",
  "html_url": "https://github.com/vaibhav0925",
  "followers_url": "https://api.github.com/users/vaibhav0925/followers",
  "following_url": "https://api.github.com/users/vaibhav0925/following{/other_user}",
  "gists_url": "https://api.github.com/users/vaibhav0925/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/vaibhav0925/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/vaibhav0925/subscriptions",
  "organizations_url": "https://api.github.com/users/vaibhav0925/orgs",
  "repos_url": "https://api.github.com/users/vaibhav0925/repos",
  "events_url": "https://api.github.com/users/vaibhav0925/events{/privacy}",
  "received_events_url": "https://api.github.com/users/vaibhav0925/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Vaibhav Shukla",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 5,
  "public_gists": 0,
  "followers": 0,
  "following": 3,
  "created_at": "2023-02-02T20:47:36Z",
  "updated_at": "2024-02-29T13:43:27Z"
}

app.get('/twitter', (req, res) => {
    res.send('vaibhavdotcom')
})

app.get('/logIn', (req, res) => {
    res.send('<h1>Please LogIn at code aur chai</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Chai Aur Code</h2>')
})

app.get('/github', (req, res) => {
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})