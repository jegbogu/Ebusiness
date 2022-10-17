 import Link from 'next/link'
 const Login = () => {
    return ( 
             <div className="login-page">
                 <div className="first_page02">
                     <div className="login_create-account_messages_inputs">
     
                         <div className="messages">
                             <h1> Registration </h1>  
                              
                         </div>
     
                         <div className="inputs">    
                             <div className="login_create-account_div"> 
                                 <form>
                                    <div>
                                    <input type="email" name="email" placeholder="email" id="email" required/>
                                    </div>
     
                                    <div>
                                    <input type="password" name="password" placeholder="password"  id="password" required/>
                                     
                                     <div>
                                      <button id="login">Sing Up</button>
     
                                     </div>
                                    
     
                                    </div>
                                    
     
                                 </form>     
                             </div>
                         </div>
                     </div>
                     
                     <div className="not_a_member">
                             <p> Already Signed Up?  &nbsp;</p> 
                             <Link href={'/login'}><a>Login</a></Link> 
                     </div>
     
                 </div>
             </div>
          );
     }
     
     export default Login;
     