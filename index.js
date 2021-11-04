import './public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

export async function bootstrap() {
  console.log('[mf-subapp2] react app bootstraped');
}

export async function mount(props = {}) {
  console.log('[mf-subapp2] props from main framework', props);
  const { container } = props;
  ReactDOM.render(
    <App />,
    container
      ? container.querySelector('#react15Root')
      : document.getElementById('react15Root'),
  );
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector('#react15Root')
      : document.getElementById('react15Root'),
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  bootstrap().then(mount);
}
