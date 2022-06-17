import React from 'react';
import { Link } from 'react-router-dom'

export const Navbar = () => {
  
    return (
        <div>
            <nav>
                <div className='container flex flex-wrap bg-purple h-12 items-center'>
                    <div className='mx-5'>
                        <p className='titlePage'>Awesome News</p>
                    </div>
                    <div>
                        <ul className='flex space-x-4'>
                            <li className='titleThumbnail block'> 
                                <Link to='/'> Recent News </Link> 
                            </li>
                            <li className='titleThumbnail block'> 
                                <Link to='/top-rater'> Top Rater </Link> 
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
