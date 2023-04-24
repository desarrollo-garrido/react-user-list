import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/index.css';
const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer);

root.render(<App />);
