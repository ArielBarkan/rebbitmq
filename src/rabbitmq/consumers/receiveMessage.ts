import { connectRabbitMQ } from '../rabbitmq';

async function receiveMessages() {
    const connection = await connectRabbitMQ();
    const channel = await connection.createChannel();
    const queue = process.env.REACT_APP_QUEUE!;

    await channel.assertQueue(queue);
    console.log('🎧 Waiting for messages...');

    channel.consume(queue, (msg) => {
        if (msg) {
            console.log(`📩 Received: ${msg.content.toString()}`);
            channel.ack(msg);
        }
    });
}

receiveMessages();
