import './App.css';
import Login from './components/login';
import ProductList from './components/productlist';
import RenderList from './components/renderlist';
import TodoList from './components/todolist';

function App() {

  return (
    <div className='container'>
      <h1>React Module 2</h1>
      {/* <Login /> */}
      <ProductList />
    </div>
  );
}

export default App;
