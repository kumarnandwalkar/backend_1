require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const variable_1_json = 
{"name":"John", "age":30, "car":null}  // this is how json is sent in backend

app.get('/', (req, res) => {        // this is a get request and in backend we will be always creating functions 
  res.send('Hello World!')          // always res after calling '/' is written here and returned with res.send 
  // note: never ever forget to put slash(/)
})

app.get('/twitter', (req,res) => { // this get req will be triggerd only on /twitter and will return accordingly 
    res.send('kumarnandwalkar')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login on this website</h1>')  // this get req will send h1 tag
})

app.get('/json', (req, res) => {
    res.json(variable_1_json)      // this is how the json data is handeld using res.json for more such handelings visit the 
    // documentation of express
})

app.listen(process.env.PORT, () => {                    // to use dot env, we have to use process.env.... followed by whatever u want 
  console.log(`Example app listening on port ${port}`)  // now our server will always be listening on port that is defined in env file
  // whereas the above statement will print the port that is defined in the code, that dosent matter once the env setup is done
  // and as a backend server we need something that
  // will be always listening to our requests, so for that we need listen which will listen
})
// thats it, this is the server


// sometimes while working with such technologies which are using hot relode, here the code is compiled and sent to the computer as soon as 
// the file is saved, in such cases the backend server dosent work properly so for that we need to restart the server, as it does not have
// hot relode functionlaity, for that we'll be using some functionalities in future


// when we are making a production application and have some sensitive info in our code and dont want ppl to access it or sometimes
// as we have described the port 3000 its not available all the time or if someone else is running this program or we are running 
// this on any AWS or azure server then they are forcing us to use port on their system, or their port is not free, to resolve this issue
// we have dot env, 