import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, IconButton, InputAdornment, Rating, TextField, Typography } from '@mui/material';
import { Favorite, FavoriteBorder, InsertCommentOutlined, MoreVert, ReplyOutlined, Send } from '@mui/icons-material';
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

export default function Post({ header, media, actions }) {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card>
            <CardHeader
                sx={{ p: 1 }}
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }}
                        src={header.logo} />
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title={header.name}
                subheader={header.date}
            />
            <CardMedia
                component="img"
                height="270"
                image={media.img}
                alt={media.alt}
            />
            <CardContent>
                <Typography sx={{ typography: { sm: 'body1', xs: 'body2' } }}>
                    {media.content}
                </Typography>
            </CardContent>
            <Divider />
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" sx={{ p: 0.5 }}>
                    <Rating
                        max={1}
                        icon={<Favorite fontSize="inherit" color='error' />}
                        emptyIcon={<FavoriteBorder fontSize="inherit" />}
                    />
                </IconButton>
                <Typography variant='body1' p={0.5}>
                    {actions.likes >= 1000 ? (actions.likes / 1000).toFixed(1) + 'K' : actions.likes}
                </Typography>
                <IconButton aria-label="share" sx={{ ml: 0.5, transform: 'rotateY(180deg)', p: 0.5 }}>
                    <ReplyOutlined sx={{ fontSize: '28px' }} />
                </IconButton>
                <Typography variant='body1' flex={1} textAlign='right' p={0.5}>
                    {actions.comments >= 1000 ? (actions.comments / 1000).toFixed(1) + 'K' : actions.comments}
                </Typography>
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
