const db = require("../config/connection");
const { User, Activity } = require("../models");
const bcrypt = require("bcrypt");

// Helper function to get a random subset of activities
function getRandomActivities(activitiesArray) {
  const minActivities = 3;
  const maxActivities = 5;
  const numberOfActivities =
    Math.floor(Math.random() * (maxActivities - minActivities + 1)) +
    minActivities;
  const randomActivities = [];

  // Shuffle the activities array to ensure randomness
  const shuffledActivities = activitiesArray.sort(() => Math.random() - 0.5);

  for (let i = 0; i < numberOfActivities; i++) {
    randomActivities.push(shuffledActivities[i]._id);
  }

  return randomActivities;
}

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await Activity.deleteMany({});

    // Create an array of activity objects
    const activities = [
      { activityText: "Football 🏈" },
      { activityText: "Golf 🏌️" },
      { activityText: "Video Games 🎮" },
      { activityText: "Soccer ⚽" },
      { activityText: "Fishing 🎣" },
      { activityText: "Baseball ⚾" },
      { activityText: "Basketball 🏀" },
      { activityText: "Hunting 🦌" },
      { activityText: "Hiking 🏃‍♂️" },
      { activityText: "Working Out 🏋🏽‍♀️" },
    ];

    await Activity.insertMany(activities);

    // Create query to get all activities
    const activitiesRes = await Activity.find();

    const users = [
      {
        name: "Frank",
        email: "danny@seed.com",
        password: await bcrypt.hash("password1", 10),
        profilePic: "../../client/public/images/devito.jpeg",
        activities: getRandomActivities(activitiesRes),
        bros: [],
      },
      {
        name: "Bob",
        email: "deniro@seed.com",
        password: await bcrypt.hash("password2", 10),
        profilePic: "../../client/public/images/bob.jpeg",
        activities: getRandomActivities(activitiesRes),
        bros: [],
      },
      {
        name: "Mike",
        email: "mj@seed.com",
        password: await bcrypt.hash("password3", 10),
        profilePic: "../../client/public/images/mike.jpeg",
        activities: getRandomActivities(activitiesRes),
        bros: [],
      },
      {
        name: "Timmy",
        email: "ttt@seed.com",
        password: await bcrypt.hash("password4", 10),
        profilePic: "../../client/public/images/tim.jpeg",
        activities: getRandomActivities(activitiesRes),
        bros: [],
      },
      {
        name: "Justin Fields",
        email: "h1m@seed.com",
        password: await bcrypt.hash("password5", 10),
        profilePic: "../../client/public/images/H1M.jpeg",
        activities: getRandomActivities(activitiesRes),
        bros: [],
      },
      {
        name: "Brad Pitt",
        email: "brad@seed.com",
        password: await bcrypt.hash("password6", 10),
        profilePic: "../../client/public/images/brad.jpeg",
        activities: getRandomActivities(activitiesRes),
        bros: [],
      },
      {
        name: "Not Dracula",
        email: "notme@seed.com",
        password: await bcrypt.hash("password7", 10),
        profilePic: "../../client/public/images/dracula.jpeg",
        activities: getRandomActivities(activitiesRes),
        bros: [],
      },
      {
        name: "John Daly",
        email: "daly@seed.com",
        password: await bcrypt.hash("password8", 10),
        profilePic: "../../client/public/images/daly.jpeg",
        activities: getRandomActivities(activitiesRes),
        bros: [],
      },
      {
        name: "Coach Prime",
        email: "prime@seed.com",
        password: await bcrypt.hash("password9", 10),
        profilePic: "../../client/public/images/prime.jpeg",
        activities: getRandomActivities(activitiesRes),
        bros: [],
      },
      {
        name: "Harry Potter",
        email: "harry@seed.com",
        password: await bcrypt.hash("password10", 10),
        profilePic: "../../client/public/images/harry.jpeg",
        activities: getRandomActivities(activitiesRes),
        bros: [],
      },
      {
        name: "Malcom's Dad",
        email: "brian@seed.com",
        password: await bcrypt.hash("password11", 10),
        profilePic: "../../client/public/images/brian.jpeg",
        activities: getRandomActivities(activitiesRes),
        bros: [],
      },
      {
        name: "Peyton",
        email: "peyton@seed.com",
        password: await bcrypt.hash("password12", 10),
        profilePic: "../../client/public/images/peyton.jpeg",
        activities: getRandomActivities(activitiesRes),
        bros: [],
      },
      {
        name: "2time",
        email: "2time@seed.com",
        password: await bcrypt.hash("password13", 10),
        profilePic: "../../client/public/images/2time.jpeg",
        activities: getRandomActivities(activitiesRes),
        bros: [],
      },
      {
        name: "Henry VIII",
        email: "henry@seed.com",
        password: await bcrypt.hash("password14", 10),
        profilePic: "../../client/public/images/henry8.jpeg",
        activities: getRandomActivities(activitiesRes),
        bros: [],
      },
      {
        name: "Sir Elton",
        email: "elton@seed.com",
        password: await bcrypt.hash("password15", 10),
        profilePic: "../../client/public/images/elton.jpeg",
        activities: getRandomActivities(activitiesRes),
        bros: [],
      },
    ];

    const createdUsers = await User.insertMany(users);

    console.log("Activities seeded!");
    console.log("Users seeded!");

    console.log("All done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
