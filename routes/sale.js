const express = require("express");
const router = express.Router();
router.use(express.json());
const axios = require("axios");
// Sample data, replace with your actual data handling logic
const storesData = require("../data/stores");

router.get("/stores", (req, res) => {
  // Replace with your logic to get the available stores
  const availableStores = Object.keys(storesData);
  res.json(availableStores);
});

router.get("/stores/:storeId", (req, res) => {
  // Replace with your logic to get the locations for a specific store
  const storeId = req.params.storeId;
  const locations = storesData[storeId].locations;
  res.json({ locations });
});

// router.post("/setsale", (req, res) => {
//   const saleData = req.body.sale;
//   const storesData = req.body.theme;
//   console.log('Received sale data:', saleData);
//   console.log('Received sale data:', storesData);
//   storesData.forEach(store => {
//     saleData.forEach(item=>{
//       https://grocerytracker.ca/api/pc/search/${store}/{item}`
//     })
//   });
//   res.json({ message: 'Sale data received successfully' });
// });

router.post("/setsale", async (req, res) => {
  const saleData = req.body.sale;
  const storesData = req.body.theme;
  console.log("Received sale data:", saleData);
  console.log("Received theme data:", storesData);

  try {
    // Iterate over storesData and saleData to make HTTP requests
    const responseData = [];
    for (const store of storesData) {
      for (const item of saleData) {
        const response = await axios.get(
          `https://grocerytracker.ca/api/pc/search/${store}/${item}`
        );
        if (response.data.results.length === 0) {
          response.data.results.push({
            code: item,
            storeID: store,
            message: "-",
          });
        }
        console.log("Response from API:", response.data);
        responseData.push(response.data);
      }
    }
    res.json(responseData);
    console.log(responseData);
  }
 catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the data" });
  }
});

// router.post('/setSale', (req, res) => {
//   // Handle the POST request here
//   res.send('POST request received');
// });

