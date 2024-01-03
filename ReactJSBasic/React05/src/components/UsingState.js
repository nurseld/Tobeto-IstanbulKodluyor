import { useState } from "react";

function UsingState() {

    const [name, setName] = useState("Nursel");
    const [surname, setSurname] = useState("Demirkıran");

    return (

        <div>

            <h1>Using State</h1>
            <hr />
            <div>
                {name} {surname}
            </div>
            <br />
            <br />

            <button onClick={() => setName("Nursello")}>Change Name</button>
            <button onClick={() => setSurname("Demirbüken")}>Change Surname</button>

        </div>
    );
}

export default UsingState;