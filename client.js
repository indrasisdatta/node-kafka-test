const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
  clientid: "nodejs-kafka",
  brokers: ["192.168.1.5/"],
});
