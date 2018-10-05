import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { routerParams } from '@red-hat-insights/insights-frontend-components';
import { connect } from 'react-redux';
import { Routes } from './Routes';
import './App.scss';

class App extends Component {

    componentDidMount () {
        insights.chrome.init();
        insights.chrome.identifyApp('dashboard');
    }

    render () {
        return (
            <Routes childProps={this.props} />
        );
    }
}

App.propTypes = {
    history: PropTypes.object
};

/**
 * connect: https://github.com/reactjs/react-redux/blob/master/docs/api.md
 *          https://reactjs.org/docs/higher-order-components.html
 */
export default routerParams (connect()(App));
