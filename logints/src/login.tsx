import { ChangeEvent, useState } from 'react';
import './login.css';
import { namevalid, emailvalid, passwordvalid } from './regexvalid';
import { Link, useNavigate } from 'react-router-dom';


export function Login() {

    const [input, setInput] = useState({ fullname: "", email: "", password: "" })
    const [errormsg, setErrormsg] = useState("")
    const [errormsg1, setErrormsg1] = useState("")
    const [errormsg2, setErrormsg2] = useState("")

    const navigate = useNavigate();

    const handlechange = (event: ChangeEvent<HTMLInputElement>) => {
        setInput({ ...input, [event.target.name]: event.target.value })

    }
    const formsubmit = (event: React.FormEvent) => {
        event.preventDefault();
        //  console.log(input)
        if (input.fullname === "") {
            return setErrormsg("Required")
        }
        else if (!namevalid(input.fullname)) {
            return setErrormsg("Enter character")
        }
        else {
            setErrormsg("")
        }

        if (input.email === "") {
            return setErrormsg1("Required")
        }
        else if (!emailvalid(input.email)) {
            return setErrormsg1("Enter format")
        }
        else {
            setErrormsg1("")
        }

        if (input.password === "") {
            return setErrormsg2("Required")
        }
        else if (!passwordvalid(input.password)) {
            return setErrormsg2("Invalid")
        }
        else {
            alert("Successfully Created")
            setErrormsg2("")
            const storedData = localStorage.getItem('userData');
            let parsedData = storedData ? JSON.parse(storedData) : []
            parsedData.push(input);
            localStorage.setItem('userData', JSON.stringify(parsedData));
            navigate('/')
        }
    }


    return (
        <>
            <div className='body'>
                <div className="first">
                    <div className="second">
                        <div className="smallbox">
                            <div className="dot"></div>
                        </div>
                        <h2 className="line1">Let us help you run your freelance business.</h2>
                        <h4 className="line2">Our registration process is quick and easy,no more than 10 minutes to complete.</h4>

                        <div className="box">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quas.</p>
                        </div>
                    </div>


                    {/* <!-- right div box  --> */}

                    <div className="third">
                        <h2 className="third-h">Get started</h2>
                        <h4>Create your account now</h4>

                        <form action="" className="form-group">


                            <div className="input-box">
                                <label>Name</label>
                                {errormsg.length > 0 && (
                                    <span>{errormsg}</span>)}
                                <input type="text" placeholder="" name="fullname" onChange={handlechange} />
                            </div>

                            <div className="input-box">
                                <label> Email</label>
                                {errormsg1.length > 0 && (
                                    <span>{errormsg1}</span>)}
                                <input type="text" placeholder="" name="email" onChange={handlechange} />
                            </div>

                            <div className="input-box">
                                <label>Password</label>
                                {errormsg2.length > 0 && (
                                    <span>{errormsg2}</span>)}
                                <input type="password" placeholder="" name="password" onChange={handlechange} />
                            </div>

                            <button className='button108' onClick={formsubmit}> Sign Up</button>
                        </form>

                        <h5 className="last">Already you have an account? <Link to="/">Login</Link></h5>

                    </div>
                </div>
            </div>
        </>
    )
}
