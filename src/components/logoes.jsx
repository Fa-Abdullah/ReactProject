import React from 'react';
import logo1 from '../logoes/logo1.png';
import logo2 from '../logoes/logo2.png';
import logo3 from '../logoes/logo3.png';
import logo4 from '../logoes/logo4.png';
import logo5 from '../logoes/logo5.png';
import logo6 from '../logoes/logo6.png';
import logo7 from '../logoes/logo7.png';
import logo8 from '../logoes/logo8.png';
import './logoes.css'

const Logoes = () => {
  return (
    <React.Fragment>
      <div className='logoesCon' style={{}}>
        <img className='imgLogo' src={logo1} alt='' style={{}}/>
        <img className='imgLogo' src={logo2} alt='' style={{}}/>
        <img className='imgLogo' src={logo3} alt='' style={{}}/>
        <img className='imgLogo' src={logo4} alt='' style={{}}/>
        <img className='imgLogo' src={logo5} alt='' style={{}}/>
        <img className='imgLogo' src={logo6} alt='' style={{}}/>
        <img className='imgLogo l7' src={logo7} alt='' style={{}}/>
        <img className='imgLogo l8' src={logo8} alt='' style={{}}/>
      </div>
    </React.Fragment> 
  )
}

export default Logoes