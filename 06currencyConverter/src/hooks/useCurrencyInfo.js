// import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
  // const [data, setData] = useState({})
  let currencyData = {
    date: '2023-03-12',
    usd: {
      inr: 80.6765456,
      eur: 0.8901234,
      gbp: 0.7654321,
      jpy: 109.8765432,
      aud: 1.2345678,
      cad: 1.3456789,
      chf: 0.9876543,
      cny: 6.7890123,
      sgd: 1.2345678,
      usd: 1,
    },
    eur: {
      usd: 1.1234567,
      inr: 89.1234567,
      gbp: 0.8765432,
      jpy: 129.8765432,
      aud: 1.3456789,
      cad: 1.456789,
      chf: 1.0987654,
      cny: 7.8901234,
      sgd: 1.3456789,
    },
    gbp: {
      usd: 1.3078965,
      eur: 1.1423567,
      inr: 103.456789,
      jpy: 149.8765432,
      aud: 1.5678901,
      cad: 1.6789012,
      chf: 1.2109876,
      cny: 8.9012345,
      sgd: 1.5678901,
    },
    jpy: {
      usd: 0.0091123,
      eur: 0.0077123,
      gbp: 0.0067123,
      inr: 0.7234567,
      aud: 0.0123456,
      cad: 0.0134567,
      chf: 0.0098765,
      cny: 0.0678901,
      sgd: 0.0123456,
    },
    aud: {
      usd: 0.8098765,
      eur: 0.7434567,
      gbp: 0.6378901,
      jpy: 81.2345678,
      inr: 56.7890123,
      cad: 1.1234567,
      chf: 0.654321,
      cny: 4.5678901,
      sgd: 1.1234567,
    },
    cad: {
      usd: 0.7432109,
      eur: 0.6789012,
      gbp: 0.5678901,
      jpy: 76.5432109,
      aud: 0.8901234,
      inr: 63.456789,
      chf: 0.654321,
      cny: 4.5678901,
      sgd: 0.8901234,
    },
    chf: {
      usd: 1.0123456,
      eur: 0.9123456,
      gbp: 0.8265432,
      jpy: 101.2345678,
      aud: 1.5309876,
      cad: 1.4309876,
      inr: 87.654321,
      cny: 6.7890123,
      sgd: 1.2345678,
    },
    cny: {
      usd: 0.1478901,
      eur: 0.1265432,
      gbp: 0.1123456,
      jpy: 14.5678901,
      aud: 0.2345678,
      cad: 0.2456789,
      chf: 0.1478901,
      inr: 12.3456789,
      sgd: 0.2345678,
    },
    sgd: {
      usd: 0.8098765,
      eur: 0.7434567,
      gbp: 0.6378901,
      jpy: 81.2345678,
      aud: 0.8912345,
      cad: 0.9123456,
      chf: 0.8098765,
      cny: 4.5678901,
      inr: 59.8765432,
    },
    inr: {
      sgd: 0.2345678,
      eur: 0.7434567,
      gbp: 0.6378901,
      jpy: 81.2345678,
      aud: 0.8912345,
      cad: 0.9123456,
      chf: 0.8098765,
      cny: 4.5678901,
      inr: 59.8765432,
    },
  };

  // useEffect(() => {
  //   fetch(
  //     `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
  //   )
  //     .then(res => res.json())
  //     .then(res => setData(currencyData[currency]))
  //     .catch(e => console.error('err', e));
  // }, [currency]);
  return currencyData[currency];
}

export default useCurrencyInfo;
