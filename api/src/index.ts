import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mediasRouter from './routes/medias';
import projetsRouter from './routes/projets';
import skillsRouter from './routes/skills';
import contactRouter from './routes/contact';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

app.use('/api/medias', mediasRouter);
app.use('/api/projets', projetsRouter);
app.use('/api/skills', skillsRouter);
app.use('/api/contact', contactRouter);

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
