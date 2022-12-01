import './App.css';
import Counter from './Counter';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store} className="App">
      <Counter />
    </Provider>
  );
}

export default App;
