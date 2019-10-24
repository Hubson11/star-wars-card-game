import React from 'react';
import {
    makeStyles,
    Typography,
    CardHeader,
    Avatar,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    avatar: {
        backgroundColor: 'red',
        margin: '5px 0',
        width: '40px',
        height: '40px',
        [theme.breakpoints.down('sm')]: {
            width: '30px',
            height: '30px',
            margin: '0 auto',
        },
    },
    headerCard: {
        borderBottom: `1px solid ${theme.palette.color.lightGray}`,
        backgroundColor: theme.palette.color.silver,
    },
    title: {
        fontSize: 18,
        [theme.breakpoints.down('sm')]: {
            fontSize: 12,
        },
    },
    avatarLabel: {
        fontSize: 18,
        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
        },
    },
    subTitle: {
        color: theme.palette.color.gray,
        fontSize: 16,
        [theme.breakpoints.down('sm')]: {
            fontSize: 12,
        },
    }
}));

export const CustomCardHeader = ({ mass, name, gender }) => {
    const classes = useStyles();
    const newMass = mass === 'unknown' ? '0' : mass
    const avatarMass = newMass > 99 ? '99+' : newMass;
    return(
        <CardHeader
            avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                    <Typography className={classes.avatarLabel}>
                        {avatarMass}
                    </Typography>
                </Avatar>
            }
            title={
                <Typography className={classes.title}>
                    {name}
                </Typography>
            }
            subheader={
                <Typography className={classes.subTitle}>
                    {gender}
                </Typography>
            }
            className={classes.headerCard}
        />
    )
}

CustomCardHeader.propTypes = {
    mass: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
}
