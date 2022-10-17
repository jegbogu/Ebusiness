import Link from 'next/link'
const Login = () => {
    return ( 
        <div className="login-page">
            <div className="first_page02">
                <div className="login_create-account_messages_inputs">

                    <div className="messages">
                        <h1> Hello </h1>  
                        <h3>Welcome back </h3>
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
                                 <button id="login">Login</button>

                                </div>
                               

                               </div>
                               

                            </form>     
                        </div>
                    </div>
                </div>
                
                <div className="not_a_member">
                        <p> Not a member?  &nbsp;</p> 
                        <Link href={'/registration'}><a>Register now!</a></Link>  
                </div>

            </div>
        </div>
     );
}

export default Login;
