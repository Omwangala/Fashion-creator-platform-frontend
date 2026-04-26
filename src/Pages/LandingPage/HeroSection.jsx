import { Box, Typography, Button } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        minHeight: '90vh',
        width: '100%',
        overflow: 'hidden'
      }}
    >
      {/* LEFT */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          px: { xs: 4, md: 10 },
          py: 8,
          bgcolor: '#fff',
          animation: 'fadeInUp 1s ease-out',
          '@keyframes fadeInUp': {
            from: { opacity: 0, transform: 'translateY(20px)' },
            to: { opacity: 1, transform: 'translateY(0)' }
          }
        }}
      >
        <Typography variant="overline" sx={{ letterSpacing: 3, fontWeight: 'bold', mb: 1 }}>
          New Aesthetic
        </Typography>

        <Typography variant="h2" sx={{ fontWeight: 900, mb: 3 }}>
          Discover & Share <br /> Your Style
        </Typography>

        <Typography sx={{ mb: 4, maxWidth: 450 }}>
          Join a community of trendsetters.
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="contained" sx={{ bgcolor: '#000', borderRadius: 0 }}>
            Get Started
          </Button>
          <Button variant="outlined" sx={{ borderColor: '#000' }}>
            Explore
          </Button>
        </Box>
      </Box>

      {/* RIGHT */}
      <Box
        sx={{
          flex: 1,
          backgroundImage:
            'url("https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          animation: 'imageZoom 10s infinite alternate',
          '@keyframes imageZoom': {
            from: { transform: 'scale(1)' },
            to: { transform: 'scale(1.05)' }
          }
        }}
      />
    </Box>
  );
};

export default HeroSection;