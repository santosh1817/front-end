import React from 'react';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/users/Register'
import Login from './components/users/Login'
import Account from './components/users/Account'


class App extends React.Component{

  constructor(props) {
    super(props) 
    this.state = {
      isAuthenticated: false 
    }
  }

  // handle page reloading, if the user is logged in, continue to login
  componentDidMount() {
    if(localStorage.getItem('token')) {
      this.setState(() => ({ 
        isAuthenticated: true 
      }))
    }
  }

  handleAuthentication = (boolean) => {
    this.setState(() => ({
      isAuthenticated: boolean
    }))
  }

  render()
  {
    return(
      <BrowserRouter>
    
      <div className="container">
      
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header"> 
            {/* <Link to className="navbar-brand" Link to="/">WebSiteName  */}
            </div>
            <ul className="nav navbar-nav">
              <li className="active">< Link to="/">Home</Link></li>
              <li> <Link to="/users/register">Register</Link></li>
              <li> < Link to="/users/login">Login</Link></li>
              <li> < Link to="/users">Page 3</ Link></li>
            </ul>
          </div>
        </nav>


        

        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/users/register" component={ Register } />
          <Route path="/users/login" render={(props) => {
              return <Login {...props} handleAuthentication={this.handleAuthentication} />
          }} />
          <Route path="/users/account" component={ Account } />
         

         
        </Switch>
      </div>   
      </BrowserRouter>
      
    )
  }


}

export default App;
