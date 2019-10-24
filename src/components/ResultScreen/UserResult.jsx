import React from 'react';
import {
    Grid,
    makeStyles,
    Typography,
} from '@material-ui/core';
import { CustomCard } from '../CustomCard';
import { FakeCard } from './FakeCard';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    centerItem: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
    },
    scoreContent: {
        margin: '15px auto',
        fontSize: 20,
        color: 'green',
        textAlign: 'center',
    },
});

export const UserResult = ({ winCount, pickedCard }) => {
    const classes = useStyles();

    return (
        <Grid style={{ margin: '0 auto' }}>
            <Grid item lg={4} xs={12} className={classes.centerItem}>
                <Grid item xs={12}>
                    <Typography className={classes.scoreContent}>
                        Score: {winCount}
                    </Typography>
                </Grid>
                <Grid item xs={12} style={{ width: '100%' }}>
                    {pickedCard ?
                        <CustomCard data={pickedCard} />
                    :
                        <FakeCard />
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

UserResult.propTypes = {
    winCount: PropTypes.number.isRequired,
    pickedCard: PropTypes.shape({
        height: PropTypes.string,
        birthYear: PropTypes.string,
        eyeColor: PropTypes.string, 
        hairColor: PropTypes.string,
        skinColor: PropTypes.string,
        mass: PropTypes.string,
        name: PropTypes.string,
    }),
}