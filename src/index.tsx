import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import { CreateProvider } from '@utils/index';

ReactDOM.render(CreateProvider(<App />), document.getElementById('root'));
