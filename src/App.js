import { Routes, Route, Navigate } from 'react-router-dom';
import { Article } from './pages/articles/index'; 
import { Category } from './pages/categories/index';
import { MostRecent } from './pages/mostRecent/index';
import { Navbar } from './components/Navbar';
import { DataProvider } from './contexts/dataContext';
import './assets/main.css';
import { TopRated } from './pages/topRated';
import { ByCategory } from './pages/categories/byCategory';

export const App = () => {

  return (

    <DataProvider>

      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={ <MostRecent /> } />
        <Route path='top-rated' element={ <TopRated /> } />
        <Route path={`article/:id`} element={ <Article /> } />
        <Route path='categories' element={ <Category /> } />
        <Route path={`category/:category`} element={ <ByCategory /> } />
        <Route path='/*' element={ <Navigate to='/'/>}/>
      </Routes>

    </DataProvider>
  );
}

export default App;
