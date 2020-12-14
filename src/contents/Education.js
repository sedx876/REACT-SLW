import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Software Engineering" where="Flatiron School" from="Sept. 2019-"  to="Oct. 2020"/>
            <Widecard title="Responsive Web Design" where="Free Code Camp" from="June 2020"/>
            <Widecard title="Javascript Algorithms and Data Structures" where="Free Code Camp" from="June 2020"/>
            </div>
            )
        }
    }
    
export default Education