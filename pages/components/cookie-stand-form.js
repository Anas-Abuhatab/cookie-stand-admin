import React from 'react'

const CreateForm = (props) => {
    const { formHandler } = props
    return (
            <form className='w-4/5 pb-1 mt-10 ml-auto mr-auto text-center rounded-lg bg-emerald-300' onSubmit={formHandler}>
                <div className='p-4 text-xl'>
                    <label className=''>Create Cookie Stand</label>
                </div>
                <div className='pb-4 space-x-2'>
                    <label className=''>Location</label>
                    <input name='location' className='w-11/12' type="text" required/>
                </div>
                <div className='flex mb-5'>
                    <div className=''>
                        <label className='px-10'>Minimum Customers Per Hour</label>
                        <br />
                        <input name='min' className='' type="text" required/>
                    </div>
                    <div>
                        <label className='px-10'>Maxmimum Customers Per Hour</label>
                        <br />
                        <input name='max' className='' type="text" required/>
                    </div>
                    <div>
                        <label className='px-10'>Average Cookies Per Sale</label>
                        <br />
                        <input name='avg' className='' type="text" required/>
                    </div>
                    <div>
                        <button type='submit' className='w-full py-3 mx-5 bg-emerald-600 px-11'>Create</button>
                    </div>
                </div>
            </form>
    )
}

export default CreateForm;