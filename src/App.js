import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import CharacterSheet from './components/CharacterSheet';

import character from './sampleChar.json';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <CharacterSheet character={character} />
      </div>
    </ThemeProvider>
  );
}

export default App;
