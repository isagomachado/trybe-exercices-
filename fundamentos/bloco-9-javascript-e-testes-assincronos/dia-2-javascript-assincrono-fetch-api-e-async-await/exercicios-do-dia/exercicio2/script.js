const API_URL = 'https://api.coincap.io/v2/assets';

const append = () => {
  const coinList = document.querySelector('#coinList');

}

const howToExib = (obj) => `${obj.name} (${obj.symbol}): ${obj.priceUsd}`;


const fetchCoin = () => {
  const arrCoins = fetch(API_URL)
  .then((response) => response.json())
  .then((data) => console.log(data))


  return arrCoins.map((coin) => howToExib(coin))
}

window.onload = () => fetchCoin();
