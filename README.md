# The Shortest URL
## Recommendations before start
- Please relax, and keep calm
- Find a quiet place where you can work in peacefully
- If you got stuck with something, move to another section do not lose time and
- If you need to take a break it is ok, just keep in mind we will have less than 1 hour to complete this
- Do not hesitate to ask something the interviewer, we will not provide the solution, but we will guide you through

## Objective
**Your assignment is to implement a URL shortening service using Node and Nest JS.**

## Brief Description
shortlink is a URL shortening service where you enter a URL such as https://geekbears.com/defining-an-mvp-for-non-technical-founders/ (or any other URL)  and it returns a short URL such as http://gb.shrt/GeAi9Kz.

##Requirements
Implement assignment using:

- Backend Technology: **Node Js**
- Framework: **Express JS**
- You need to persist all the data in a DB. **Mongo** is *recommended* but you can choose any other if you want

## To-Dos
- The creation of the DB Schema, this content is up to you, but try to keep it as complete as you consider.
- Endpoint 1: ``/encode``: Encodes a URL to a shortened URL
- Endpoint 1: ``/decode``: Decodes a shortened URL to its original URL.
- Both endpoints should return a  JSON response
- Come up with a Postman collection in order to test the endpoints and
- Update this README adding at the bottom instructions for how to run your code


**There is no restriction on how your encode/decode algorithm should work. You just need to make sure that a URL can be encoded to a short URL and the short URL can be decoded to the original URL and the short URL code should be less than 8 characters.**

# My (Antonio Reyes Montaño) documentation  here:
- From development stage run: npm run startDev
- Connected to MongoDB Database locally (databse_url in .env file)
- Created url Schema and model in models/URL.js
