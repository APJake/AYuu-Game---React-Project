import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../store/actions/usersAction";
import {Link} from 'react-router-dom';
import Loading from './Loading';

function UserDetail(user, index) {
    return (
        <div className="myrow" key={user._id}>
            <div className="myrow-gp">
                <div className="mytext">{index + 1}</div>
                <Link to={`/ayuu/${user._id}`} className="mytext">{user.nickname}</Link>
            </div>
            <div className={dynamicDingerClassname(user.dinger)}>{user.dinger}</div>
        </div>
    );
}

function dynamicDingerClassname(dinger){
    return (dinger>0)?"mytext gati-success": "mytext gati-danger";
}

function Dashboard(props) {

    useEffect(() => {
        props.getUsers();
    }, [])

    return (
        <div className="gati">
            {props.users.loading ? (
                          <Loading />
            ) : (
                props.users.users.map((user, index) => UserDetail(user,index))
            )}
        </div>
    );
}

const mapStateToProps = function (state) {
    return {
        users: state.users
    };
};

export default connect(mapStateToProps, {getUsers})(Dashboard);
