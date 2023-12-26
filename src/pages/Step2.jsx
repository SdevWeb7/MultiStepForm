import { useContext, useState } from "react";
import InfosFormContext from "../components/InfosFormContext.jsx";
import { useNavigate } from "react-router-dom";
import ArcadeImg from '../../public/images/icon-arcade.svg'
import AdvancedImg from '../../public/images/icon-advanced.svg'
import ProImg from '../../public/images/icon-pro.svg'

function Step2 () {

   const { plan, setPlan } = useContext(InfosFormContext)
   const [planLevel, setPlanLevel] = useState(plan.level ? plan.level : '')
   const [planFrequency, setPlanFrequency] = useState(plan.frequency ? plan.frequency : '')
   const navigate = useNavigate()


   const handleSubmit = () => {
      setPlan({level: planLevel, frequency: planFrequency})
      navigate('/step3')
   }

   return (
      <div className={'page'} style={{marginRight: '70px'}}>
         <h1>Select your plan</h1>
         <p>You have the option of monthly or yearly billing.</p>

         <div className="plans">
            <div className={`plan ${planLevel === 'Arcade' ? 'active' : ''}`} onClick={() => setPlanLevel('Arcade')}>
               <img src={ArcadeImg} alt="a" />
               <h1>Arcade<span>$9/mo</span></h1>
            </div>

            <div className={`plan ${planLevel === 'Advanced' ? 'active' : ''}`} onClick={() => setPlanLevel('Advanced')}>
               <img src={AdvancedImg} alt="a" />
               <h1>Advanced<span>$12/mo</span></h1>
            </div>

            <div className={`plan ${planLevel === 'Pro' ? 'active' : ''}`} onClick={() => setPlanLevel('Pro')} style={{marginRight: 0}}>
               <img src={ProImg} alt="a" />
               <h1>Pro<span>$15/mo</span></h1>
            </div>
         </div>

         <div className="payment-frequency">
            <p style={{color: planFrequency === "Monthly" ? 'hsl(213, 96%, 18%)' : 'gray', fontWeight: planFrequency === "Monthly" ? '700' : '400'}}>Monthly</p>
            <div className="button" onClick={() => setPlanFrequency(v => v === 'Yearly' ? 'Monthly' : 'Yearly')}>
               <div className={`slider ${planFrequency === 'Yearly' ? 'Yearly' : ''}`}></div>
            </div>
            <p style={{color: planFrequency === "Yearly" ? 'hsl(213, 96%, 18%)' : 'gray', fontWeight: planFrequency === "Yearly" ? '700' : '400'}}>Yearly</p>
         </div>

         <div className="navigation">
            <p className="back" onClick={() => navigate('/')}>Go Back</p>
            <button className={'next-step'} onClick={handleSubmit}>Next Step</button>
         </div>
      </div>
   )
}

export default Step2;