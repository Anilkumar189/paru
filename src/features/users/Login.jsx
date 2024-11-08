import React from 'react'
import { Formik, Form, Field } from 'formik';
import {Link} from 'react-router-dom';
import { useLoginMutation } from '../../services/leadsApi';

export default function Login() {
 var[loginFn]= useLoginMutation();
  return (
    <div>
        <h1>Login</h1>
      <Formik
       initialValues={{
         username: '',
         password: ''
         }}
       onSubmit={(values) => {
        loginFn(values).then((res)=>{
          console.log(res)
        })
       }}
     >
       {
          <Form>
          <Field type="username" name="username" />
          <br/>
          <Field type="password" name="password" />
        <br/>
          <button type="submit">
            Login
          </button>
        
        </Form>
      }
    </Formik>
     <Link to="/Singup">singup</Link>
    </div>
    
    
  )
}
