const express = require('express');
const bodyParser = require('body-parser');

const { getStoredTransactions, storeTransactions} = require('./data/transactions');
const { getStoredStockNames } = require('./data/stockNames');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  // Attach CORS headers
  // Required when using a detached backend (that runs on a different domain)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/transactions', async (req, res) => {
  const storedTransactions = await getStoredTransactions();
  await new Promise((resolve, reject) => setTimeout(() => resolve(), 1500));
  res.json({ transactions: storedTransactions});
});

app.post('/transactions', async (req, res) => {
  const existingTransactions = await getStoredTransactions();
  const transactionData = req.body;
  const newTransaction = {
    ...transactionData,
    id: Math.random().toString(),
  };
  const updatedTransactions = [newTransaction, ...existingTransactions];
  await storeTransactions(updatedTransactions);
  res.status(201).json({ message: 'Stored new transaction.', transaction: newTransaction });
});




app.get('/buy/:id', async (req, res) => {
  const storedStocks = await getStoredStockNames();
  const stock = storedStocks.find((post) => post.id === req.params.id);
  res.json({ stock: stock });
});

app.get('/buy', async (req, res) => {
  const storedStocks = await getStoredStockNames();
  res.json({ storedNames: storedStocks });
});


app.listen(8080);
