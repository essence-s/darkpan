import React, { createContext, useContext, useState } from 'react';
import './switchTheme.css';

// let [prue,setprue]=useState()
//
const switchThemeContext=createContext("dino")

const useSwitchTheme=()=>{
  let {stateSwitchTheme,setStateSwitchTheme} = useContext(switchThemeContext)
  return {stateSwitchTheme,setStateSwitchTheme}
}

const ProviderSwitchTheme=({children,data})=>{
  
  
  return(
    <switchThemeContext.Provider value={
      data
      }>
      {children}
    </switchThemeContext.Provider>
  )
}

const DivSwitchTheme=({children,className,data})=>{
  
  let c1=data?.c1?data.c1:''
  let c2=data?.c2?data.c2:''
  let [stateSwitchTheme,setStateSwitchTheme]=useState(false)
  // console.log(stateSwitchTheme)

  return(
    <ProviderSwitchTheme data={{stateSwitchTheme,setStateSwitchTheme}}>
      <div className={`${className?className:''} ${stateSwitchTheme?c2:c1}`}>{children}</div>
    </ProviderSwitchTheme>
  )
}
const SwitchTheme=()=>{
    
    let {setStateSwitchTheme,stateSwitchTheme}=useSwitchTheme()  

    function cambio(){
        setStateSwitchTheme(!stateSwitchTheme)
        // console.log(stateSwitchTheme)
    }
    return(
        
        <>
          <div className="switchTheme" onClick={()=>cambio()}>
               
            <span style={{transform:`${stateSwitchTheme?'translate(16px, 0px)':''}`}} ></span>
                
            </div>
        </>
    )
}

export {SwitchTheme,DivSwitchTheme,useSwitchTheme};
