import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux'
import { 
    getPeopleIFollow,
    getMyFollowers,
    getSingleFollower
} from '../../redux'

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

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


const Followers = props => {
    const classes = useStyles()
    const { follower, single_follower } = props
    const [followerInfo, setFollowerInfo] = useState([])

    useEffect(() => {
        getSingleFollower(follower)
    }, [follower])

    useEffect(() => {
        setFollowerInfo(single_follower)
    }, [single_follower])

    const display_card = () => {
        if (follower !== []) {
            console.log(followerInfo)
            return <UserCard uid={follower[0]} sn={follower[1]} />
        } else {
            return <></>
        }
    }

    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg">
                <Card className={classes.container}>
                    <CardContent>
                        {display_card()}
                    </CardContent>
                </Card>
            </Container>
        </>
    )
}


const mapStateToProps = state => {
    return {
        my_followers: state.followers.my_followers,
        get_followers_loading: state.followers.get_followers_loading,
        get_followers_error: state.followers.get_followers_error,
        people_i_follow: state.peopleIFollow.people_i_follow,
        single_follower: state.singleFollower.single_follower,
    }
}


const mapDispatchToProps = dispatch => {
    return {
        getMyFollowers: () => dispatch(getMyFollowers()),
        getPeopleIFollow: () => dispatch(getPeopleIFollow()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Followers)