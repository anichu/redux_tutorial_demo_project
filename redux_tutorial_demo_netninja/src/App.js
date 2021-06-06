import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import CakeContainer from './components/CakeContainer';
import store from './redux/store'
import Operation from './components/Operation';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCream from './components/IceCream';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UerContainer from './components/UerContainer';
function App() {
  return (
    <Provider store ={store}>
      
      <div className="App">
         <ItemContainer cake/>
         <ItemContainer/>
         <CakeContainer />
         <IceCream />
         <HooksCakeContainer/>
         <NewCakeContainer />
         <UerContainer />
      </div>
    </Provider>
  );
}

export default App;
