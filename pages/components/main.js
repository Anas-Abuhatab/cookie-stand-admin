import React from 'react'
import CreateForm from './cookie-stand-form'
import ReportTable from './cookie-stand-table'

const Main = (props) => {
    const {formHandler , cookiesList} = props
    return (
        <>
        <CreateForm formHandler={formHandler} />
        {
            cookiesList.length == 0 ?<p className='pt-5 text-lg text-center text-neutral-700'>No Cookie Stands Available</p> : 
        <ReportTable cookiesList={cookiesList}/>
        }
        </>
    )
}

export default Main