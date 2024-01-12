
import { Main } from './pages/main';
import { Header } from './components/header/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CountryDetail from './pages/details/index'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path='/' element={<Main />}/>
      <Route path='/detail/:name' element={<CountryDetail/>}/>

      </Routes>
   
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
