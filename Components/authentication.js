import React from 'react'

function login() {
    const token = '1234'
    console.log('LOGGING IN')
    const user = {
        email: "test@radiant.com",
        token: token,
        userId:1
    }
    
    localStorage.setItem('token',JSON.stringify(user))
    return user
}

function logout() {
    localStorage.removeItem('user')
}

function isLoggedIn(){
    const user = localStorage.getItem('user')
    return user !== null
}

function getUser() {
    return typeof window !== 'undefined' ? localStorage.getItem('user') : null
}

const authService ={
    login,
    logout,
    isLoggedIn,
    getUser
}

export default authService