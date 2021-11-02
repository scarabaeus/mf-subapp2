import React, { version as reactVersion } from 'react';
import Logo from './components/Logo'

export default class App extends React.Component {
  render() {
    return (
      <div className="react15-main">
        <Logo />
        <p className="react15-child">
          React version: {reactVersion}
        </p>
      </div>
    );
  }
}
