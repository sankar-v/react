import React from 'react';
import { connect } from 'react-redux';
import { fetchNewTime,logout } from '../../redux/actionCreators';

const Home = (props) => {
    return(
        <div className="home">
            <h1>Welcome home!</h1>
            <p>Current time: {props.currentTime}</p>
            <button onClick = {props.updateTime}>
                Update Time
            </button>
            <a onClick={props.logout} href="#">Logout</a>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        currentTime: state.currentTime
    }
}

const mapDispatchToProps = dispatch => ({
    updateTime: () => dispatch(fetchNewTime()),
    logout : () => dispatch(logout())   
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);