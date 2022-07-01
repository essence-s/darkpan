import React from 'react';
import './us.css';
// import svgWinners from 'assets/soporte.svg'
import { ContainerMaxWidth } from 'components/common';
// import usSvg from './files/us.svg'
import rowLeft from './files/archive.svg'

const Us =()=>{
    return(
        <>
            <div id="us" className="us">

                {/* <div className="us-shape"></div> */}
                {/* <img className="us-shape" src={usSvg} alt="" /> */}
        
                <ContainerMaxWidth className="us-container">

                    <div className="us-titulo">ABOUT <span>US</span></div>
                
                    <div className="us-content">

                        <div className="us-content-fragments">

                            <div className="us-content-fragments_data">
                                <span><img src={rowLeft} alt=""/></span>
                                <div className="us-fragmentsInfo">
                                  <p>Perfil de la empresa</p>
                                  <p>He aquí una mirada más cercana a nuestra empresa.</p>
                                </div>
                            </div>
                            <div className="us-content-fragments_data">
                                <span><img src={rowLeft} alt=""/></span>
                                <div className="us-fragmentsInfo">
                                  <p>Cronología de la empresa</p>
                                  <p>Lea una breve historia , 
                                  desde 2003 hasta la actualidad.</p>
                                </div>
                            </div>
                            <div className="us-content-fragments_data">
                                <span><img src={rowLeft} alt=""/></span>
                                <div className="us-fragmentsInfo">
                                  <p>Ética y Cumplimiento</p>
                                  <p>Hacer lo correcto es
                                  vital para el éxito de la empresa.</p>
                                </div>
                            </div>
                            
                        </div>

                        {/* <div className='us-content-square'> */}
                        
                        {/*   <div className="us-square-img"> */}
                        {/*       <img src={svgWinners} alt="" /> */}
                        {/*   </div> */}
                        {/*   <div className="us-square-img"> */}
                        {/*       <img src={svgWinners} alt="" /> */}
                        {/*   </div> */}
                        {/*   <div className="us-square-img"> */}
                        {/*       <img src={svgWinners} alt="" /> */}
                        {/*   </div> */}
                        {/*   <div className="us-square-img"> */}
                        {/*       <img src={svgWinners} alt="" /> */}
                        {/*   </div> */}

                        {/* </div> */}

                    </div> 
                        
                

                    
                    
                </ContainerMaxWidth>
            </div>
        </>
    )
}

export default Us;
