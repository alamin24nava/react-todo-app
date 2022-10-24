import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home';

export default function App() {
  return (
    <div className="container mt-4">
      <div className='text-center w-100 d-block p-3 mb-3 bg-dark text-white'>
        <h4>Todo App</h4>
      </div>
      <Home />
    </div>
  );
}
