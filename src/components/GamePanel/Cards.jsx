import React from 'react';
import {
    Grid,
    makeStyles,
    Card,
} from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    contentWrapper: {
        justifyContent: 'center',
        margin: '20px auto',
        padding: 10,
    },
    contentGrid: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    selectedCard: {
        outline: '3px solid green',
        outlineOffset: '5px',
    },
    fakeCard: {
        backgroundColor: 'gray',
        borderRadius: '8px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'row',
        height: '50px',
        width: '40px',
        margin: '10px',
        [theme.breakpoints.up('md')]: {
            margin: '10px',
            height: '140px',
            width: '100px',
        },
    },
}));

export const Cards = ({ setActiveFakeCard, cards, selectedFakeCard }) => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid container item xs={12} className={classes.contentWrapper}>
                <Grid container item xs={12} className={classes.contentGrid}>
                    <Grid container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} item xs={12}>
                        {cards.map(card => (
                            <Grid key={card.name}>
                                <Card 
                                    id={card.name}
                                    className={clsx(selectedFakeCard.name === card.name && classes.selectedCard, classes.fakeCard)}
                                    onClick={() => setActiveFakeCard(card)}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

Cards.propTypes = {
    setActiveFakeCard: PropTypes.func.isRequired,
}
