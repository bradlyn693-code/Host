import express from 'express';
const app = express();
const port = Number(process.env.PORT || 3000);
app.get('/', (_req, res) => res.json({ service: 'nodeX bot', status: 'online' }));
app.listen(port, () => console.log(`nodeX bot listening on ${port}`));
