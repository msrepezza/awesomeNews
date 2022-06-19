import React from 'react';
import { Link } from 'react-router-dom'

export const Navbar = () => {
  
    return (
        <div>
            <nav className=' bg-purple p-2'>
                <div className='container p-2 flex items-center justify-between'>

                    <div className='mx-3'>
                        <p className='titlePage'>Awesome News</p>
                    </div>

                    <div className='mx-5'>
                        <div className='w-full hidden block flex-grow md:block md:items-center md:w-auto'>
                            <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0'>
                                <li className='titleMenu block'> 
                                    <Link to='/'> Recent News </Link> 
                                </li>
                                <li className='titleMenu block'> 
                                    <Link to='/top-rated'> Top Rated </Link> 
                                </li>
                                <li className='titleMenu block'> 
                                    <Link to='/categories'> Categories </Link> 
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </nav> 
        </div>
    )

}
