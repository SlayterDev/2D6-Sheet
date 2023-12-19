import React from 'react';
import InfoPanel from './InfoPanel';
import { Container } from '@mui/material';
import StatsPanel from './StatsPanel';
import WeaponPanel from './WeaponPanel';

const CharacterSheet = ({ character }) => {
  return (
    <Container maxWidth="md" className="CharacterSheet">
      <h1>Character Sheet</h1>
      <InfoPanel character={character} />
      <StatsPanel character={character} />
      <WeaponPanel character={character} />
    </Container>
  );
};

export default CharacterSheet;
