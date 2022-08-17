import React, { useEffect, useState } from 'react';
import { getOneCurrencyFromUAH } from '../../api/api';

import './Header.scss';

function Header() {
  const [amountUSD, setAmountUSD] = useState(0);
  const [amountEUR, setAmountEUR] = useState(0);

  /* USED ​​FETCH TO THE SERVER BECAUSE THAT SERVER CAN CONVERT MY CURRENCY ITSELF */
  useEffect(() => {
    getOneCurrencyFromUAH('USD')
      .then(res => setAmountUSD(res.result))
        .catch(error => console.log('error', error));

    getOneCurrencyFromUAH('USD')
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