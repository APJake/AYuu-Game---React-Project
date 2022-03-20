import React, { Component } from "react";
import { connect } from "react-redux";
import { getSummary } from "../store/actions/summaryActions";
import moment from "moment";
import "./Summary.css";

class Summary extends Component {
    UserDetail(userDetail, index) {
        const { user, total } = userDetail;
        return (
            <div className="myrow" key={user._id}>
                <div className="myrow-gp">
                    <div className="mytext">{index + 1}</div>
                    <div className="mytext">{user.nickname}</div>
                </div>
                <div className="myrow-gp">
                    <div className="mytext">{total}</div>
                    <div className="mytext">{user.dinger}</div>
                </div>
            </div>
        );
    }

    DetailPage(detail) {
        let showDate = moment(new Date(detail._id)).fromNow();
        return (
            <div key={detail._id} className="container my-5">
                <p className="text-white">{showDate}</p>
                <div className="container">
                    {detail.users.map((userDetail, index) =>
                        this.UserDetail(userDetail, index)
                    )}
                </div>
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
            <div className="gati">
                {summary.loading ? (
                    <h2 className="text-white">Loading</h2>
                ) : (
                    summary.summary.map((detail) => this.DetailPage(detail))
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ summary: state.summary });
export default connect(mapStateToProps, { getSummary })(Summary);
