import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Content from '../Content';
import './main.css';

class Main extends Component {
    
  render () {
    return (
        <main id="main">
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 col-md-3'>
                        <Route path='/' component={Sidebar}/>
                    </div>
                    <div className='col-12 col-md-9'>
                        <Route path='/' component={Content}/>
                        <Route path='/faq' component={Content}/>
                        <Route path='/help'component={Content}/>
                    </div>
                </div>
            </div>
        </main>
    );
  }
}; 

export default Main;