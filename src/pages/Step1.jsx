import { useContext, useEffect, useState } from "react";
import InfosFormContext from "../components/InfosFormContext.jsx";
import { useNavigate } from "react-router-dom";

function Step1 () {

   const { user, setUser } = useContext(InfosFormContext)
   const navigate = useNavigate()
   const [name, setName] = useState(user.name ? user.name : '')
   const [email, setEmail] = useState(user.email ? user.email : "")
   const [phone, setPhone] = useState(user.phone ? user.phone : '')
   const [errors, setErrors] = useState({name: false, email: false, phone: false})
   const [submitted, setSubmitted] = useState(0)
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   const phoneNumberRegex = /^0\d{9}$/;


   useEffect(() => {
      if (submitted > 0) {
         setErrors({
            name: name.length < 3,
            email: !emailRegex.test(email),
            phone: !phoneNumberRegex.test(phone)
         })
      }
   }, [name, email, phone])

   useEffect(() => {
      if (!errors.name && !errors.email && !errors.phone && submitted > 0) {
         setUser({
            name: name,
            email: email,
            phone: phone
         })
         navigate('/step2')
      }
   }, [submitted])

   const handleSubmit = () => {
      setSubmitted(v => v + 1)
      setErrors({
         name: name.length < 3,
         email: !emailRegex.test(email),
         phone: !phoneNumberRegex.test(phone)
      })
   }

   return (
      <div className={'page'}>
         <h1>Personal info</h1>
         <p>Please provide your name, email address and phone number.</p>

         <div className="input-container">
            {errors.name && <div className="error-msg">This field is required</div>}
            <label htmlFor="name">Name</label>
            <input className={errors.name ? 'error' : ''} id={'name'} type="text" autoComplete={"off"} placeholder={'e.g. John Doe'}  value={name} onChange={e => setName(e.target.value)} />
         </div>

         <div className="input-container">
            {errors.email && <div className="error-msg">This field is required</div>}
            <label htmlFor="email">Email Address</label>
            <input className={errors.email ? 'error' : ''} id={'email'} type="text" autoComplete={"off"} placeholder={'e.g. test@example.fr'}  value={email} onChange={e => setEmail(e.target.value)} />
         </div>

         <div className="input-container">
            {errors.phone && <div className="error-msg">This field is required</div>}
            <label htmlFor="phone">Phone Number</label>
            <input className={errors.phone ? 'error' : ''} id={'phone'} type="text" autoComplete={"off"} placeholder={'e.g. 06 09 54 44'} value={phone} onChange={e => setPhone(e.target.value)}  />
         </div>

         <button className={'next-step'} onClick={handleSubmit}>Next Step</button>
      </div>
   )
}

export default Step1;