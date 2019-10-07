import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Preloader from '../../helpers/preloader';

class index extends Component {
    
    state = {
        posts : [],
        villageLeaders: [
            "George Odhiambo",
            "Elijah Akomo",
            "Mwanika Alima",
            "Hellen Awiti",
            "John Ochieng",
            "Caleb Oulu"
        ],
        incidentType: [
            "Accident",
            "Conflict",
            "Public Misconduct",
            "Transport/Medical Incident",
            "Insecurity",
            "Theft",
            "Other"
        ],
        resolutionStatus: [
            {'status':'Resolved', 'color':'new badge green'},
            {'status':'Awaiting Assignment', 'color':'new badge red'},
            {'status':'Being Processed', 'color':'new badge yellow darken-2'},
        ],
        showLoading: true
    }

    componentDidMount(){
        
        axios.get('https://data.consumerfinance.gov/resource/s6ew-h6mp.json')
            .then(res => {
                const postList = res.data.slice(0,10)
                this.setState({
                    posts: postList,
                    showLoading: false
                });
            });
    }

    render() {
        const { posts, incidentType, resolutionStatus, villageLeaders, showLoading} = this.state; 
        const postList = posts.length? (
            posts.map(post => {
                const resolution = resolutionStatus[Math.floor(Math.random() * Math.floor(resolutionStatus.length))];
                return (
                    <tr key={post.complaint_id}>
                        <td>{villageLeaders[Math.floor(Math.random() * Math.floor(villageLeaders.length))]}</td>
                        <td>{incidentType[Math.floor(Math.random() * Math.floor(incidentType.length))]}</td>
                        <td>
                            <p>{post.issue}. {post.sub_issue}.</p>
                            <p className="pull-right"><span className={resolution.color} data-badge-caption={resolution.status}></span></p>
                        </td>
                    </tr>
                )
            })
        ):(
            <tr>
                <td colSpan="3">No incidents reported yet.</td>
            </tr>
        );

        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m4">
                        <div className="card green accent-2">
                            <div className="card-content">
                                <span className="card-title center-align">67</span>
                                <p className="center-align">Incidents reported this quarter</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="card yellow accent-2">
                            <div className="card-content">
                                <span className="card-title center-align">27</span>
                                <p className="center-align">Incidents reported this month</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="card blue accent-2">
                            <div className="card-content">
                                <span className="card-title center-align">7</span>
                                <p className="center-align">Incidents reported this week</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">Reported Cases</span>
                        <table className="striped responsive-table">
                            <thead>
                                <tr>
                                    <th>Village Leader</th>
                                    <th>Incident Type</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {postList}
                            </tbody>
                        </table>
                        {showLoading && <Preloader />}
                    </div>
                </div>
                {showLoading && <Preloader />}
                
            </div>
        )
    }
}

function mapStateToProps(state){
    return { 
        activeUser: state.userState,
        posts: state.postState
    }
}


export default connect(mapStateToProps, null)(index);
