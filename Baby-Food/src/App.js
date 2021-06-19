import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import MyRecipes from "./components/my-recipes/MyRecipes.component";
import { Row, Col } from 'react-bootstrap';
import NewRecipe from './components/widgets/NewRecipe';

function App() {
  return (
    <div className="App container">
      <Main />
      <CreateAccount />
      <Row className="justify-content-md-center">
        <Col>
          <MyRecipes />
        </Col>
      </Row>
      <NewRecipe />
      <Login />
    </div>
  )
}

export default App;