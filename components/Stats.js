import styled from 'styled-components';

import useStats from '../utils/useStats';

const StatBlock = styled.div`
  background: grey;
  font-size: 1rem;
  text-align: center;
  padding: 10px 10px 10px 10px;
  margin: 10px 10px 10px 10px;
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;

export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url);
  console.log(stats, loading, error);

  if (loading) return <p> Loading! </p>;
  if (error) return <p> Error....!</p>;

  return (
    <div>
      <StatGrid>
        <StatBlock>
          <h3>
            {' '}
            confirmed: <span> {stats.confirmed.value}</span>{' '}
          </h3>
        </StatBlock>
        <StatBlock>
          <h3>
            {' '}
            deaths: <span> {stats.deaths.value}</span>
          </h3>
        </StatBlock>
        <StatBlock>
          <h3>
            {' '}
            recovered: <span> {stats.recovered.value}</span>{' '}
          </h3>
        </StatBlock>
      </StatGrid>
    </div>
  );
}
