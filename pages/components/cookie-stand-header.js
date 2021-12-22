import React from 'react';

const Header = () => {
    return (
        <header className='flex justify-between w-full p-5 text-3xl bg-emerald-500'>
            <h1>Cookie Stand Admin</h1>
            <button className='px-4 text-base bg-gray-300 rounded-lg'>Overview</button>
        </header>
    )
}

export default Header;