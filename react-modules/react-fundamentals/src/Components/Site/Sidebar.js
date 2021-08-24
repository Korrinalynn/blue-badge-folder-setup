import React from 'react';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Home from './Home';
import Resources from './Resources';
import FunctionalComponentDemo from '../Concepts/FunctionalComponentDemo';
import JSXRules from '../Concepts/JSXRules';
import State from '../Concepts/State';
import Effects from '../Concepts/Effects';
import PropsDemo from '../Concepts/PropsDemo';
import Hooks from '../Concepts/Hooks';
import TimePiecesApp from '../Apps/Timer-Apps/TimePiecesApp';
import NytApp from '../Apps/nyt-app/NytApp';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-list-styling">
                <ul className="sidebar-list list-unstyled">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/functionalcomponent">Functional Component</Link></li>
                    <li><Link to="/jsxrules">JSXRules</Link></li>
                    <li><Link to="/state">useState</Link></li>
                    <li><Link to="/effects">useEffect</Link></li>
                    <li><Link to="/propsdemo">Props Demo</Link></li>
                    <li><Link to="/hooks">Hooks</Link></li>
                    <li><Link to="/resources">Resources</Link></li>
                    <li><Link to="/timer">Timers</Link></li>
                    <li><Link to="/nytapp">NYT App</Link></li>
                </ul>
            </div>

            <div className="sidebar-route">
                <Switch>
                    <Route exact path="/home"><Home /></Route>
                    <Route exact path="/resources"><Resources /></Route>
                    <Route exact path="/"><Home /></Route>
                    <Route exact path="/jsxrules"><JSXRules /></Route>
                    <Route exact path="/functionalcomponent"><FunctionalComponentDemo /></Route>
                    <Route exact path="/state"><State /></Route>
                    <Route exact path="/effects"><Effects /></Route>
                    <Route exact path="/propsdemo"><PropsDemo /></Route>
                    <Route exact path="/hooks"><Hooks /></Route>
                    <Route exact path="/timer"><TimePiecesApp /></Route>
                    <Route exact path="/nytapp"><NytApp /></Route>
                </Switch>
            </div>
        </div>
    );
};

export default Sidebar;