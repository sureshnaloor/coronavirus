import { useState } from 'react';

import useStats from '../utils/useStats';
import Stats from './Stats';

export default function CountryStats() {
  const { stats: countries, loading, error } = useStats(
    'https://covid19.mathdro.id/api/countries'
  );

  const [selectedCountry, setSelectedCountry] = useState('USA');

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error...</p>;

  console.log(countries);
  return (
    <>
      <h3> currently showing: {selectedCountry}</h3>
      <select
        onChange={e => {
          setSelectedCountry(e.target.value);
          console.log(e.target.value);
        }}
      >
        {Object.entries(countries.countries).map(([country, code]) => (
          <option
            selected={selectedCountry === countries.iso3[code]}
            key={code}
            value={countries.iso3[code]}
          >
            {country}
          </option>
        ))}
      </select>

      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      />
    </>
  );
}
