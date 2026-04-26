import { Box, Container } from '@mui/material';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import InspirationGrid from './InspirationGrid';
import { useInspirations } from '../hooks/useInspirations';

const LandingPage = () => {
  const { inspirations, loading } = useInspirations();

  return (
    <Box sx={{ bgcolor: '#f9f9f9', minHeight: '100vh' }}>
      <Navbar />
      <HeroSection />

      <Container maxWidth="lg" sx={{ pb: 8 }}>
        <InspirationGrid inspirations={inspirations} loading={loading} />
      </Container>
    </Box>
  );
};

export default LandingPage;