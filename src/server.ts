import express from 'express';
import dotenv from 'dotenv';
import messagesRouter from './routes/messages.routes';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/api/messages', messagesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
