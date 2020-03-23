import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'

import { setUser } from './redux/user/user.actions'

import './App.css';

function App() {

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const formik = useFormik({
      initialValues: {
          username: '',
  }, 
  onSubmit: values => {
      dispatch(setUser({username : values.username}))      
  },
  })

  useEffect(()=> {
      console.log(user)
  },[user])

  return (
    <div className="App">
      <main>
        <form onSubmit={formik.handleSubmit}>
        <input type="text" name="username" value={formik.values.username} onChange={formik.handleChange}/>
        <button type="submit">Set Name</button>  
        </form>
        Persisted value = {user.user}
      </main>
    </div>
  );
}

export default App;
