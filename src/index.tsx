import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import { createProvider } from '@utils/index';

ReactDOM.render(createProvider(<App />), document.getElementById('root'));
