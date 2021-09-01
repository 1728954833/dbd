import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.less';
import App from './app/App';
import { getRoot } from './util/dom';

// 去除electron警告
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

ReactDOM.render(
  <App />,
  getRoot()
);

