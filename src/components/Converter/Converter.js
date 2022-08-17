import React, { useEffect, useState } from 'react'
import {FormControl, Paper, TextField, Select} from '@material-ui/core';
import './Converter.scss';

function Converter() {
  const [queryFrom, setQueryFrom] = useState(1);
  const [queryTo, setQueryTo] = useState(1);
  const [currencyFrom, setCuurencyFrom] = useState({});
  const [currencyTo, setCurrencyTo] = useState({});
  const [valueFrom, setValueFrom] = useState(1);
  const [valueTo, setValueTo] = useState(1);

  /* FIRST RENDER */
  useEffect(() => {
    getData();
  }, [])

  /* NEXT RERENDERS */
  useEffect(() => {
    converter();
  }, [valueFrom, valueTo, queryFrom, queryTo])

  /* FUNCTIONS */
  async function getData() {
    const myHeaders = new Headers();
    myHeaders.append("apikey", "dRJxVeyWYezfmm94df8CS5EZLIEK3vq9");

    const requestOptions = {
      method: 'GET',
      headers: myHeaders
    };

    await fetch("https://api.apilayer.com/exchangerates_data/latest?&base=USD", requestOptions)
      .then(response => response.json())
      .then(result => {
        setCuurencyFrom(result.rates);
        setCurrencyTo(result.rates);
      })
  }

  function converter(e) {
    let num = (valueTo/valueFrom)*queryFrom;
    setQueryTo(num);
  }

  const handleTextField1 = (e) => {
    const {value} = e.target;
    const onlyNumber = parseInt(value.replace(/[^\d]/g, ''))

    setQueryFrom(onlyNumber);
  };

  const handleFormControl1 = (e) => {
    setValueFrom(e.target.value);
  };

  const handleFormControl2 = (e) => {
    setValueTo(e.target.value);
  };

  return (
    <div>
      <Paper className="paper">
        <h3>Currency Converter</h3>
        <form>
          <div className="container">
            <TextField
              value={queryFrom || ""}
              onChange={handleTextField1}
              variant='outlined'
              autoComplete="off"
            />
            <FormControl
              onChange={handleFormControl1}
              className="dropdown"
              variant='outlined'
            >
              <Select native>
                {Object.keys(currencyFrom).map((value,) => //I wrote the value as a key because I don't have an id property. It's bad practice to use an index for a key, so I didn't use it
                    <option key={value} value={currencyFrom[value]}>{value}</option>
                )}
              </Select>
            </FormControl>
          </div>
          <div className="container">
            <TextField
              value={queryTo || ""}
              variant='outlined'
            />
              <FormControl
                onChange={handleFormControl2}
                className="dropdown"
                variant='outlined'
              >
                <Select native>
                {Object.keys(currencyTo).map((value, index) =>
                  <option key={index} value={currencyTo[value]}>{value}</option>
                )}
              </Select>
            </FormControl>
          </div>
        </form>
      </Paper>
    </div>
  )
}

export default Converter;