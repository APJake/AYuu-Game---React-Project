import React, { Component } from "react";
import { connect } from "react-redux";
import { getSummary } from "../store/actions/summaryActions";
import moment from "moment";
import {Link} from 'react-router-dom';
import Loading from './Loading';


const dynamicDingerClassname = (dinger)=> {
    return dinger > 0 ? "mytext gati-success" : "mytext gati-danger";
}

class Summary extends Component {

    UserDetail(userDetail, index) {
        const { user, total } = userDetail;
        return (
            <div className="myrow" key={user._id}>
                <div className="myrow-gp">
                    <div className="mytext">{index + 1}</div>
                <Link to={`/ayuu/${user._id}`} className="mytext">{user.nickname}</Link>
                </div>
                <div className={dynamicDingerClassname(total)}>{total}</div>
            </div>
        );
    }

    DetailPage(detail) {
        let showDate = moment(new Date(detail._id)).fromNow();
        return (
            <div key={detail._id} className="gati">
                <p className="text-white mt-4">{showDate}</p>
                    {detail.users.map((userDetail, index) =>
                        this.UserDetail(userDetail, index)
                    )}
            </div>
        );
    }

    componentDidMount() {
        this.props.getSummary();
    }
    render() {
        const summary = this.props.summary;
        console.log(summary);
        return (
            <div className="container">
                <center><h5 className="mytext mt-3">ရက်စွဲအလိုက် အနိုင်/အရှုံးစာရင်း</h5></center>
                {summary.loading ? (
                          <Loading />
                ) : (
                    summary.summary.map((detail) => this.DetailPage(detail))
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ summary: state.summary });
export default connect(mapStateToProps, { getSummary })(Summary);
