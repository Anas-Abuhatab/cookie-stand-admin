import Head from 'next/head'
import { useState } from 'react'

 const App=()=> {
  const initialValues = {
    location: '',
    max: 0,
    min: 0,
    avg: 0,
  };

  const [values, setValues] = useState(initialValues);

  function submitHandler(event) {
    event.preventDefault();
  }
  
  function inputChangeHandler(event) {
    let { name, value } = event.target;

    setValues({ ...values, [name]: value });
  }
  return (
    <>
      <Head>
        <title>cookie-stand-admin-version-1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-around p-4 mb-6 text-3xl bg-emerald-400">
        <h1 className="font-bold text-black">Cookie Stand Admin</h1>
        
      </header>
      
      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        
        <form onSubmit={submitHandler} className="w-full mb-6 font-bold text-center uppercase border-2 rounded-md bg-emerald-200 border-emerald-400 p-9" >
            <div className="flex mb-6 gap-x-6">
              <div className="flex-1">
                  <label htmlFor="location">Location</label>
                  <input className="w-full p-4 mt-3 h-9" type="text" name="location" value={values.location} onChange={inputChangeHandler} placeholder="Cookie Stand Location" />
                  
              </div>
            <button type="submit" className="w-4/12 uppercase rounded bg-emerald-600">Create Stand</button>
            </div>

            <div className="flex gap-x-12">
              <FormInputSection>
                  <label htmlFor="min">Minimum Customers per Hour</label>
                  <input className="w-full p-3 mt-3 h-9" type="number" name="min" value={values.min} onChange={inputChangeHandler} />
              </FormInputSection>
              <FormInputSection>
                  <label htmlFor="max">Maximum Customers per Hour</label>
                  <input className="w-full p-3 mt-3 h-9" type="number" name="max" value={values.max} onChange={inputChangeHandler} />
              </FormInputSection>
              <FormInputSection>
                  <label htmlFor="avg">Average Cookies per Sale</label>
                  <input className="w-full p-3 mt-3 h-9" type="number" name="avg" value={values.avg} onChange={inputChangeHandler} />
              </FormInputSection>
            </div>
        </form>
      </main>

      <footer className="p-5 text-lg text-center bg-emerald-500">
            <p>@2021 </p>
      </footer>
    </>
  )
}

function FormInputSection({ children }) {
  return (
      <div className="flex-1 rounded">
          {children}
      </div>
  );
}

export default App
