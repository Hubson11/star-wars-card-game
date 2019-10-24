import React from 'react';
import {
    Grid,
    makeStyles,
    Typography,
} from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    nicknameLabel: {
        textAlign: 'center',
        fontSize: 28,
        color: theme.palette.color.white,
        fontWeight: 700,
        letterSpacing: 5,
        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
            letterSpacing: 1,
        },
    },
    finalResultScreen: {
        textAlign: 'center',
    },
    winLabel: {
        fontSize: 20,
        color: theme.palette.color.green,
        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
        },
    },
}));

const RenderNames = ({ player1Nickname, player2Nickname, playerWin }) => {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={4} className={classes.nicknameLabel} >
                {player1Nickname}
            </Grid>
            <Grid item xs={4} className={classes.finalResultScreen}>
                <Typography className={classes.winLabel}>
                    {playerWin &&
                        `${playerWin === '0' ? 'DRAW' : `Player ${playerWin} WIN!!!!!`}`
                    }
                </Typography>
            </Grid>
            <Grid item xs={4} className={classes.nicknameLabel} >
                {player2Nickname}
            </Grid>
        </Grid>
)}

RenderNames.propTypes = {
    player1Nickname: PropTypes.string.isRequired,
    player2Nickname: PropTypes.string.isRequired,
    playerWin: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => {
    return {
        player1Nickname: state.namesReducer.player1Nickname,
        player2Nickname: state.namesReducer.player2Nickname,
    }
}

export default connect(mapStateToProps, null)(RenderNames)
