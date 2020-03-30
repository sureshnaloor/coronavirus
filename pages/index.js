import Stats from '../components/Stats';
import CountryStats from '../components/countrySelector';
import { createGlobalStyle } from 'styled-components';

export default function IndexPage() {
  return (
    <div>
      <Stats url='https://covid19.mathdro.id/api' />
      <CountryStats />
    </div>
  );
}
