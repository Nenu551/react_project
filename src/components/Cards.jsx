import { useNavigate } from "react-router";

const Cards = (props) => {
    const navigate = useNavigate();
    return (
        <div className="parent" onClick={() => {
            navigate(`/home/${props.idx}`)
        }}>
            <div className="top">
                <img src={props.logo} alt="" />
                <button>Save</button>
            </div>
            <div className="center">
                <h2>{props.company} <span>{props.postedDays}</span> </h2>
                <h1>{props.jobRole}</h1>
                <div className="button">
                    <button>{props.roleType}</button>
                    <button>{props.level}</button>
                </div>
            </div>
            <div className="bottom">
                <div className='location'>
                    <h3>{props.payPerHour}</h3>
                    <h4>{props.location}</h4>
                </div>
                <button>Apply now</button>
            </div>
        </div>
    )
}

export default Cards;