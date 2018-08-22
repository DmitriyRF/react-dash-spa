import React, { Component } from 'react';
import { Route } from 'react-router-dom';



class Content extends Component {

    render () {
        return (
            <div>
                Main content

                <Route path='/epam-system' render={ () => <h1>EPAM-System</h1> } />

                <Route path='/epam-system/employees' render={ () => <h1>EPAM-System Employees</h1> } />

                <Route path='/epam-system/projects' render={ () => <h1>EPAM-System Projects</h1> } />
            </div>
        );
    } 
}

export default Content;