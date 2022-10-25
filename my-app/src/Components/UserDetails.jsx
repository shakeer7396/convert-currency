import React from 'react'
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css"; 
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const UserDetails = () => {
  return (
    <div>
        
<div className="surface-card p-4 shadow-2 border-round w-full lg:w-6" style={{}}>
    

    <div style={{marginTop:"20px"}}>
        <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
        <InputText type="text" className="w-full mb-3" />
    </div>
        <div style={{marginTop:"20px"}}>
        <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
        <InputText type="password" className="w-full mb-3" />
        </div>

        <div  style={{marginTop:"20px"}}>
        <Button label="Sign In" icon="pi pi-user" className="w-full" />

        </div>
    
</div>
    
    </div>
  )
}

export default UserDetails