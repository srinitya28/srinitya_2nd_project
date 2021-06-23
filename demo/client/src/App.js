import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import Cart from "./components/cart/Cart";
import {TemplateProvider} from './templates/TemplateProvider';
import ContextProvider from './context/ContextProvider';
import DetailView from './components/ItemDetails/DetailView';


function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route exact path= '/' component={Home} />
            <Route exact path= '/cart' component={Cart} />
            <Route exact path= '/product/:id' component={DetailView}/>
          </Switch>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
