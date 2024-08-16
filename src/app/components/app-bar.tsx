import MUIAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export function AppBar() {
  return (
    <MUIAppBar position="fixed" sx={{ zIndex: 2000, bgcolor: '#da003d' }}>
      <Toolbar>
        <img src="/funchan.svg" width={32} height={32} alt="logo" />
        <Typography
          variant="h6"
          noWrap
          component="h1"
          ml={1}
          sx={{ flexGrow: 1, color: 'white', fontWeight: 'bold' }}
        >
          YOko-shoku
        </Typography>
      </Toolbar>
    </MUIAppBar>
  );
}
