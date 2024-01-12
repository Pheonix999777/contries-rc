import { useParams } from "react-router-dom";
import sty from "./index.module.css";
import { useEffect, useState } from "react";

const CountryDetail = () => {
  const [country, setCountry] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    if (name) {
      fetch(`https://restcountries.com/v3.1/all`)
        .then((res) => res.json())
        .then((data) => {
       
          const selectedCountry = data.find(
            (item) => item.name.common === name
          );

          if (selectedCountry) {
            setCountry(selectedCountry);
          }
        })
        .catch((error) =>
          console.error("Error fetching country data:", error)
        );
    }
  }, [name]);

  return (
    <div>
      {country && (
        <div key={country.name.common}>
          <img className={sty.ger__img} src={country.flags.png} alt="" />
          <h3 className={sty.title}>{country.name.common}</h3>
          <dl className={sty.data}>
            <dt className={sty.data__dt}>Population:</dt>
            <dd className={sty.data__dd}>{country.population}</dd>
            <dt className={sty.data__reg}>Region:</dt>
            <dd className={sty.data__lists}>{country.region}</dd>
            <dt className={sty.data__capital}>Capital:</dt>
            <dd className={sty.data__capital_text}>{country.capital}</dd>
          </dl>
        </div>
      )}
    </div>
  );
};


export default CountryDetail