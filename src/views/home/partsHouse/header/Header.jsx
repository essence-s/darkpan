import React, { useContext } from 'react';
import './header.css';
import headersvg from './files/bh.svg'
import headersvg2 from './files/bh2.svg'
import happy from './files/sh.svg'


// import svgTarget from 'assets/target.svg'
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

    return(
            <motion.div className="header" id='home' 
              variants={container}
              initial="hidden"
              animate="show">

              <img className="fondosvg" src={`${stateSwitchTheme?headersvg2:headersvg}`} alt=""/>

                <ContainerMaxWidth className="header-container">


                    <div className="header-content">

                        <motion.div className="titulo" variants={item}>Este es su Momento</motion.div>
                        <div className="titulo2"></div>
                        <motion.div className="" variants={item}>
                          <p>Si lo nesesitas lo tenemos solo aqui!</p>
                          <p>asi que esperas Consulte no pierdas pierdas tiempo</p>
                        </motion.div>
                        <motion.div className="header-content_input" variants={item}>
                            <button>Pedir Consulta <span>:)</span></button>
                        </motion.div>

                        <div className="header-redes">
                            <motion.div className="header-redes-content" variants={item}>
                                <i className="fa fa-telegram" aria-hidden="true"></i>
                            </motion.div>

                            <motion.div className="header-redes-content" variants={item}>
                                <i className="fa fa-github" aria-hidden="true"></i>
                            </motion.div>
                            <motion.div className="header-redes-content" variants={item}>
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                            </motion.div>
                            <motion.div className="header-redes-content" variants={item}>
                                <i className="fa fa-facebook" aria-hidden="true"></i>
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
