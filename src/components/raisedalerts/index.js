import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Preloader from '../../helpers/preloader';
import { Bar, Doughnut, Line } from 'react-chartjs-2';

class index extends Component {
    
    state = {
        posts : [],
        chartData: {
            labels: ['Seme','Bondo', 'Nyamira','Ugenya'],
            datasets: [
                {
                    label: 'Monthly Alert Distribution',
                    data:  [
                        123,
                        120,
                        53,
                        464
                    ],
                    backgroundColor:[
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)'
                    ]
                }
            ] 
        },
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
                        <Bar
                            data={this.state.chartData}
                            width={25}
                            height={250}
                            options={{ maintainAspectRatio: false }}
                        />
                    </div>
                    <div className="col s12 m4">
                        <Doughnut
                            data={this.state.chartData}
                            width={25}
                            height={250}
                            options={{ maintainAspectRatio: false }}
                        />
                    </div>
                    <div className="col s12 m4">
                    <Line
                        data={this.state.chartData}
                        width={25}
                        height={250}
                        options={{
                            maintainAspectRatio: false
                        }}
                        />
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">Raised Alerts</span>
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
