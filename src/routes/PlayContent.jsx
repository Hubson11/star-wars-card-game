import React, { useState, useEffect } from 'react';
import {
    Grid,
    Typography,
    makeStyles,
} from '@material-ui/core';
import { ResultScreen } from '../components/ResultScreen';
import { GamePanel } from '../components/GamePanel';
import { history } from '../App';
import axios from 'axios';

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

export const PlayContent = () => {
    const [player1Nick, setPlayer1Nick] = useState('');
    const [player2Nick, setPlayer2Nick] = useState('');
    const [pickedCard1, setPickedCard1] = useState(null);
    const [pickedCard2, setPickedCard2] = useState(null);
    const [activePlayer, setActivePlayer] = useState('1');
    const [player1CardsData, setPlayer1CardsData] = useState(null)
    const [player2CardsData, setPlayer2CardsData] = useState(null)
    const [loading, setLoading] = useState(true)

    const getRandom = () => Math.floor(Math.random() * 7) + 1

    async function fetchData(){
        const randomPlayer1 = getRandom()
        await axios.get(`https://swapi.co/api/people/?page=${randomPlayer1}`)
        .then(resp => {
            setPlayer1CardsData(resp.data.results)
        })
        const randomPlayer2 = getRandom()
        await axios.get(`https://swapi.co/api/people/?page=${randomPlayer2}`)
        .then(resp => {
            setPlayer2CardsData(resp.data.results)
            setLoading(false)
        })
    }

    useEffect(() => {
        fetchData()
        const data = JSON.parse(localStorage.getItem('gameData'))
        if(!data){
            history.push('/game')
        } else {
            setPlayer1Nick(data.player1)
            setPlayer2Nick(data.player2 ? data.player2 : 'Computer')
        }
    }, [])

    const classes = useStyles();

    const renderDescription = () => (
        <Grid container>
            <Grid item lg={4} xs={12} className={classes.contentWrapper}>
                <Typography className={classes.descriptionLabel}>
                    {`Player ${activePlayer} pick `}
                </Typography>
            </Grid>
        </Grid>
    )

    if(loading) return <Grid>Loading...</Grid>

    return(
        <Grid container className={classes.container}>
            <ResultScreen 
                pickedCardPlayer1={pickedCard1}
                pickedCardPlayer2={pickedCard2}
                setPickedCard1={setPickedCard1}
                setPickedCard2={setPickedCard2}
                player1={player1Nick}
                player2={player2Nick}
            />
            {renderDescription()}
            <GamePanel
                setActivePlayer={setActivePlayer}
                setPickedCard1={setPickedCard1}
                setPickedCard2={setPickedCard2}
                activePlayer={activePlayer}
                pickedCard1={pickedCard1}
                player2={player2Nick}
                data1={player1CardsData}
                data2={player2CardsData}
            />
        </Grid>
    )
}
