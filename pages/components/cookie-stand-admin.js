import React from 'react';
import Footer from './cookie-stand-footer';
import Header from './cookie-stand-header';
import Main  from './main';
import Head from 'next/head';


const CookieStandAdmin = (props) => {
    const { counter, formHandler, cookiesList } = props
    return (
        <>
            <Head>
                <title>Cookie Stand Admin</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Main formHandler={formHandler} cookiesList={cookiesList} />
            <Footer counter={counter} />
        </>
    )
}

export default CookieStandAdmin
