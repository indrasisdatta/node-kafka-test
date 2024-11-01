const { kafka } = require("./client");

async function init() {
  const consumer = kafka.consumer({ groupId: "user-1" });
  await consumer.connect();

  await consumer.subscribe({ topics: ["rider-updates"], fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message, hearbeat, pause }) => {
      console.log(
        `Consumer info >> Topic: ${topic}, Partition: ${partition}, Message: ${message.value.toString()}`
      );
    },
  });
}

init();
