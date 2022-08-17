import React, { useEffect, useState } from 'react';
import './Header.scss';

function Header() {
  const [amountUSD, setAmountUSD] = useState(0);
  const [amountEUR, setAmountEUR] = useState(0);

  /* USED ​​FETCH TO THE SERVER BECAUSE THAT SERVER CAN CONVERT MY CURRENCY ITSELF */
  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("apikey", "dRJxVeyWYezfmm94df8CS5EZLIEK3vq9");

    const requestOptions = {
      method: 'GET',
      headers: myHeaders
    };

    fetch("https://api.apilayer.com/exchangerates_data/convert?to=USD&from=UAH&amount=1", requestOptions)
      .then(response => response.json())
      .then(res => setAmountUSD(res.result))
      .catch(error => console.log('error', error));

    fetch("https://api.apilayer.com/exchangerates_data/convert?to=EUR&from=UAH&amount=1", requestOptions)
      .then(response => response.json())
      .then(res => setAmountEUR(res.result))
      .catch(error => console.log('error', error));
  }, [])

  return (
    <div className="header">
      <ul className="header__list">
        <li className="header__list__item">{`From 1 UAH to USD = ${amountUSD}`}</li>
        <li className="header__list__item">{`From 1 UAH to USD = ${amountEUR}`}</li>
      </ul>
    </div>
  )
}

export default Header;