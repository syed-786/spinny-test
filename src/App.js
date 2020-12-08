import './App.css';
import {Provider} from 'react-redux';
import store from './Redux/store';
import AnimeContainer from './components/animeContainerComponent/animeContainer';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AnimeContainer /> {/* main  container component for app  */}
      </Provider>
    </div>
  );
}

export default App;
