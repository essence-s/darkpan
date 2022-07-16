import React, { useEffect, useRef } from 'react';
import './header.css';
import headersvg from './files/bh.svg'
import headersvg2 from './files/bh2.svg'
import happy from './files/sh.svg'
import {telegram,github,twitter,facebook} from 'assets/iconSR'
import { ContainerMaxWidth } from 'components/common';
import { useSwitchTheme } from 'components/common/switchTheme/SwitchTheme';

import {motion} from 'framer-motion'


const container = {
    hidden:{ opacity: 0 },
    show:{
          opacity: 1,
          transition:{
            delayChildren:0.7,
            staggerChildren: 0.1
          }
    }
}

const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
}

const Header = () => {

    let {stateSwitchTheme}=useSwitchTheme()
    let refSlashButtonH = useRef()
    useEffect(()=>{
      setTimeout(()=>{
        refSlashButtonH.current.style.animation="buttonL 0.5s ease-out" 
      },1700)
    },[])

    return(
            <motion.div className="header" id='home' 
              variants={container}
              initial="hidden"
              animate="show">
              
                {/* <img className="fondosvg" src={headersvg} alt=""/> */}              
              <img className="fondosvg" 
              src={`${stateSwitchTheme?headersvg2:headersvg}`} alt=""/>
              {/* <object type='image/svg+xml' role='img' aria-disabled='true' tabindex='-1' className='fondosvg' data={`${stateSwitchTheme?headersvg2:headersvg}`}></object> */}

                <ContainerMaxWidth className="header-container">


                    <div className="header-content">

                        <motion.div className="header-title" variants={item}>
                          Este es su Momento
                        </motion.div>
                        {/* <div className="header-title2"></div> */}
                        <motion.div className="" variants={item}>
                          <p>Si lo nesesitas lo tenemos solo aqui!</p>
                          <p>asi que esperas Consulte no pierdas pierdas tiempo</p>
                        </motion.div>

                        <motion.div className="header-content_input" variants={item}>
                          <button>
                            Pedir Consulta <span>:)</span>
                            <span ref={refSlashButtonH} className="header-slashButton">
                            </span>
                          </button>
                        </motion.div>

                        <div className="header-redes">

                            <motion.div className="header-redesContent" variants={item}>
                              <img src={telegram} alt=""/>
                            </motion.div>

                            <motion.div className="header-redesContent" variants={item}>
                              <img src={github} alt=""/>
                            </motion.div>

                            <motion.div className="header-redesContent" variants={item}>
                              <img src={twitter} alt=""/>
                            </motion.div>

                            <motion.div className="header-redesContent" variants={item}>
                              <img src={facebook} alt=""/>
                            </motion.div>

                        </div>
                    </div>

                    <div className="header-img" >

                        <motion.img src={happy} alt="" variants={item}/>

                    </div>


                </ContainerMaxWidth>

            </motion.div>
    )
}

export default Header;
