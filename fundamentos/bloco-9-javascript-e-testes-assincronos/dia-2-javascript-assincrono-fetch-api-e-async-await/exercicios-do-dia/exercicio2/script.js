const API_URL = "https://api.coincap.io/v2/assets";

const append = () => {
  const coinList = document.querySelector('ul');

  const creatLi = document.createElement('li');
  const divCoin = document.createElement('div');

  div

};

const howToExib = (obj) => `${obj.name} (${obj.symbol}): ${obj.priceUsd}`;

const fetchCoin = async () => {
  const arrCoins = await fetch(API_URL)
    .then((response) => response.json())
    .then((response) => {
      return response.data;
    });
  // console.log(arrCoins);
  // console.log(arrCoins.map((coin) => howToExib(coin)));
  const mapCoins = arrCoins.map((coin) => howToExib(coin));
  const filterCoins = mapCoins.filter((coin, index) => coin[index] < 11)


  return filterCoins
};

window.onload = () => console.log(fetchCoin());
