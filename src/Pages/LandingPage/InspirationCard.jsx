import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const InspirationCard = ({ post }) => {
  return (
    <Card sx={{ boxShadow: 2, borderRadius: 2 }}>
      <CardMedia
        component="img"
        height="400"
        image={post.imageUrl}
        alt={post.title}
      />
      <CardContent>
        <Typography fontWeight="bold">{post.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          @{post.authorUsername}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InspirationCard;