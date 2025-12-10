import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MiniApp1 from 'mini-app-1/src/App';
import MiniApp2 from 'mini-app-2/src/App';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/mini-app-1" component={MiniApp1} />
                <Route path="/mini-app-2" component={MiniApp2} />
                <Route path="/" exact>
                    <h1>Welcome to the Shell Application</h1>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;