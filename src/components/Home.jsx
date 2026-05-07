import axios from "axios";
import { useEffect, useState } from "react";
import Cards from './Cards.jsx';

export default function Home() {
    const [jobsData, setJobsData] = useState([]);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://69f9ba30c509a40d3aa32d0f.mockapi.io/jobsData");
      setJobsData(response.data);
      setLoading(false)
    };
    fetchData();
    }, [])
    
  return (
    <div className="cards-row">
      {
        jobsData.map((elem) => {
          return <div key={elem.id}>
            <Cards
              idx={elem.id}
              company={elem.companyName}
              logo={elem.logo}
              postedDays={elem.postedDays}
              jobRole={elem.jobRole}
              level={elem.level}
              roleType={elem.roleType}
              payPerHour={elem.payPerHour}
              location={elem.location}
            />
          </div>
        })
      }

    </div>
  )
}
