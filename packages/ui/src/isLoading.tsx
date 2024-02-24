import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import CircularProgress from '@mui/joy/CircularProgress';

export function LoadingOverlay () {
  return (
      <Box
          sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
              zIndex: 9999, // Higher z-index to overlay on top
          }}
      >
          <CircularProgress />
      </Box>
  );
};
