import { useContext } from "react";
import InfosFormContext from "../components/InfosFormContext.jsx";
import { useNavigate } from "react-router-dom";
import ThankIcon from '../../public/images/icon-thank-you.svg'

function Step5 () {

   const { user, plan, addons } = useContext(InfosFormContext)
   const navigate = useNavigate()


   const handleSubmit = () => {
      navigate('/')
   }

   return (
      <div className={'page'} style={{marginRight: '70px', justifyContent: 'center', alignItems: 'center'}}>
         <img src={ThankIcon} alt="a" width={100} height={100}/>
         <h1>Thank you!</h1>
         <p style={{maxWidth: '350px', textAlign: 'center'}}>Thanks <span style={{fontFamily: 'UbuntuBold', color: 'hsl(213, 96%, 18%)'}}>{user.name}</span> for confirming your subscription! We will send to you a confirmation email to <span style={{fontFamily: 'UbuntuBold', color: 'hsl(213, 96%, 18%)'}}>{user.email}</span> and we will phone on the <span style={{fontFamily: 'UbuntuBold', color: 'hsl(213, 96%, 18%)'}}>{user.phone}</span>. We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>


         <div className="navigation">
            <button className={'next-step'} onClick={handleSubmit}>Retry</button>
         </div>
      </div>
   )
}

export default Step5;