import app from '../../app';
import userRoutes from '../routes/userRoute';

app.use('/api/v1/users', userRoutes);

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
