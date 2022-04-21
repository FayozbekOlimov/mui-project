import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Avatar, Box, Card, CardActions, CardHeader, CardMedia, Collapse, Divider, IconButton, InputAdornment, Rating, TextField, Typography } from '@mui/material';
import { Favorite, FavoriteBorder, InsertCommentOutlined, Reply, ReplyOutlined, Send, ShareOutlined } from '@mui/icons-material';
import { red } from '@mui/material/colors';

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
    const [expanded, setExpanded] = useState(false);

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
                sx={{ p: 1 }}
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }}
                        src='https://randomuser.me/api/portraits/men/30.jpg' />
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <Divider />
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" sx={{ p: 0.5 }}>
                    <Rating
                        max={1}
                        icon={<Favorite fontSize="inherit" color='error' />}
                        emptyIcon={<FavoriteBorder fontSize="inherit" />}
                    />
                </IconButton>
                <Typography variant='body1' p={0.5}>12</Typography>
                <IconButton aria-label="share" sx={{ ml: 0.5, transform: 'rotateY(180deg)', p: 0.5 }}>
                    <ReplyOutlined sx={{ fontSize: '28px' }} />
                </IconButton>
                <Typography variant='body1' flex={1} textAlign='right' p={0.5}>75</Typography>
                <ExpandMore
                    // expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    sx={{ p: 0.5 }}
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
                    color='primary'
                />
            </Collapse>
        </Card>
    );
}
