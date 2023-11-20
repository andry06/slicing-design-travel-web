
import { Provider } from 'react-redux';
import './App.css';
import store from './app/features/store';
import Home from './app/pages/Home';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
