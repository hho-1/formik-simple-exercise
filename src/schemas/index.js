import * as yup from 'yup';
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;


export const basicSchema = yup.object().shape({
    email: yup.string()
                .email('Gecerli bir email giriniz')
                .required('Email girmek zorunludur'),
    age: yup.number()
            .positive('Pozitif bir sayi giriniz.')
            .integer('Yasinizi tam sayi olarak giriniz.')
            .required('Yas girmek zorunludur.'),
    password: yup.string()
                .min(5, 'lütfen minimum 5 karakter giriniz.')
                .matches(passwordRules, {
                    message: 'En az 1 büyük harf giriniz'
                })
                .required('Sifre girmek zorunludur.'),
    confirmPassword: yup.string()
                        .oneOf([yup.ref('password')], 'Sifreler eslesmiyor')
                        .required('Tekrar sifre girmek zorunludur.')
})