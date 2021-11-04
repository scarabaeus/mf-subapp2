import React, { version as reactVersion } from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        mf-subapp2
        <p>
          React version: {reactVersion}
        </p>
      </div>
    );
  }
}
