import React from 'react'
import { useState } from 'react'
import { hours } from '../data';
import CookieStandAdmin from './components/cookie-stand-admin';

const Home = () => {

  const [cookiesList, setCookiesList] = useState([]);
  const [counter, setCounter] = useState(0)

  const getRandomIntInclusive = (min, max) => {
    let min1 = Math.ceil(min);
    let max1 = Math.floor(max);
    return Math.floor(Math.random() * (max1 - min1 + 1) + min1);
  }

  const hourlySales = (minCustomer, maxCustomer, avgSale) => {
    let avgCustomer = getRandomIntInclusive(minCustomer, maxCustomer);
    let hour = Math.ceil(avgCustomer * avgSale)
    return hour;
  }

  const formHandler = (e) => {
    e.preventDefault();
    let minCustomer = e.target.min.value;
    let maxCustomer = e.target.max.value;
    let avgSale = e.target.avg.value;
    let hourlyArr = []
    for (let i = 0; i < hours.length; i++) {
      let hourlySale = hourlySales(minCustomer, maxCustomer, avgSale)
      hourlyArr.push(hourlySale)
    }
    console.log(hourlyArr)
    let cookie = {
      location: e.target.location.value,
      hourlyArr: hourlyArr,
    }
    setCookiesList([...cookiesList, cookie])
    setCounter(counter + 1)
  }

  return (
    <CookieStandAdmin counter={counter} formHandler={formHandler} cookiesList={cookiesList} />
  )
}

export default Home;
