import { Grid, Typography, Box, CircularProgress } from '@mui/material';
import InspirationCard from './InspirationCard';

const InspirationGrid = ({ inspirations, loading }) => {
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (inspirations.length === 0) {
    return (
      <Typography textAlign="center" mt={5}>
        Be the first to drop a look!
      </Typography>
    );
  }

  return (
    <Grid container spacing={3}>
      {inspirations.map((post) => (
        <Grid item key={post.id} xs={12} sm={6} md={4}>
          <InspirationCard post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default InspirationGrid;