import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blueGrey, green, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { InputAdornment, Rating, TextField } from '@mui/material';
import { Comment, CommentBankOutlined, CommentOutlined, Favorite, FavoriteBorder, FavoriteBorderOutlined, InsertCommentOutlined, Send, ShareOutlined } from '@mui/icons-material';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card>
            <CardMedia
                component="img"
                height="194"
                image="https://source.unsplash.com/400x300/?laptop"
                alt="Laptop"
            />
            <CardHeader
                sx={{ pb: 1 }}
                avatar={<Avatar sx={{ bgcolor: red[500] }} src='https://randomuser.me/api/portraits/men/30.jpg' />}
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Rating 
                        max={1} 
                        icon={<Favorite fontSize="inherit" color='error' />}
                        emptyIcon={<FavoriteBorder fontSize="inherit" />}
                    />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareOutlined />
                </IconButton>
                <ExpandMore
                    // expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <InsertCommentOutlined />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit sx={{ p: 0 }}>
                <TextField
                    sx={{
                        px: 2, py: 0.5,
                        '& :before': { display: 'none' },
                    }}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">
                            <Send fontSize='small' sx={{ cursor: 'pointer' }} />
                        </InputAdornment>,
                    }}
                    variant="standard"
                    fullWidth
                    placeholder='Leave a comment'
                    color='success'
                />
            </Collapse>
        </Card>
    );
}
