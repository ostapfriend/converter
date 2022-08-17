const myHeaders = new Headers();
    myHeaders.append("apikey", "dRJxVeyWYezfmm94df8CS5EZLIEK3vq9");

const requestOptions = {
  method: 'GET',
  headers: myHeaders
};

export async function getAllCurrency() {
  const BASE_URL = 'https://api.apilayer.com/fixer/latest?&base=USD';

  return await fetch(BASE_URL, requestOptions)
    .then(response => response.json())
}

export async function getOneCurrencyFromUAH(toCurrency) {
  const BASE_URL = `https://api.apilayer.com/fixer/convert?to=${toCurrency}&from=UAH&amount=1`;


  return await fetch(BASE_URL, requestOptions)
    .then(response => response.json())
}