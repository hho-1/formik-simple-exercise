import React from 'react'
import { useFormik } from 'formik'

const GeneralForm = () => {

    const {values, errors, handleChange, handleSubmit} = useFormik({
        initialValues: {
            email: '',
            age: '',
            password: ''
        },
    });

  return (
    <form>
        <div className='inputDiv'>
            <label>Email</label>
            <input type="email" value={values.email} id='email' placeholder='Email giriniz...' onChange={handleChange} />
        </div>
        <div className='inputDiv'>
            <label>Yas</label>
            <input type="number" value={values.age} id='age' placeholder='Yasinizi giriniz...' onChange={handleChange} />
        </div>
        <div className='inputDiv'>
            <label>Sifre</label>
            <input type="password" value={values.password} id='password' placeholder='Sifrenizi giriniz...' onChange={handleChange} />
        </div>
        <div className='inputDiv'>
            <label>Sifre tekrari</label>
            <input type="email" value={values.confirmPassword} id='confirmPassword' placeholder='Sifrenizi tekrar giriniz...' onChange={handleChange} />
        </div>
        <button type='submit'>Kaydet</button>
    </form>
  )
}

export default GeneralForm