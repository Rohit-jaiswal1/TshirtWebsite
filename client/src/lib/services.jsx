import { toast } from "react-hot-toast"
import { apiConnector } from "./apiconnector"
export function sendOtp(email, navigate) {
    return async (dispatch) => {
     
      try {
        const response = await apiConnector("POST", "http://localhost:4000/api/auth/sendotp", {
          email,
          checkUserPresent: true,
        })
        console.log("SENDOTP API RESPONSE............", response)
  
        console.log(response.data.success)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
  
        toast.success("OTP Sent Successfully")
        navigate("/verify-email")
      } catch (error) {
        console.log("SENDOTP API ERROR............", error)
        toast.error("Could Not Send OTP")
      }
   
    }
  }
export function getPasswordResetToken(email, setEmailSent) {
  console.log("first email  ", email);
    return async (dispatch) => {

      try {
        const response = await apiConnector("POST", "http://localhost:4000/api/auth/reset-password-token", {
          email,
        })
        console.log("emailng   ",email); 
        console.log("RESETPASSTOKEN RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
  
        toast.success("Reset Email Sent") 
        setEmailSent(true)
      } catch (error) {
        console.log("RESETPASSTOKEN ERROR............", error)
        toast.error("Failed To Send Reset Email")
      }
     
    }
  }


  export function resetPassword(password, confirmPassword, token, navigate) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
   
      try {
        const response = await apiConnector("POST", "http://localhost:4000/api/auth/reset-password", {
          password,
          confirmPassword,
          token,
        })
  
        console.log("RESETPASSWORD RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
  
        toast.success("Password Reset Successfully")
        navigate("/auth/login")
      } catch (error) {
        console.log("RESETPASSWORD ERROR............", error)
        toast.error("Failed To Reset Password")
      }
     
    }
  }