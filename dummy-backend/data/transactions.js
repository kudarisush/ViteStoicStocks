const fs = require('node:fs/promises');

async function getStoredTransactions() {
  const rawFileContent = await fs.readFile('transactions.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  return data.transactions ?? [];
}

function storeTransactions(transactions) {
  return fs.writeFile('transactions.json', JSON.stringify({ transactions: transactions || [] }));
}

exports.getStoredTransactions = getStoredTransactions;
exports.storeTransactions = storeTransactions;