import './public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

export const bootstrap = async () => {
  console.log('[mf-subapp2] react app bootstrapped');
};

export const mount = async (props = {}) => {
  console.log('[mf-subapp2] props from main framework', props);
  const { container } = props;
  ReactDOM.render(
    <App />,
    container
      ? container.querySelector('#react15Root')
      : document.getElementById('react15Root'),
  );
};

export const unmount = async (props) => {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector('#react15Root')
      : document.getElementById('react15Root'),
  );
};

if (!window.__POWERED_BY_QIANKUN__) {
  bootstrap().then(mount);
}
