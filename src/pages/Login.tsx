import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LoginForm from '../components/LoginForm'

const Login = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <Header />
            <LoginForm />
            <Footer />
        </div>
    )
}

export default Login

// px-7 xl:px-10 