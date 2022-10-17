import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
 
const Contact = () => {
    return ( 
         <div className="contact">
            <h3>Contact</h3>
            <div className='contact-section-one'style={{display:'flex'}}>
        <div style={{marginTop:'10px',marginLeft:'120px'}}>
        <FontAwesomeIcon icon={faLocationDot}   style={{width:'100px',color:'green'}}/>
        </div>

        <div style={{marginTop:'10px',marginLeft:'-30px'}}>
        <Link href='/login' ><a>Headquaters</a></Link>
        </div>

        <div style={{marginTop:'10px',marginLeft:'50px'}}>
        <FontAwesomeIcon icon={faEnvelope}   style={{width:'40px',color:'green'}}/>
        </div>

        <div style={{marginTop:'10px',marginLeft:'5px'}}>
        <Link href='/registration'><a>Email</a></Link>
        </div>
         </div>
         <div className='contact-section-two'>
            <div>
                <p>DHO s.r.o<br/>
                Borijova 878735<br/>
                130 00 Praha 3<br/>
                </p>
            </div>
            <div>
                <p>info@expanzo.com</p>
            </div>
            
         </div>

        </div>
     );
}
 
export default Contact;