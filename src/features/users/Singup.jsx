import React from 'react'
import { Formik, Form, Field } from 'formik';

export default function Singup() {
  return (
    <div>
        <h1>Singup</h1>
      <Formik
       initialValues={{
         username: '',
         password: ''
         }}
       onSubmit={(values) => {
        console.log(values)
       }}
     >
       {
          <Form>
          <Field type="text" name="username" />
          <br/>
          <Field type="password" name="password" />
        <br/>
          <button type="submit">
            Singup
          </button>
        </Form>
      }
    </Formik>
     
    </div>
    
  )
}