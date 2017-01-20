import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Routes from './routes';
import * as Views from './views';

class Client extends Component {

    render () {
        return (
            <Router history={ browserHistory }>

                { Object.keys(Routes).map(path => (
                    <Route key={ path } path={ path } component={ Views[ Routes[ path ] ] }/>
                )) }

            </Router>
        )
    }
}

ReactDOM.render(<Client/>, document.getElementById('root'));
