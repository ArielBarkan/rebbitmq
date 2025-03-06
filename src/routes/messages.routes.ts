import { Router, Request, Response } from 'express';
import { sendMessageToQueue } from '../rabbitmq/producers/sendMessage';

const messagesRoutes = Router(); // ✅ Use Router() instead of express()

messagesRoutes.post('/send', async (req: Request, res: Response) => {
    try {
        const { message } = req.body;
        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        await sendMessageToQueue(message);
        return res.json({ success: true, message: 'Message sent to queue' });

    } catch (error) {
        console.error('Error sending message:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

export default messagesRoutes;
