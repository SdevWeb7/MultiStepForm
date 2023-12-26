import { useContext } from "react";
import InfosFormContext from "../components/InfosFormContext.jsx";
import { Link, useNavigate } from "react-router-dom";

function Step4 () {

   const { user, plan, addons } = useContext(InfosFormContext)
   const navigate = useNavigate()
   let planPrice;
   let addonsPrice = 0;

   for (let addon of addons) {
      if (addon === 'Online service') {
         if (plan.frequency === 'Monthly') {
            addonsPrice += 1
         } else {
            addonsPrice += 10
         }
      } else {
         if (plan.frequency === 'Monthly') {
            addonsPrice += 2
         } else {
            addonsPrice += 20
         }
      }
   }

   switch (plan.level) {
      case 'Arcade':
         planPrice = 9
         break
      case 'Advanced':
         planPrice = 12
         break
      case 'Pro':
         planPrice = 15
         break
      default:
         planPrice = 0
         break
   }
   const handleSubmit = () => {
      navigate('/step5')
   }
   console.log(addonsPrice)

   return (
      <div className={'page'} style={{marginRight: '70px'}}>
         <h1>Finishing up</h1>
         <p>Double-check everything looks OK before confirming.</p>


         <div className="recap">
            <div className="plans-recap">
               <h1>{plan.level} ({plan.frequency}) <span><Link to={'/step2'}>Change</Link></span></h1>
               <p>${plan.frequency === 'Monthly' ? planPrice : planPrice * 10}/{plan.frequency === 'Monthly' ? 'mo' : 'yr'}</p>
            </div>

            <div className="addons-recap">
               {addons.map(a => <div className={'addon-recap'} key={a}><p>{a}</p><p style={{color: 'hsl(213, 96%, 18%)', fontFamily: 'UbuntuMedium'}}>+${a === 'Online service' ? '1' : '2'}{plan.frequency === 'Monthly' ? '' : '0'}/{plan.frequency === 'Monthly' ? 'mo' : 'yr'}</p></div>)}
            </div>
         </div>

         <div className="total-recap">
            <p>Total (per {plan.frequency === 'Monthly' ? 'month' : 'year'})</p>
            <p className="total-blue">${addonsPrice + (plan.frequency === 'Monthly' ? planPrice : planPrice * 10)}/{plan.frequency === 'Monthly' ? 'mo' : 'yr'}</p>
         </div>

         <div className="navigation">
            <p className="back" onClick={() => navigate('/step3')}>Go Back</p>
            <button className={'next-step'} onClick={handleSubmit}>Confirm</button>
         </div>
      </div>
   )
}

export default Step4;