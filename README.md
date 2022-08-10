Routers

having several app.get and app.post route methods can be overbearing.
moving routes with the same routes into their own SUBJECT folder.

we need to require express in each module
we need to set express router function

app. is replaced with router.

modules.exports = router every module

calling the method does not require the previous
/route name but all links must post to the 
/routename/routename

Middlewear

minipulating the request between the client request and sever response

middlewear takes in 3 aguments in its anonymouse function called with .get

app.get("request", "reponse", "next")

next: is the call back arguement to the middleware function. named next by convention.
good for authentication, logging, and sending new headers

