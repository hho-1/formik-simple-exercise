import React from 'react'
import { useFormik } from 'formik'
import { basicSchema } from '../schemas';

const GeneralForm = () => {

    const onSubmit = (values, actions) => {

    }

    const {values, errors, handleChange, handleSubmit} = useFormik({
        initialValues: {
            email: '',
            age: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: basicSchema,
        onSubmit,
    });

  return (
    <form onSubmit={handleSubmit}>
        <div className='inputDiv'>
            <label>Email</label>
            <input type="email" value={values.email} id='email' placeholder='Email giriniz...' onChange={handleChange} className={errors.email ? 'input-error' : ''} />
            {errors.email && <p className='error'>{errors.email}</p>}
        </div>
        <div className='inputDiv'>
            <label>Yas</label>
            <input type="number" value={values.age} id='age' placeholder='Yasinizi giriniz...' onChange={handleChange} className={errors.age ? 'input-error' : ''} />
            {errors.yas && <p className='error'>{errors.yas}</p>}
        </div>
        <div className='inputDiv'>
            <label>Sifre</label>
            <input type="password" value={values.password} id='password' placeholder='Sifrenizi giriniz...' onChange={handleChange} className={errors.password ? 'input-error' : ''} />
            {errors.password && <p className='error'>{errors.password}</p>}
        </div>
        <div className='inputDiv'>
            <label>Sifre tekrari</label>
            <input type="email" value={values.confirmPassword} id='confirmPassword' placeholder='Sifrenizi tekrar giriniz...' onChange={handleChange} className={errors.confirmPassword ? 'input-error' : ''} />
            {errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}
        </div>
        <button type='submit'>Kaydet</button>
    </form>
  )
}

export default GeneralForm