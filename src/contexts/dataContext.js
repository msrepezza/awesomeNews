import service from '../services/service';
import { useEffect, useState, createContext } from 'react';
import React from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    
    const [data, setData] = useState( [] );
  
    const fetchData = async () => { 
        console.log('fetchData')
        setData( await service() ) 
    }; 

    useEffect(()=> {
        fetchData();
    }, []);

    return (
        <DataContext.Provider value={{data}}>
            { children }
        </DataContext.Provider>
    );

}
