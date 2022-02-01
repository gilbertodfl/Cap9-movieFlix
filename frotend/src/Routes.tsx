import Navbar from 'components/Navbar';
import Admin from 'pages/Admin';
import Auth from 'pages/Admin/Auth';
import Catalog from 'pages/Catalog';
import Home from 'pages/Home';
import ProductDetails from 'pages/ProductDetails';
import history from 'util/history';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import Movies from 'pages/Movie';

const Routes = () => (
  // aqui agora vamos trocar o componente BrowserRouter por Route apenas. 
  <Router history={history} >
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/products" exact>
        <Catalog />
      </Route>
      <Route path="/movies" exact>
        <Movies />
      </Route>

      <Redirect from="/admin/auth" to="/admin/auth/login" exact />  
      <Route path="/admin/auth">
         <Auth />
      </Route>

      <Route path="/products/:productId">
        <ProductDetails />
      </Route>
      <Redirect from="/admin" to="/admin/products" exact />
      <Route path="/admin" >
        <Admin />
      </Route>
    </Switch>
  </Router>
);
export default Routes;
