import {BrowserRouter as Router, NavLink} from 'react-router-dom'
import {useRoutes} from './Components/routes'

function App() {
  const routes = useRoutes()

  return (
    <div>
      <Router>
      <header>
        <div className='links'>
          <NavLink className='nav-btn' to="/time">Время</NavLink>
          <NavLink className='nav-btn' to="/weather">Погода</NavLink>
        </div>
      </header>
        {routes}
      </Router>
    </div>
  );
}

export default App;
