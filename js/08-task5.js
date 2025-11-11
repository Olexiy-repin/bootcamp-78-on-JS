/*
TODO: Напиши функцію getStockReport(companyInfo), щоб вона приймала об'єкт параметрів із властивостями 
TODO: companyName та stock, і виводила репорт про кількість товарів на складі будь-якої компанії.
*/
const getStockReport = ({ companyName, stock }) => {
  const stockValues = Object.values(stock);

  const totalItems = stockValues.reduce((acc, el) => acc + el);

  return `${companyName} has ${totalItems} items in stock`;
};

console.log(
  getStockReport({
    companyName: 'Cyberdyne Systems',
    stock: {
      repairBots: 150,
      defenceBots: 50,
    },
  })
); // "Cyberdyne Systems has 200 items in stock"

console.log(
  getStockReport({
    companyName: 'Belacci',
    stock: {
      shoes: 20,
      skirts: 10,
      hats: 5,
    },
  })
); // "Belacci has 35 item in stock"
