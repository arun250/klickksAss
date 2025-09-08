import { useState,useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import "./index.css"

const RegisterForm = () => {
    const [form, setForm] = useState({email:"", password:""})
    const [message, setMessage] = useState("");
    const [showedSuccess, setShowSuccess] = useState(false);
    const [showedFailure, setShowFailure] = useState(false);
    const [errors, setErrors] = useState("")
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch("", {
          method:"GET",
          credentials: "include"
        })
          .then(res => res.json())
          .then(data => {
            if (data.user) {
              console.log("User is logged in:", data.user.email);
              navigate("/user-details")
            } else {
              console.log("Not logged in");
            }
          });
    }, [navigate]);
    
    const handleChange = (e) => {
        setForm({...form, [e.target.name]:e.target.value})
    }

// complete validation functions 
    const validate = () => {
        const newErrors = {}
        // email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!form.email) {
            newErrors.email = "Email is required"
        }
        else if (!emailRegex.test(form.email)) {
            newErrors.email = "Invalid Email format"
        }
        // password
        if (!form.password) {
            newErrors.password = "Password is required"
        }
        else if (form.password.length < 8) {
        newErrors.password = "Password must be atleast 8 characters"    
        }
  
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0;
    }
    
    // clicksubmit function 
    const onClickSubmit = async(event) => {
      event.preventDefault()
      
        if (validate()) {
        
            const payload = {
              ...form,
              
            }
            const apiUrl = "https://klickksassserver.onrender.com/api/register"
            const options = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            }
            const response = await fetch(apiUrl, options)
            const data = await response.json()
            if (response.ok === true) {
                setMessage(data.message || "Registration successful")
              setShowSuccess(true);
             
                setTimeout(() => {
                    setShowSuccess(false);
                  }, 2000);
                setForm({ email: "", password: ""})
              console.log("success")
              
            }
            else {
                setMessage(data.message || "Registration Failed")
                   setTimeout(() => {
                    setShowFailure(false);
                  }, 3000);
                setShowFailure(true);
            }
        }
    }
    const renderInput = (label, name, type = "text", placeholder) => (
        <div className="userCard">
          <label htmlFor={name} className="input-label">{label} :</label>
          <input
            type={type}
            name={name}
            id={name}
            className="username-input-field"
            value={form[name]}
            onChange={handleChange}
            placeholder={placeholder}
          />
          {errors[name] && <span className="error">{errors[name]}</span>}
        </div>
      );
    
    return (
        <div className="body-container">
       
            <form className="form-container" onSubmit={onClickSubmit}>
            <h1>Sign-up</h1>
        {renderInput("EMAIL", "email","email", "Enter your Email Address")}
        {renderInput("PASSWORD", "password", "password", "Enter your Password")}
        <div className="userCard">
          <button type="submit" className="submit-btn">Register</button>
                </div> 
                <p>Already registered? <Link to='/login'>Sign in now.</Link></p>
                {showedSuccess && (
          <div className="success-message">
                        {message}                        
          </div>
                )}    
        {showedFailure&& (
          <div className="failure-message">
                        {message}                        
          </div>
        )}  
        </form>
              
            </div>
        )
    }




export default RegisterForm