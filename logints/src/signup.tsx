import  { useState ,useEffect} from 'react';
import './login.css';
import { useNavigate} from "react-router-dom";

interface Userinput{
    email:string;
    password:any;
}


export function Signup() {
    const [input, setInput] = useState([]);


    const [Checkemail, setCheckemail] = useState("");
    const [Checkpassword, setCheckpassword] = useState("");

    useEffect(() => {
        const storedData = localStorage.getItem('userData');
    
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          setInput(parsedData);
        }
      }, []);

      const navigate = useNavigate();
      
      const formsubmit = (e:React.FormEvent) => {
        e.preventDefault();

        const matchedUser = input.find((user : Userinput) => user.email === Checkemail && user.password === Checkpassword);
    
        if (matchedUser) {
            alert('Login successful');
          navigate('/data',{state:{loggedInUser:Checkemail}})
        } else {
          alert('Invalid email or password');
        }
      };
    

      return (
        <>
            <div className='body'>
                <div className="back">
                    <div className="third">
                        <h2 className="third-h">Login</h2>

                        <form action="" className="form-group">

                            <div className="input-box">
                                <label>Email</label>&nbsp;
                                
                                <input type="email" value={Checkemail} placeholder="abc@gmail.com" name="email" onChange={(e) => setCheckemail (e.target.value)} />
                            </div>

                            <div className="input-box">
                                <label>Password</label>
                                
                                <input type="text" value={Checkpassword} placeholder="" name="password" onChange={(e) => setCheckpassword (e.target.value)} />
                            </div>

                            <button className='button108' onClick={formsubmit} ><b>Sign Up</b> </button>
                        </form>
                        <h5 className="last">Create an Account? &nbsp;<a href="/login">Signup</a></h5>
                    </div>





                    <div className="second">
                        <div className="smallbox">
                            <div className="dot"></div>
                        </div>
                        <h2 className="line1">Let us help you run your<br /> freelance business.</h2>
                        <h4 className="line2">Our registration process is quick and easy,no more than 10 minutes to complete.</h4>

                        <div className="box">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quas.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

