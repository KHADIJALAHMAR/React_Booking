
import React from 'react';
  
const authContext = React.createContext({authenticated:null,role: null,setRole: () => {},setAuthenticated:()=>{}});
  
export default authContext;