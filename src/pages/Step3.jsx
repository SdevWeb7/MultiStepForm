import { useContext } from "react";
import InfosFormContext from "../components/InfosFormContext.jsx";
import { useNavigate } from "react-router-dom";
import CheckIcon from '../../public/images/icon-checkmark.svg'

function Step3 () {

   const { plan, addons, setAddons } = useContext(InfosFormContext)
   const navigate = useNavigate()


   const addAddon = (e) => {
      let tempAddon = e.currentTarget.querySelector('h1').innerHTML

      setAddons(prevAddons => {
         if (prevAddons.includes(tempAddon)) {
            return prevAddons.filter(a => a !== tempAddon)
         } else {
            return [...prevAddons, tempAddon]
         }
      })
   }

   const handleSubmit = () => {
      navigate('/step4')
   }

   return (
      <div className={'page'} style={{marginRight: '70px'}}>
         <h1>Pick add-ons</h1>
         <p>Add-ons help enhance your gaming experience.</p>

         <div className="addons">
            <div className={`addon ${addons.includes('Online service') ? 'selected' : ''}`} onClick={addAddon}>
               <div className="checkbox">
                  {addons.includes('Online service') && <img src={CheckIcon} alt="a" />}
               </div>
               <div className="content">
                  <h1>Online service</h1>
                  <p>Access to multiplayer games</p>
               </div>
               <div className="price">+${plan.frequency === 'Monthly' ? 1 : 10}/{plan.frequency === 'Monthly' ? 'mo' : 'yr'}</div>
            </div>


            <div className={`addon ${addons.includes('Local storage') ? 'selected' : ''}`} onClick={addAddon}>
               <div className="checkbox">
                  {addons.includes('Local storage') && <img src={CheckIcon} alt="a" />}
               </div>
               <div className="content">
                  <h1>Local storage</h1>
                  <p>Extra 1TB of cloud save</p>
               </div>
               <div className="price">+${plan.frequency === 'Monthly' ? 2 : 20}/{plan.frequency === 'Monthly' ? 'mo' : 'yr'}</div>
            </div>


            <div className={`addon ${addons.includes('Customizable profile') ? 'selected' : ''}`} onClick={addAddon}>
               <div className="checkbox">
                  {addons.includes('Customizable profile') && <img src={CheckIcon} alt="a" />}
               </div>
               <div className="content">
                  <h1>Customizable profile</h1>
                  <p>Custom theme on your profiles</p>
               </div>
               <div className="price">+${plan.frequency === 'Monthly' ? '2' : 20}/{plan.frequency === 'Monthly' ? 'mo' : 'yr'}</div>
            </div>
         </div>


         <div className="navigation">
            <p className="back" onClick={() => navigate('/step2')}>Go Back</p>
            <button className={'next-step'} onClick={handleSubmit}>Next Step</button>
         </div>
      </div>
   )
}

export default Step3;