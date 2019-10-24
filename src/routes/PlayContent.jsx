import React, { useEffect } from 'react';
import {
    Grid,
    Typography,
    makeStyles,
    CircularProgress,
} from '@material-ui/core';
import ResultScreen from '../components/ResultScreen';
import GamePanel from '../components/GamePanel';
import { history } from '../App';
import { connect } from 'react-redux';
import * as cardsActions from '../redux/actions/cardsActions';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    constainer: {
        justifyContent: 'center',
        margin: '20px 0',
    },
    contentWrapper: {
        justifyContent: 'center',
        margin: '20px auto',
    },
    descriptionLabel: {
        fontSize: 20,
        margin: '10px auto 0',
        textAlign: 'center',
        color: 'green',
        fontWeight: 700,
    },
});

const PlayContent = ({ player1Nickname, fetchCards, loading, activePlayer }) => {
    const classes = useStyles();

    useEffect(() => {
        if(!(player1Nickname.length > 0) ){
            history.push('/game')
        } 
        fetchCards(1)
        fetchCards(2)
    }, [])

    if(loading) return <Grid style={{ textAlign: 'center' }}><CircularProgress /></Grid>


    const renderDescription = () => (
        <Grid container>
            <Grid item lg={4} xs={12} className={classes.contentWrapper}>
                <Typography className={classes.descriptionLabel}>
                    {`Player ${activePlayer} pick `}
                </Typography>
            </Grid>
        </Grid>
    )

    return(
        <Grid container className={classes.container}>
            <ResultScreen />
            {renderDescription()}
            <GamePanel />
        </Grid>
    )
}

PlayContent.propTypes = {
    fetchCards: PropTypes.func.isRequired,
    player1Nickname: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    activePlayer: PropTypes.string.isRequired,
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCards: (id) => dispatch(cardsActions.fetchCards(id)),
    }
}

const mapStateToProps = (state) => {
    return {
        player1Nickname: state.namesReducer.player1Nickname,
        loading: state.cardsReducer.loading,
        activePlayer: state.cardsReducer.activePlayer,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayContent)