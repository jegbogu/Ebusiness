import Link from 'next/link';
import Image from 'next/image';
const Footer = () => {
    return ( 
        
        <footer>
            <div className="footer-figure">
            <Image src='/logo-expanzo-black.svg' width={150} height={150}/>
            </div>
            <div className="footer-links">
                <Link href='/contact'><a>CONTACT</a></Link>
                <a>PHONES</a>
                <a>TOP SEARCH</a>
            </div>
            

        </footer>
     );
}
 
export default Footer;