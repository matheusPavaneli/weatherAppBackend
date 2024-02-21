import dotenv from 'dotenv';
dotenv.config();

import app from './app';
const { PORT } = process.env ?? 3000;

app.listen(PORT, () => {
  console.log('');
  console.log(`Im listening to port ${PORT}`);
  console.log(`To acess, use: http://localhost:${PORT}`);
});
