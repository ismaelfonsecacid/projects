import { useEffect, useState } from "react"

export default function Profile() {
    const [profile, setProfile] = useState([])
    const [qData, setQData] = useState(3)
    const [checkQ, setCheckQ] = useState(false)


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://randomuser.me/api/?results=10');
            const data = await response.json();
            setProfile(data.results)
        };
        fetchData();
    }, [])

    function handleClick() {
        setCheckQ(!checkQ)
        if (checkQ == true) {
            setQData(10)
        } else {
            setQData(3)
        }
    }


    return (
        <div>

            <div>
                {profile.slice(0, qData).map((prof, index) => (
                    <div
                        key={index}
                        style={{
                            display: 'inline-block',
                            width: '33.33%',
                            boxSizing: 'border-box',
                            padding: '10px',
                            backgroundColor: 'gold',
                            margin: '10px'
                        }}
                    >
                        <div>
                            <div style={{ backgroundColor: 'orange' }}>
                                <h2>{prof.name.first}</h2>
                            </div>
                        </div>
                        <div>
                            <p>Edad: {prof.dob.age}</p>
                            <p>País: {prof.country}</p>
                        </div>
                    </div>
                ))}
            </div>
            {checkQ ? <button onClick={handleClick} style={{ padding: '10px', backgroundColor: 'green' }}>SHOW MORE</button> : <button onClick={handleClick} style={{ padding: '10px', backgroundColor: 'red' }}>SHOW LESS</button>}

        </div>

    )
}