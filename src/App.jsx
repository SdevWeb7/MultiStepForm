import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Step1 from "./pages/Step1.jsx";
import Layout from "./components/Layout.jsx";
import Step2 from "./pages/Step2.jsx";
import Step4 from "./pages/Step4.jsx";
import Step3 from "./pages/Step3.jsx";
import InfosFormContext from "./components/InfosFormContext.jsx";
import { useState } from "react";
import Step5 from "./pages/Step5.jsx";

function App() {

   const [user, setUser] = useState({name: '', email: '', phone: ''})
   const [plan, setPlan] = useState({level: 'Arcade', frequency: 'Monthly'})
   const [addons, setAddons] = useState([])

   let contextValue = {
      user: user,
      plan: plan,
      addons: addons,
      setUser,
      setPlan,
      setAddons
   }

  return (
     <InfosFormContext.Provider value={contextValue}>
    <BrowserRouter>
       <Routes>
          <Route path={'/'} element={<Layout />}>
             <Route path={'/'} element={<Step1 />} />
             <Route path={'/step2'} element={<Step2 />} />
             <Route path={'/step3'} element={<Step3 />} />
             <Route path={'/step4'} element={<Step4 />} />
             <Route path={'/step5'} element={<Step5 />} />
          </Route>
       </Routes>
    </BrowserRouter>
     </InfosFormContext.Provider>
  )
}

export default App
