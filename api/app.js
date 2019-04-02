/* eslint-disable no-console */
import express from 'express';
import bodyParser from 'body-parser';

// routes
import accountRoutes from './routes/accountRoutes';
// import clientTransactionRoutes from './routes/clientTransactionRoutes';
import transactionRoutes from './routes/transactionRoutes';

const server = express();
server.use(bodyParser.json());

server.get('/', (req, res) => {
  res.send('Welcome to mobileBank');
});


// Handles all account routes
server.use('/api/v1/accounts', accountRoutes);

// Handles all transactions routes
// server.use('/api/v1/client-transactions', clientTransactionRoutes);
server.use('/api/v1/transactions', transactionRoutes);


const port = process.env.PORT || 1000;
server.listen(port, () => {
  console.log(`server is listening on port ${port}!`);
});

// Export for testing
export default server;
