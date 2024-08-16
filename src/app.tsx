import AppBar from '@/features/app-bar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import './app.css';

function Time({ time, distance }: { time: string; distance: string }) {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'right' }}>
        <Typography variant="h3" component="span">
          {time}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'end' }}>
        <Typography variant="h5" component="span" sx={{ ml: 2 }}>
          /
        </Typography>
        <Typography variant="h5" component="span" sx={{ ml: 1 }}>
          {distance}
        </Typography>
      </Box>
    </>
  );
}

function App() {
  return (
    <>
      <AppBar />
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, auto)' }}>
        <Time time="2:00:35" distance="42.195km" />
        <Time time="2:50" distance="km" />
      </Box>
      <Slider />
    </>
  );
}

export default App;
