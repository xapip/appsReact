import React from "react";


import { Block } from "./components/Block";

import style from "./converter.module.scss";

function Converter() {
  const [course, setCourse] = React.useState({});
  
  const [currencyFrom, setCurrencyFrom] = React.useState("RUB");
  const [currencyTo, setCurrencyTo] = React.useState("USD");
  const [isValueFrom, setIsValueFrom] = React.useState(0);
  const [isValueTo, setIsValueTo] = React.useState(1);
  

  React.useEffect(() => {
    fetch("https://www.cbr-xml-daily.ru/daily_json.js")
      .then(res => res.json())
      .then((json) => 
        setCourse(json.Valute)
      )
      .catch(error => console.warn('ошибка запроса:', error))
  }, [])

  React.useEffect(() => {
    Object.keys(course).length > 0 && onChangeValueTo(isValueTo);
  }, [course]);

  const onChangeValueFrom = (value) => {
    let result;
    if (currencyFrom === "RUB" && currencyTo === "RUB") {
      result = value;
    } else if (currencyFrom === "RUB") {
      let price = value / course[currencyTo].Value;
      result = Number.isInteger(price) ? price : price.toFixed(4);
    } else if (currencyTo === "RUB") {
      let price = value * course[currencyFrom].Value;
      result = Number.isInteger(price) ? price : price.toFixed(4);
    } else {
      let price =
        (value * course[currencyFrom].Value) / course[currencyTo].Value;
      result = Number.isInteger(price) ? price : price.toFixed(4);
    }
    setIsValueFrom(value);
    setIsValueTo(result);
  };

  const onChangeValueTo = (value) => {
    let result;
    if (currencyTo === "RUB" && currencyFrom === "RUB") {
      result = value;
    } else if (currencyTo === "RUB") {
      let price = value / course[currencyFrom].Value;
      result = Number.isInteger(price) ? price : price.toFixed(4);
    } else if (currencyFrom === "RUB") {
      let price = value * course[currencyTo].Value;
      result = Number.isInteger(price) ? price : price.toFixed(4);
    } else {
      let price =
        (value * course[currencyTo].Value) / course[currencyFrom].Value;
      result = Number.isInteger(price) ? price : price.toFixed(4);
    }
    setIsValueTo(value);
    setIsValueFrom(result);
  };

  React.useEffect(() => {
    Object.keys(course).length > 0 && onChangeValueFrom(isValueFrom);
  }, [currencyFrom]);

  React.useEffect(() => {
    Object.keys(course).length > 0 && onChangeValueTo(isValueTo);
  }, [currencyTo]);
  
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className={style.App}>
        <Block
          style={style}
          value={isValueFrom}
          currency={currencyFrom}
          onChangeCurrency={(cur) => setCurrencyFrom(cur)}
          onChangeValue={onChangeValueFrom}
        />
        <Block
          style={style}
          value={isValueTo}
          currency={currencyTo}
          onChangeCurrency={(cur) => setCurrencyTo(cur)}
          onChangeValue={onChangeValueTo}
        />
      </div>
    </div>
  );
}

export default Converter;
