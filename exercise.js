const getItemById = (items, id) => items.filter((item) => item.id === id)[0];

const buildTransactions = (sales, items) => {
  return sales.map((sale) => {
    const { description, price } = getItemById(items, sale.itemId);
    return {
      ...sale,
      description,
      price,
    };
  });
};

const getTransactionsByItemDescription = (transactions, description) => {
  return transactions.filter(
    (transaction) => transaction.description === description
  );
};

module.exports = {
  getItemById,
  buildTransactions,
  getTransactionsByItemDescription,
};
