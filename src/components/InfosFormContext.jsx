import React from "react";

export default React.createContext({
   user: {
      name: '',
      email: '',
      phone: 0
   },
   plan: {
      level: '',
      frequency: ''
   },
   addons: [],
   setUser: () => null,
   setPlan: () => null,
   setAddons: () => null
})