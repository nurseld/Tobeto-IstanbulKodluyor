import { useState } from "react";

function StateArray() {

    const [cities, setCities] = useState(["İstanbul", "Ankara", "Tekirdağ"]);

    return (

        <div>

            <h1>State Array</h1>
            <hr />
            <ul>
                {
                    cities.map((city, i) => <li key={i}>{city}</li>)
                }
            </ul>
            <br />
            <button onClick={() => setCities([...cities, "İzmir"])}>Add New City</button>

        </div>
    );
}

export default StateArray;