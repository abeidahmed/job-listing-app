const request = require("supertest");
const app = require("../app");
const User = require("../models/user");
const { userOneId, userOne, setupDatabase } = require("./fixtures/user-db");

beforeEach(setupDatabase);

test("Should sign up a new user", async () => {
  const response = await request(app)
    .post("/api/v1/signup")
    .send({
      firstName: "Abeid",
      lastName: "Ahmed",
      email: "abeidmama@example.com",
      password: "hellobrother123"
    })
    .expect(201);

  const user = await User.findById(response.body.user._id);
  expect(user).not.toBeNull();

  // assertions about the response
  expect(response.body).toMatchObject({
    user: {
      firstName: "Abeid",
      lastName: "Ahmed",
      email: "abeidmama@example.com"
    },
    token: user.tokens[0].token
  });
  expect(user.password).not.toBe("hellobrother123");
});

test("Should login existing user", async () => {
  const response = await request(app)
    .post("/api/v1/login")
    .send({
      email: userOne.email,
      password: userOne.password
    })
    .expect(200);

  const user = await User.findById(userOneId);
  expect(user).not.toBeNull();
  expect(response.body.token).toBe(user.tokens[2].token);
});

test("Should fetch the current user", async () => {
  await request(app)
    .get("/api/v1/currentUser")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
});

test("Should not fetch the current user if unauthenticated", async () => {
  await request(app)
    .get("/api/v1/currentUser")
    .send()
    .expect(401);
});

test("Should fetch all the users", async () => {
  await request(app)
    .get("/api/v1/allUsers")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
});

test("Should not fetch all users if unauthenticated", async () => {
  await request(app)
    .get("/api/v1/allUsers")
    .send()
    .expect(401);
});

test("Should logout current user", async () => {
  await request(app)
    .post("/api/v1/logout")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);

  const user = await User.findById(userOneId);
  expect(user.tokens).toHaveLength(1);
});

test("Should not logout if unauthenticated", async () => {
  await request(app)
    .post("/api/v1/logout")
    .send()
    .expect(401);
});

test("Should logout user from all instances", async () => {
  await request(app)
    .post("/api/v1/logoutAll")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);

  const user = await User.findById(userOneId);
  expect(user.tokens).toHaveLength(0);
});

test("Should not logout user from all instances if unauthenticated", async () => {
  await request(app)
    .post("/api/v1/logoutAll")
    .send()
    .expect(401);
});
