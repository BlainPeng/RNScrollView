/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
var RNScrollViewDemo = require('./RNScrollViewDemo');
var jsonData = require('./ImageData.json');

class RNScrollView extends Component {
    render() {
        return (<RNScrollViewDemo imgData={jsonData.data}/>);
    }
}

AppRegistry.registerComponent('RNScrollView', () => RNScrollView);
