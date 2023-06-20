import { useState, useEffect, ChangeEvent } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import './data.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faSearch } from "@fortawesome/free-solid-svg-icons";
import img from './men.jpg';

interface Item {
    fullname: string;
    email: string;
    password: string;
}

const Tableshows = () => {

    const [input, setInput] = useState<Item[]>([]);
    const [filterData, setFilterData] = useState<Item[]>([]);
    const [searchData, setSearchData] = useState<string>('');

    const location = useLocation();
    const loggedInUser = location.state?.loggedInUser;

    useEffect(() => {
        const storedData = localStorage.getItem('userData');
        const parsedData = storedData ? JSON.parse(storedData) : [];
        setInput(parsedData);
        setFilterData(parsedData);

    }, []);

    const handlesearch = (event: ChangeEvent<HTMLInputElement>) => {
        const getsearch = event.target.value;
        setSearchData(getsearch);
        console.log(getsearch);

        if (getsearch.length > 0) {
            const defaultdata = input.filter((value) => value.fullname.toLowerCase().includes(getsearch));
            setInput(defaultdata);
        }
        else {
            setInput(filterData);
        }
    }


    const navigate = useNavigate();
    const handlelogout = () => {
        navigate('/');
    }
    return (
        <>
            <div className="container">
                <div className="container-box">
                    {/* first header ............................. start */}
                    <div className="header-icons">
                        <div className="icon-left">
                            <FontAwesomeIcon icon={faLocationDot} className="icon-map" />
                            <h4>Findmycustomer</h4>
                        </div>
                        <div className="icon-right">
                            <div className="icon-img">
                                <img onClick={handlelogout} src={img} alt="" />
                            </div>
                        </div>

                    </div>
                    {/* first header ............................. end */}


                    {/* center header start .............................  */}
                    <div className="search-box">

                        <input type="text" value={searchData} onChange={(e) => handlesearch(e)} />
                        <FontAwesomeIcon icon={faSearch} className="icon-search" />
                    </div>
                    {/* center header end .............................  */}

                    {/* INPUT BOX START .............................  */}
                    <table >
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email ID </th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                input.map((value, index) => (
                                    <tr key={index} className={value.email == loggedInUser ? "highlighted" : ""}>
                                        <td> {value.fullname}</td>
                                        <td>{value.email}</td>
                                        <td> {value.password}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    {/* INPUT BOX END .............................  */}
                </div>
            </div>

        </>
    )
}
export default Tableshows;