import React from 'react';
import './Dashboard.css';
import Sidebar from '../Sidebar/Sidebar';
import Example from './test_g';
export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!localStorage.getItem('JWT_PAYLOAD')) {
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <div className="dashboard-wrapper">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="main">
                    <div className="top">
                        <div className="left">
                            <div className="header">Performance Statistics</div>
                        </div>
                    </div>
                    <Example/>
                    <div className="bottom">
                        
                    </div>
                </div>
            </div>
        )
    }
}