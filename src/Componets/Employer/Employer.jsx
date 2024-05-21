import { useEffect } from "react";
import { useState } from "react";
import Employers from "./Employers";
import './Employers.css'


const Employer = () => {
    const [employers, setEmployers] = useState([]);
    const [employersInformation , setEmployersInformation]= useState([]);
    const [employerImage , setEmployerImage] = useState([])

    const hanldeAddNow = (information) =>{
        const newEmployersInformation = [...employersInformation , information];
        setEmployersInformation(newEmployersInformation)
    }

    const handleEmployerImage = (images) =>{
        const newEmployersImage = [...employerImage , images];
        setEmployerImage(newEmployersImage)
    }


    useEffect(() => {
        fetch('Data.json')
        .then(res => res.json())
        .then(data => setEmployers(data))
    }, [])
    return (
        <div>
            <h3>Employer: {employers.length} </h3>
            <h5>Daily Employers Information: {employersInformation.length}</h5>
            {
                employersInformation.map(information=> <li key={information.id}>{ information.name}</li>)
            }
            <div>
                {
                   employerImage.map(image=> <img src={image.image}></img>)  
                }
            </div>
            <div className="employers-container">
            {
                employers.map(employer =>
                     <Employers key={employer.id} 
                     handleEmployerImage={handleEmployerImage}
                     hanldeAddNow={hanldeAddNow}
                     employer={employer}></Employers>)
            }
            </div>
        </div>
    );
};

export default Employer;