router.post("/", async (req, res) => {
  try {
    const selectedStoresID = req.body.selectedStoresID;
    let result;
    for (let selectedStore of selectedStoresID) {
      const apples = `https://grocerytracker.ca/api/pc/search/${selectedStore}/apples`;
      const responseApples = await axios.get(apples);
      applesResult = responseApples.data.results;
      const resultApples = applesResult.filter(
        (item) => item.prices.priceType === "SPECIAL"
      );

      const meat = `https://grocerytracker.ca/api/pc/search/${selectedStore}/meat`;
      const responseMeat = await axios.get(meat);
      meatResult = responseMeat.data.results;
      const resultMeat = meatResult.filter(
        (item) => item.prices.priceType === "SPECIAL"
      );

      const eggs = `https://grocerytracker.ca/api/pc/search/${selectedStore}/eggs`;
      const responseEggs = await axios.get(eggs);
      eggsResult = responseEggs.data.results;
      const resultEggs = eggsResult.filter(
        (item) => item.prices.priceType === "SPECIAL"
      );

      const bread = `https://grocerytracker.ca/api/pc/search/${selectedStore}/bread`;
      const responseBread = await axios.get(bread);
      breadResult = responseBread.data.results;
      const resultBread = breadResult.filter(
        (item) => item.prices.priceType === "SPECIAL"
      );

      const pasta = `https://grocerytracker.ca/api/pc/search/${selectedStore}/pasta`;
      const responsePasta = await axios.get(pasta);
      const pastaResult = responsePasta.data.results;
      const resultPasta = pastaResult.filter(
        (item) => item.prices.priceType === "SPECIAL"
      );

      const milk = `https://grocerytracker.ca/api/pc/search/${selectedStore}/milk`;
      const responseMilk = await axios.get(milk);
      const milkResult = responseMilk.data.results;
      const resultMilk = milkResult.filter(
        (item) => item.prices.priceType === "SPECIAL"
      );

      const moli = `https://grocerytracker.ca/api/pc/search/${selectedStore}/molisana`;
      const responseMoli = await axios.get(moli);
      const moliResult = responseMoli.data.results;
      const resultMoli = moliResult.filter(
        (item) => item.prices.priceType === "SPECIAL"
      );

      const chips = `https://grocerytracker.ca/api/pc/search/${selectedStore}/bread`;
      const responseChips = await axios.get(chips);
      const chipsResult = responseChips.data.results;
      const resultChips = chipsResult.filter(
        (item) => item.prices.priceType === "SPECIAL"
      );

      const cookies = `https://grocerytracker.ca/api/pc/search/${selectedStore}/cookies`;
      const responseCookies = await axios.get(cookies);
      const cookiesResult = responseCookies.data.results;
      const resultCookies = cookiesResult.filter(
        (item) => item.prices.priceType === "SPECIAL"
      );

      const fruits = `https://grocerytracker.ca/api/pc/search/${selectedStore}/fruits`;
      const responseFruits = await axios.get(fruits);
      const fruitsResult = responseFruits.data.results;
      const resultFruits = fruitsResult.filter(
        (item) => item.prices.priceType === "SPECIAL"
      );

      const veg = `https://grocerytracker.ca/api/pc/search/${selectedStore}/vegetables`;
      const responseVegetables = await axios.get(veg);
      const vegResult = responseVegetables.data.results;
      const resultVeg = vegResult.filter(
        (item) => item.prices.priceType === "SPECIAL"
      );

      const kettle = `https://grocerytracker.ca/api/pc/search/${selectedStore}/kettle`;
      const responseKettle = await axios.get(kettle);
      const kettleResult = responseKettle.data.results;
      const resultKettle = kettleResult.filter(
        (item) => item.prices.priceType === "SPECIAL"
      );

      const organic = `https://grocerytracker.ca/api/pc/search/${selectedStore}/organic`;
      const responseOrganic = await axios.get(organic);
      const organicResult = responseOrganic.data.results;
      const resultOrganic = organicResult.filter(
        (item) => item.prices.priceType === "SPECIAL"
      );

      const yogurt = `https://grocerytracker.ca/api/pc/search/${selectedStore}/yogurt`;
      const responseYogurt = await axios.get(yogurt);
      const yogurtResult = responseYogurt.data.results;
      const resultYogurt = yogurtResult.filter(
        (item) => item.prices.priceType === "SPECIAL"
      );

      const tea = `https://grocerytracker.ca/api/pc/search/${selectedStore}/tea`;
      const responseTea = await axios.get(tea);
      const teaResult = responseTea.data.results;
      const resultTea = teaResult.filter(
        (item) => item.prices.priceType === "SPECIAL"
      );

      const coffee = `https://grocerytracker.ca/api/pc/search/${selectedStore}/coffee`;
      const responseCoffee = await axios.get(coffee);
      const coffeeResult = responseCoffee.data.results;
      const resultCoffee = coffeeResult.filter(
        (item) => item.prices.priceType === "SPECIAL"
      );

      const cheese = `https://grocerytracker.ca/api/pc/search/${selectedStore}/cheese`;
      const responseCheese = await axios.get(cheese);
      const cheeseResult = responseCheese.data.results;
      const resultCheese = cheeseResult.filter(
        (item) => item.prices.priceType === "SPECIAL"
      );

      const butter = `https://grocerytracker.ca/api/pc/search/${selectedStore}/butter`;
      const responseButter = await axios.get(butter);
      const butterResult = responseButter.data.results;
      const resultButter = butterResult.filter(
        (item) => item.prices.priceType === "SPECIAL"
      );

      const flour = `https://grocerytracker.ca/api/pc/search/${selectedStore}/flour`;
      const responseFlour = await axios.get(flour);
      const flourResult = responseFlour.data.results;
      const resultFlour = flourResult.filter(
        (item) => item.prices.priceType === "SPECIAL"
      );

      const sugar = `https://grocerytracker.ca/api/pc/search/${selectedStore}/sugar`;
      const responseSugar = await axios.get(sugar);
      const sugarResult = responseSugar.data.results;
      const resultSugar = sugarResult.filter(
        (item) => item.prices.priceType === "SPECIAL"
      );

      const oil = `https://grocerytracker.ca/api/pc/search/${selectedStore}/oil`;
      const responseOil = await axios.get(oil);
      const oilResult = responseOil.data.results;
      const resultOil = oilResult.filter(
        (item) => item.prices.priceType === "SPECIAL"
      );

      const rice = `https://grocerytracker.ca/api/pc/search/${selectedStore}/rice`;
      const responseRice = await axios.get(rice);
      const riceResult = responseRice.data.results;
      const resultRice = riceResult.filter(
        (item) => item.prices.priceType === "SPECIAL"
      );

      const buttermilk = `https://grocerytracker.ca/api/pc/search/${selectedStore}/buttermilk`;
      const responseButtermilk = await axios.get(buttermilk);
      const buttermilkResult = responseButtermilk.data.results;
      const resultButtermilk = buttermilkResult.filter(
        (item) => item.prices.priceType === "SPECIAL"
      );

      const juice = `https://grocerytracker.ca/api/pc/search/${selectedStore}/juice`;
      const responseJuice = await axios.get(juice);
      const juiceResult = responseJuice.data.results;
      const resultJuice = juiceResult.filter(
        (item) => item.prices.priceType === "SPECIAL"
      );

      const honey = `https://grocerytracker.ca/api/pc/search/${selectedStore}/honey`;
      const responseHoney = await axios.get(honey);
      const honeyResult = responseHoney.data.results;
      const resultHoney = honeyResult.filter(
        (item) => item.prices.priceType === "SPECIAL"
      );

      const maple = `https://grocerytracker.ca/api/pc/search/${selectedStore}/maple`;
      const responseMaple = await axios.get(maple);
      const mapleResult = responseMaple.data.results;
      const resultMaple = mapleResult.filter(
        (item) => item.prices.priceType === "SPECIAL"
      );

      const beef = `https://grocerytracker.ca/api/pc/search/${selectedStore}/beef`;
      const responseBeef = await axios.get(beef);
      const beefResult = responseBeef.data.results;
      const resultBeef = beefResult.filter(
        (item) => item.prices.priceType === "SPECIAL"
      );

      const singles = `https://grocerytracker.ca/api/pc/search/${selectedStore}/singles`;
      const responseSingles = await axios.get(singles);
      const singlesResult = responseSingles.data.results;
      const resultSingles = singlesResult.filter(
        (item) => item.prices.priceType === "SPECIAL"
      );

      const beans = `https://grocerytracker.ca/api/pc/search/${selectedStore}/beans`;
      const responseBeans = await axios.get(beans);
      const beansResult = responseBeans.data.results;
      const resultBeans = beansResult.filter(
        (item) => item.prices.priceType === "SPECIAL"
      );

      const fish = `https://grocerytracker.ca/api/pc/search/${selectedStore}/fish`;
      const responseFish = await axios.get(fish);
      const fishResult = responseFish.data.results;
      const resultFish = fishResult.filter(
        (item) => item.prices.priceType === "SPECIAL"
      );

      result = [
        ...resultMeat,
        ...resultApples,
        ...resultEggs,
        ...resultBread,
        ...resultMilk,
        ...resultPasta,
        ...resultMilk,
        ...resultMoli,
        ...resultChips,
        ...resultCookies,
        ...resultFruits,
        ...resultVeg,
        ...resultKettle,
        ...resultOrganic,
        ...resultYogurt,
        ...resultTea,
        ...resultCoffee,
        ...resultCheese,
        ...resultButter,
        ...resultFlour,
        ...resultSugar,
        ...resultOil,
        ...resultRice,
        ...resultButtermilk,
        ...resultJuice,
        ...resultHoney,
        ...resultMaple,
        ...resultBeef,
        ...resultSingles,
        ...resultBeans,
        ...resultFish,
      ];
    }

    // Log the result array and send it in the response
    //console.log(result);
    res.json(result);
  } catch (error) {
    console.error("Error in /api/sale:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
