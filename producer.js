const { kafka } = require("./client");

async function init() {
  const producer = kafka.producer();
  console.log("Connecting producer");
  await producer.connect();
  console.log("Producer connected");
  await producer.send({
    topic: "rider-updates",
    messages: [
      {
        partition: 0,
        key: "location-update",
        value: JSON.stringify({ name: "Rider 2", loc: "South" }),
      },
    ],
  });

  await producer.disconnect();
}

init();
