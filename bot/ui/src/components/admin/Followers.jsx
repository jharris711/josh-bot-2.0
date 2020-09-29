import React, { useEffect, useState } from 'react';

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

import MUIDataTable from "mui-datatables"

import Loading from './Loading'
import UserCard from './UserCard'
import SelectedFollowerCard from './SelectedFollowerCard'


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
    const [followers, setFollowers] = useState([])
    const [selectedFollower, setSelectedFollower] = useState([])
    const classes = useStyles();

    const handleOnClick = () => {
        getMyFollowers()
    }

    useEffect(() => {
        const gen_follower_array = () => {
            const users = []
            if (my_followers !== []) {
                my_followers.forEach(follower => {
                    users.push({
                        uid: follower[0],
                        sn: follower[1],
                    })
                })      
            }
            return users
        }
        setFollowers(gen_follower_array())
    }, [my_followers])
    

    const columns = [
        {
            name: "uid",
            label: "User ID",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "sn",
            label: "Screen-Name",
            options: {
                filter: true,
                sort: true,
            }
        },
    ]
    const options = {
        filterType: 'checkbox',
        selectableRows: 'single',
        onRowSelectionChange: (currentRowsSelected, allRowsSelected, rowsSelected) => {
            console.log('Row Selected:', rowsSelected)
            let temp = []
            rowsSelected.forEach(row => temp.push(my_followers[row]))
            setSelectedFollower(temp)
            console.log(temp)
        }
    }


    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg">
                <Card className={classes.container}>
                    <CardActions>
                        <Button size="small" onClick={() => handleOnClick()}>Refresh</Button>
                    </CardActions>
                    <CardContent>
                        <MUIDataTable
                            title={"Your Followers"}
                            data={followers}
                            columns={columns}
                            options={options}
                        />
                    </CardContent>
                </Card>
            </Container>
            <SelectedFollowerCard follower={selectedFollower} />
        </>
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