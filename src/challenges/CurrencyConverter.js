// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCur, setFromCur] = useState("EUR");
  const [toCur, setToCur] = useState("USD");
  const [converted, setConverted] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function convert() {
      setIsLoading(true);
      const response = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`
      );
      const data = await response.json();
      setConverted(data.rates[toCur]);
      setIsLoading(false);
    }
    if (fromCur === toCur) {
      return setConverted(amount);
    } else {
      convert();
    }
  }, [amount, fromCur, toCur]);

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(event) => setAmount(Number(event.target.value))}
        disabled={isLoading}
      />
      <select
        value={fromCur}
        onChange={(event) => setFromCur(event.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCur}
        onChange={(event) => setToCur(event.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {converted} {toCur}
      </p>
    </div>
  );
};
