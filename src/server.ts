import app from './app';
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log('');
  console.log(`Im listening to port ${PORT}`);
  console.log(`To acess, use: http://localhost:${PORT}`);
});
