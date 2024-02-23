const kafka = require('./client.js');

const init = async () => {

  const admin = kafka.admin();

  admin.connect()

  admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
      }
    ]
  })
  await admin.disconnect();
}

init();
