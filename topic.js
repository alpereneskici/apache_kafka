const { Kafka } = require("kafkajs");

createTopic();

async function createTopic() {
  try {
    // Admin Stuff..
    const kafka = new Kafka({
      clientId: "kafka_log_store_client2",
      brokers: ["172.29.48.1:9092"]
    });

    const admin = kafka.admin();
    console.log("Kafka Broker'a bağlanılıyor...");
    await admin.connect();
    console.log("Kafka Broker'a bağlantı başarılı, Topic üretilecek..");
    await admin.createTopics({
      topics: [
        {
          topic: "Emiralp",
          numPartitions: 2
        },
      
      ]
    });
    console.log("Topic Başarılı bir şekilde oluşturulmuştur...");
    await admin.disconnect();
  } catch (error) {
    console.log("Bir Hata Oluştu", error);
  } finally {
    process.exit(0);
  }
}