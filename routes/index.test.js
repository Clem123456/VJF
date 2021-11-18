var app = require("../app")
var request = require("supertest")
const mongoose = require('mongoose')
require('../config/connexion')

test("Test if App is up", async () => {
  await request(app)
    .get("/testapp")
    .expect(200)
    .then((response) => {
      expect(response.body.version).toBe('0.1')
      expect(response.body.result).toBe('success')
      expect(response.body.appname).toBe("Vite Jai Faim!!")
    });
});

test("Test SignIn with good password", async () => {
  await request(app)
    .post('/users/sign-in')
    .send({ emailFromFront: 'clem@gmail.com', passwordFromFront: "123456" })
    .expect(200)
    .then((response) => {
      expect(response.body.token).toBe('s0ZwxY8HQFpUaQtinFq_aEo45nKGXIde')
    });
});

test("Test SignIn with bad password", async () => {
  await request(app)
    .post('/users/sign-in')
    .send({ emailFromFront: 'clem@gmail.com', passwordFromFront: "12345" })
    .expect(400)
    .then((response) => {
      expect(response.body.result).toBe(false)
    });
});

test("Get Infos from user", async () => {
  await request(app)
    .get("/users/me/RcHP-ooBdvNuvIBmvlPG70mIpDjSGwNg")
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(response.body.result).toBe('success')
    });
});

test("Get history of user ", async () => {
  await request(app)
    .get("/users/history/RcHP-ooBdvNuvIBmvlPG70mIpDjSGwNg")
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(response.body.result).toBe(true)
    });
});

test("POST dont to user", async () => {
  await request(app)
    .post("/users/adddonts/RcHP-ooBdvNuvIBmvlPG70mIpDjSGwNg")
    .send({ dont: 'Sucre' })
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(response.body.result).toBe(true)
    });
});

afterAll(() => { mongoose.connection.close(); });
