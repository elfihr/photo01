import React from 'react'
import { menuLinks } from '../helper/helper'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='flex justify-between py-6 px-[5%] bg-bg01 text-white items-center'>
            <div>
                <h2 className='text-4xl'>Logo</h2>
            </div>
            <div className='flex gap-4'>
                {menuLinks.map((link, index) => {
                    return (
                        <div key={index}>
                            <Link to={link.href} className={link.class}>{link.name}</Link>
                        </div>
                    )
                })}
            </div>
        </nav>
    )
}

export default Navbar