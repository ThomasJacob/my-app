import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Topics extends React.Component {
    render() {
        var match = this.props.match;

        return (<div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/rendering`}>
                        Rendering with React
                        </Link>
                </li>
                <li>
                    <Link to={`${match.url}/components`}>
                        Components
        </Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>
                        Props v. State
        </Link>
                </li>
            </ul>

            <Route path={`${match.url}/:topicId`} component={Topic} />
            <Route exact path={match.url} render={() => (
                <h3>Please select a topic.</h3>
            )} />
        </div>);
    }
}

class Topic extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.match.params.topicId}</h3>
            </div>);
    }
}

export default Topics;