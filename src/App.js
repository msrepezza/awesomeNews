import { Routes, Route, Navigate } from 'react-router-dom';
import { Article } from './pages/articles/index'; 
import { Category } from './pages/categories/index';
import { MostRecent } from './pages/mostRecent/index';
import { Navbar } from './components/Navbar';
import { DataProvider } from './contexts/dataContext';
import './assets/main.css';
import { TopRated } from './pages/topRated';

export const App = () => {

  return (

    <DataProvider>

      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={ <MostRecent /> } />
        <Route path='top-rated' element={ <TopRated /> } />
        <Route path='article' element={ <Article /> } />
        <Route path='categories' element={ <Category /> } />
        <Route path='/*' element={ <Navigate to='/'/>}/>
      </Routes>

    </DataProvider>
  );
}

export default App;
