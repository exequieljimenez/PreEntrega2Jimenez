import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Bienvenidos a La Tabla. Haga su pedido online'/>}/>
          <Route path='category/:categoryId' element={<ItemListContainer />}/>
          <Route path='/item/:productId' element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
