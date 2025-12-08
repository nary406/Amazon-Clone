'use client'

import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const LoginForm = () => {
    const [username, setUsername] = useState('nary')
    const [password, setPassword] = useState('naryxyzo33@')
    const [showSubmitError, setShowSubmitError] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const router = useRouter()

    useEffect(() => {
        const jwtToken = Cookies.get('jwt_token')
        if (jwtToken !== undefined) {
            router.replace('/')
        }
    }, [router])

    const onSubmitSuccess = (jwtToken: string) => {
        Cookies.set('jwt_token', jwtToken, {
            expires: 30,
            path: '/',
        })
        router.replace('/')
    }

    const onSubmitFailure = (errorMsg: string) => {
        setShowSubmitError(true)
        setErrorMsg(errorMsg)
    }

    const submitForm = async (event: React.FormEvent) => {
        event.preventDefault()

        let apiUsername = username
        let apiPassword = password

        if (username === 'nary') {
            apiUsername = "rahul"
        }
        if (password === 'naryxyzo33@') {
            apiPassword = "rahul@2021"
        }

        const userDetails = { username: apiUsername, password: apiPassword }
        const url = 'https://apis.ccbp.in/login'
        const options = {
            method: 'POST',
            body: JSON.stringify(userDetails),
        }

        try {
            const response = await fetch(url, options)
            const data = await response.json()
            if (response.ok === true) {
                onSubmitSuccess(data.jwt_token)
            } else {
                onSubmitFailure(data.error_msg)
            }
        } catch {
            onSubmitFailure("Something went wrong. Please try again.")
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
            <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
                <div className="hidden md:block">
                    <Image
                        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
                        alt="website login"
                        width={500}
                        height={500}
                        className="w-full h-auto"
                        priority
                    />
                </div>

                <form className="card max-w-md mx-auto w-full" onSubmit={submitForm}>
                    <div className="flex justify-center mb-8">
                        <Image
                            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                            alt="website logo"
                            width={150}
                            height={50}
                            className="w-auto h-12"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="input-label" htmlFor="username">
                            USERNAME
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="input-field"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            placeholder="Enter Username"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="input-label" htmlFor="password">
                            PASSWORD
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="input-field"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Enter Password"
                        />
                    </div>

                    <button type="submit" className="btn-primary w-full">
                        Login
                    </button>

                    {showSubmitError && (
                        <p className="text-danger text-sm mt-4">*{errorMsg}</p>
                    )}
                </form>
            </div>
        </div>
    )
}

export default LoginForm
