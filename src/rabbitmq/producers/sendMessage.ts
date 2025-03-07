import { connectRabbitMQ } from '../rabbitmq';

export async function sendMessageToQueue(message: string) {
    const connection = await connectRabbitMQ();
    const channel = await connection.createChannel();
    const queue = process.env.REACT_APP_QUEUE!;

    await channel.assertQueue(queue);
    channel.sendToQueue(queue, Buffer.from(message));

    console.log(`Sent: ${message}`);
    setTimeout(() => connection.close(), 500);
}
