import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Preloader from '../../helpers/preloader';

class index extends Component {
    
    state = {
        posts : [],
        showLoading: false
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                const postList = res.data.slice(0,10)
                this.setState({
                    posts: postList
                });
            });
    }

    render() {
        const { posts, showLoading} = this.state; 
        const postList = posts.length? (
            posts.map(post => {
                return (
                    <tr key={post.id}>
                        <td>{post.title}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
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
                        <table className="stripped">
                            <thead>
                                <tr>
                                    <th>Village Leader</th>
                                    <th>Issue</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {postList}
                            </tbody>
                        </table>
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
