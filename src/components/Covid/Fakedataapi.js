import React, { useEffect, useState } from 'react'


const Fakedataapi = () => {
    const [data, setData] = useState([]);


    const getCovidData = async () => {
        try {
            const res = await fetch("https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true");
            const actualData = await res.json();
            console.log(actualData);
            setData(actualData);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getCovidData();
    }, []);
    return (
        <div>

        </div>
    )
}

export default Fakedataapi