import React      from 'react';
import { render } from 'react-dom';
import App        from './components/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

render(<App />, document.querySelector('#root'));
registerServiceWorker();
