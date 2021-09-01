import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.less';
import App from './app/App';

// 去除electron警告
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

