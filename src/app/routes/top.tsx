import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Fast from '@/assets/fast.svg?react';
import Slow from '@/assets/slow.svg?react';
import { useState } from 'react';
import dayjs from '@/lib/configured-dayjs';

const FULL_MARATHON_KM = 42.195;

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

export function Top() {
  const [secondsPerKm, setSecondsPerKm] = useState<number>(6 * 60);
  const handleChange = (_: Event, newValue: number | number[]) => {
    setSecondsPerKm(newValue as number);
  };

  const mmssPerKm = dayjs.duration(secondsPerKm * 1000).format('mm:ss');
  const HmmssTime = dayjs
    .duration(secondsPerKm * FULL_MARATHON_KM * 1000)
    .format('H:mm:ss');

  return (
    <>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, auto)' }}>
        <Time time={HmmssTime} distance={`${FULL_MARATHON_KM}km`} />
        <Time time={mmssPerKm} distance="km" />
      </Box>
      <Box sx={{ mt: 4 }}>
        <Slider
          aria-label="Pace"
          min={2.5 * 60}
          max={10 * 60}
          value={secondsPerKm}
          onChange={handleChange}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Fast fill="currentColor" />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Slow fill="currentColor" />
          </Box>
        </Box>
      </Box>
    </>
  );
}
