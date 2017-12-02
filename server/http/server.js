import app from '../app';
import userRoutes from '../routes/userRoute';
import centerRoutes from '../routes/centerRoute';
import eventRoutes from '../routes/eventRoute';

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/centers', centerRoutes);
app.use('/api/v1/events', eventRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: 'This page is not available'
  });
});

app.use((req, res) => {
  res.status(500).json({ message: 'Internal Server Error' });
});

const port = process.env.PORT || 3000;

app.set('port', port);

const server = app.listen(port, () => {
  console.log('listening to port 3000');
});

export default server;
