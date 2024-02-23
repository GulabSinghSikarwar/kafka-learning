const {Kafka} =require("kafkajs")

const kafka=new Kafka(
  {
    clientId:"Kafka-Application",
   brokers:["192.168.29.221:9092"] 
  }
)
module.exports = kafka
