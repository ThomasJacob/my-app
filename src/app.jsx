import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './home.jsx';
import About from './about.jsx';
import Topics from './topics.jsx';


class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Routing App</h1>
                <Router>
                    <div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/topics">Topics</Link></li>
                        </ul>

                        <hr />
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/topics" component={Topics} />
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;