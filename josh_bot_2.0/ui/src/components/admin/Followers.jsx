import React from 'react';

import { connect } from 'react-redux'
import { 
    getPeopleIFollow,
    getMyFollowers,
} from '../../redux'

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import Loading from './Loading'
import UserCard from './UserCard'


const useStyles = makeStyles({
    root: {
        height: '350px',
        width: '80vw',
    },
    loading: {
        height: '300px',
        width: '80vw',
    },
    loadingBar: {
        top: '50%',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    cards: {
        height: '250px',
        width: '75vw',
        display: 'flex',
        flexWrap: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: "scroll",
    },
});


const Followers = ({
    my_followers,
    get_followers_loading,
    get_followers_error,
    people_i_follow,
    getMyFollowers,
    getPeopleIFollow,
}) => {
    const classes = useStyles();

    const handleOnClick = () => {
        getMyFollowers()
    }

    const gen_follower_display = () => {
        const users = []
        if (my_followers !== []) {
            my_followers.forEach(follower => {
                users.push({
                    uid: follower[0],
                    sn: follower[1],
                })
            })
        const display = users.map((user, index) => <UserCard key={index} uid={user.uid} sn={user.sn}/>)
        return display        
        }
    }

    const DisplaySpinnerFollowersOrError = () => {
        if (get_followers_loading) {
            return (
                <div className={classes.root}>
                    <Loading />
                </div>
            )
        } else if (people_i_follow) {
            return (
                <div className={classes.cards}>
                    {gen_follower_display()}
                </div>
            )
        } else if (get_followers_error) {
            return <h2>{get_followers_error}</h2>
        }
    }


    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Card className={classes.container}>
                    <CardActions>
                        <Button size="small" onClick={() => handleOnClick()}>Refresh</Button>
                    </CardActions>
                    <CardContent>
                        {DisplaySpinnerFollowersOrError()}
                    </CardContent>
                </Card>
            </Container>
        </React.Fragment>
    )
}


const mapStateToProps = state => {
    return {
        my_followers: state.followers.my_followers,
        get_followers_loading: state.followers.get_followers_loading,
        get_followers_error: state.followers.get_followers_error,
        people_i_follow: state.peopleIFollow.people_i_follow,
    }
}


const mapDispatchToProps = dispatch => {
    return {
        getMyFollowers: () => dispatch(getMyFollowers()),
        getPeopleIFollow: () => dispatch(getPeopleIFollow()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Followers)