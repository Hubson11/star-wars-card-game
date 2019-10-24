import React from 'react';
import {
    makeStyles,
    Card,
} from '@material-ui/core';
import { CustomCardFooter } from './CustomCardFooter';
import { CustomCardContent } from './CustomCardContent';
import { CustomCardHeader } from './CustomCardHeader';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    card: {
        margin: '0 auto',
        width: 240,
        minHeight: 250,
        maxHeight: 450,
        [theme.breakpoints.down('md')]: {
            width: 190,
        },
        [theme.breakpoints.down('sm')]: {
            width: 125,
        },
    },
}));

export const CustomCard = ({ data }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
        <CustomCardHeader
            mass={data.mass}
            title={data.title}
            name={data.name}
            gender={data.gender}
        />
        <CustomCardContent 
            height={data.height}
            birthYear={data.birth_year} 
            eyeColor={data.eye_color}
            hairColor={data.hair_color}
            skinColor={data.skin_color}        
        />
        <CustomCardFooter
            mass={data.mass}
            created={data.created}
        />
    </Card>
  );
}

CustomCard.propTypes = {
    data: PropTypes.shape({
        mass: PropTypes.string,
        title: PropTypes.string,
        name: PropTypes.string,
        gender: PropTypes.string,
        height: PropTypes.string,
        birthYear: PropTypes.string, 
        eyeColor: PropTypes.string,
        hairColor: PropTypes.string,
        skinColor: PropTypes.string,  
    }).isRequired
}