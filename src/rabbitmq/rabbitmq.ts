import amqp from 'amqplib';

const RABBITMQ_URL = process.env.RABBITMQ_URL!;

export async function connectRabbitMQ() {
    try {
        const connection = await amqp.connect(RABBITMQ_URL);
        console.log('🐰 Connected to RabbitMQ');
        return connection;
    } catch (error) {
        console.error('❌ Error connecting to RabbitMQ:', error);
        process.exit(1);
    }
}
