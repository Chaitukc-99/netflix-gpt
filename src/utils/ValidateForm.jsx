import React from 'react'


export const errorMsg = (email, password) => {
    const emailChecker = /^(?:\d{10}|\w+@\w+\.\w{2,3})$/.test(email)
    if (!emailChecker) {
        return <p>Enter a valid email</p>
    }
    const passwordChecker = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password)
    if (!passwordChecker) {
        return <p>Enter a valid password</p>
    }

    return null;
}


