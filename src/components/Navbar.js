import React from 'react';
import { Link } from 'react-router-dom'

export const Navbar = () => {
  
    return (
        <div>
            <nav className=' bg-purple'>
                <div className='container flex flex-wrap items-center h-12 items-center'>
                    <div className='mx-5'>
                        <p className='titlePage'>Awesome News</p>
                    </div>
                    <div>
                        <ul className='flex space-x-4'>
                            <li className='titleThumbnail block'> 
                                <Link to='/'> Recent News </Link> 
                            </li>
                            <li className='titleThumbnail block'> 
                                <Link to='/top-rated'> Top Rated </Link> 
                            </li>
                            <li className='titleThumbnail block'> 
                                <Link to='/categories'> Categories </Link> 
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> 
        </div>
    )

}
