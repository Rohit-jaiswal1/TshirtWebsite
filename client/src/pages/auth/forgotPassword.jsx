import React from 'react'
import { useState } from "react"
import { BiArrowBack } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { getPasswordResetToken } from "../../lib/services"

const ForgotPassword = () => {
    const [email, setEmail] = useState("")
    //console.log("forgotEmail ",email);
    const [emailSent, setEmailSent] = useState(false)
    const dispatch = useDispatch()
    const { loading } = useSelector((state) => state.auth)
  
    const handleOnSubmit = (e) => {
      e.preventDefault()
      console.log("forgotEmail ",email);
      dispatch(getPasswordResetToken(email, setEmailSent))
    }
  return (
    <div className="grid  place-items-center bg-[#001B22] min-h-screen ">
    {loading ? (
      <div className="spinner"></div>
    ) : (
      <div className="max-w-[500px] p-4 lg:p-8 border-white border-2  ">
        <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-white">
          {!emailSent ? "Reset your password" : "Check email"}
        </h1>
        <p className="my-4 text-[1.125rem] leading-[1.625rem] text-white">
          {!emailSent
            ? "Don't worry! We'll send you an email with steps to reset your password. If you can't access your email, we can assist with account recovery."
            : `We have sent the reset email to ${email}`}
        </p>
        <form onSubmit={handleOnSubmit}>
          {!emailSent && (
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-white ">
                Email Address <sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="form-style w-full p-2 rounded-[8px]"
              />
            </label>
          )}
          <button
            type="submit"
            className="mt-6 w-full rounded-[8px] bg-yellow-500 border-white border-2    py-[12px] px-[12px] font-medium text-richblack-900"
          >
            {!emailSent ? "Sumbit" : "Resend Email"}
          </button>
        </form>
        <div className="mt-6 flex items-center justify-between">
          <Link to="/auth/login">
            <p className="flex items-center gap-x-2 text-white">
              <BiArrowBack /> Back To Login
            </p>
          </Link>
        </div>
      </div>
    )}
  </div>
  )
}

export default ForgotPassword