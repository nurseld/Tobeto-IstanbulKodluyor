import { useState } from "react";

function StateObject() {


    const [user, setUser] = useState({ name: "Nursel", surname: "Demirkıran", age: 27 });

    return (

        <div>

            <h1>State Object</h1>
            <hr />
            <div>
                {user.name} {user.surname} ({user.age})
            </div>

            <br />
            <button onClick={() => setUser({ name: "Nursello", surname: "DEMİRBÜKEN", age: 27 })}>Save</button>
            <button onClick={() => setUser({ age: 17 })}>Change Age</button>
            <button onClick={() => setUser({ ...user, name: "Nursello", surname: "DEMİRBÜKEN", age: 17 })}>Change User Info</button>

        </div>
    );
}

export default StateObject;