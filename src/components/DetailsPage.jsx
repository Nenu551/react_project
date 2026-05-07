import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DetailsPage.css";

export default function DetailsPage() {
    const [singleData, setSingleData]= useState(null);
    const { id } = useParams();

    useEffect(() => {
        
        async function fetchData() {
            console.log("id is:-", id);
            const response = await axios.get(`https://69f9ba30c509a40d3aa32d0f.mockapi.io/jobsData/${id}`);
            setSingleData(response.data);
            console.log(response.data, 'response')
        };
        fetchData();
    }, [])

    if (!singleData) {
        return (
            <div className="details-page">
                <h2>Loading....</h2>
            </div>
        );
    }

    return (
        <div className="details-page">
            <div className="details-card">
                <div className="top">
                <img src={singleData.logo} alt="" />
                <button>Save</button>
            </div>
            <div className="center">
                <h2><span className="company-name">{singleData.companyName}</span> <span>{singleData.postedDays}</span></h2>
                <h1>{singleData.jobRole}</h1>
                <div className="button">
                    <button>{singleData.roleType}</button>
                    <button>{singleData.level}</button>
                </div>
            </div>
            <div className="bottom">
                <div className='location'>
                    <h3>{singleData.payPerHour}</h3>
                    <h4>{singleData.location}</h4>
                </div>
                <button>Apply now</button>
            </div>
            </div>
        </div>
    );
}
