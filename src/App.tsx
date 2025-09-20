import ReactDOM from 'react-dom/client';
import { Header } from 'remoteHeader/Header';
import './index.css';

const App = () => (
  <div className="container">
    <Header />
    <div>Name: mf-host</div>
    <div>Framework: react-19</div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);

root.render(<App />);
