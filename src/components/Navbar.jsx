import { NavLink } from "react-router-dom";

function Navbar () {

   return (
      <header className={'header'}>
         <nav className={'navbar'}>
            <div className="step-container">
               <NavLink className={'step-link'} to={'/'}>1</NavLink>
               <div className="step-infos">
                  <p>STEP 1</p>
                  <h1>YOUR INFO</h1>
               </div>
            </div>

            <div className="step-container">
               <NavLink className={'step-link'} to={'/step2'}>2</NavLink>
               <div className="step-infos">
                  <p>STEP 2</p>
                  <h1>SELECT PLAN</h1>
               </div>
            </div>

            <div className="step-container">
               <NavLink className={'step-link'} to={'/step3'}>3</NavLink>
               <div className="step-infos">
                  <p>STEP 3</p>
                  <h1>ADD-ONS</h1>
               </div>
            </div>

            <div className="step-container">
               <NavLink className={'step-link'} to={'/step4'}>4</NavLink>
               <div className="step-infos">
                  <p>STEP 4</p>
                  <h1>SUMMARY</h1>
               </div>
            </div>

         </nav>
      </header>
   )
}

export default Navbar;