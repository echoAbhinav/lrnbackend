require ('dotenv').config()
const express = require('express')
const app = express() 
const port = 3000
const githubData={
  "login": "echoAbhinav",
  "id": 149135558,
  "node_id": "U_kgDOCOOgxg",
  "avatar_url": "https://avatars.githubusercontent.com/u/149135558?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/echoAbhinav",
  "html_url": "https://github.com/echoAbhinav",
  "followers_url": "https://api.github.com/users/echoAbhinav/followers",
  "following_url": "https://api.github.com/users/echoAbhinav/following{/other_user}",
  "gists_url": "https://api.github.com/users/echoAbhinav/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/echoAbhinav/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/echoAbhinav/subscriptions",
  "organizations_url": "https://api.github.com/users/echoAbhinav/orgs",
  "repos_url": "https://api.github.com/users/echoAbhinav/repos",
  "events_url": "https://api.github.com/users/echoAbhinav/events{/privacy}",
  "received_events_url": "https://api.github.com/users/echoAbhinav/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Abhinav tiwari",
  "company": null,
  "blog": "",
  "location": "Punjab",
  "email": null,
  "hireable": null,
  "bio": "Aspiring Full stack web developer",
  "twitter_username": null,
  "public_repos": 8,
  "public_gists": 0,
  "followers": 1,
  "following": 1,
  "created_at": "2023-10-27T04:45:15Z",
  "updated_at": "2024-11-06T19:55:25Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/instagram',(req,res)=>{
    res.send('_mystic.bloom')
})
app.get('/login',(req,res)=>{
    res.send('<h1>Please login at website</h1>')
})
app.get('/youtube',(req,res)=>{
  res.send('<h2>chai or main again</h2>')
})
app.get('/github',(req,res)=>{
  res.send(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
}) 