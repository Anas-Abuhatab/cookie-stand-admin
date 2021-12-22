import React from 'react'

const Footer =(props)=> {
    const {counter} = props
    return (
        <>
            <footer className="flex items-center justify-between py-2 bg-emerald-500">
               <p>{counter} Locations World Wide</p>
            </footer>
        </>
    )
}
export default Footer