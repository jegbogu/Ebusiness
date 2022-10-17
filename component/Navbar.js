import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import Image  from 'next/image';

// import your icons
 
import { faUser, faPen } from '@fortawesome/free-solid-svg-icons';
 
 
const Navbar = () => {
    return ( 
<nav>
    <div className='nav-section-one' style={{display:'flex'}}>
        <div className="hamburger__menu">
             <div></div>
             <div></div>
             <div></div>
         </div>
    <div className='firstLinks' style={{marginTop:'20px',marginLeft:'10px'}} >
        <Link href='/dashboard'><a>DASHBOARD</a></Link>
        <Link href='/contact'><a>CONTACT</a></Link>
    </div>
    </div>
    <div className='nav-secion-two'>
        <Link href='/'><a><Image src="/logo-expanzo.svg"width={77} height={77}/></a></Link>
    </div>
    <div className='nav-secion-three'style={{display:'flex'}}>
        <div style={{marginTop:'10px',marginLeft:'10px'}}>
        <FontAwesomeIcon icon={faUser}   style={{width:'20px',backgroundColor:'#addfad',padding:'10px',borderRadius:'50px',color:'white'}}/>
        </div>

        <div style={{marginTop:'20px',marginLeft:'1px'}}>
        <Link href='/login' ><a>LOGIN</a></Link>
        </div>

        <div style={{marginTop:'10px',marginLeft:'20px'}}>
        <FontAwesomeIcon icon={faPen}   style={{width:'20px',backgroundColor:'#addfad',padding:'10px',borderRadius:'50px', color:'white'}}/>
        </div>

        <div style={{marginTop:'20px',marginLeft:'1px'}}>
        <Link href='/registration'><a>REGISTRATION</a></Link>
        </div>
     </div>   
</nav>
     );
}
 
export default Navbar;