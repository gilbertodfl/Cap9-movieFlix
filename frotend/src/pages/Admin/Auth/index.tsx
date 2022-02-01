import { ReactComponent as AuthImage } from 'assets/images/auth-image.svg';
import {  Switch, Route } from 'react-router-dom';
import Login from './Login';
import './styles.css';

const Auth = () => {
  //  console.log('auth');
  return (
    <div className="auth-container">
      <div className="auth-banner-container">
        <h1>Divulgue seus produtos no DS CATALOG</h1>
        <p>
          Faça parte do nosso catálogo de divulgação e aumente a venda do seus
          produtos
        </p>
        <AuthImage />
      </div>
      <div className="auth-form-container">
      <Switch>
        <Route path="/admin/auth/login">
          <Login />
        </Route>
        <Route path="/admin/auth/signup">
          <h1>Card de signup</h1>
        </Route>

        <Route path="/admin/auth/recover">
          <h1>Card de recovery</h1>
        </Route>

      </Switch>
      </div>
    </div>
  );
};

export default Auth;
