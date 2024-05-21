import './Employers.css'

const Employers = ({ employer, hanldeAddNow, handleEmployerImage }) => { 
    const { name, age, image, more_information } = employer;
    return (
        <div className="image">
            <img src={image} alt="" />
            <h3>Employers Name: {name}</h3>
            <p><b>Age: {age}</b></p>
            <p><small><b>More-Information:  {more_information}</b></small></p>
            <button onClick={() => hanldeAddNow(employer)}>Add Now</button>
            <button onClick={()=> handleEmployerImage(employer)}>Employer-Image</button>
        </div>
    );
};

export default Employers;