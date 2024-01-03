import { useState } from "react";

function StateInput() {


    const [name, setName] = useState("Nursel");
    const [surname, setSurname] = useState("Demirkıran");
    const [age, setAge] = useState(27);

    const onChangeName = (event) => setName(event.target.value);
    const onChangeSurname = (event) => setSurname(event.target.value);
    const onChangeAge = (event) => setAge(event.target.value);

    return (

        <div>

            <h1>State Input</h1>
            <hr />
            <div>
                {name} {surname} ({age})
            </div>
            <br />

            <div>

                {/* <input type="text" placeholder="name" value={name} onChange={(event) => setName(event.target.value)} />
                <input type="text" placeholder="surname" value={surname} onChange={(event) => setSurname(event.target.value)} />
                <input type="number" placeholder="age" value={age} onChange={(event) => setAge(event.target.value)} /> */}

                <input type="text" placeholder="name" value={name} onChange={onChangeName} />
                <input type="text" placeholder="surname" value={surname} onChange={onChangeSurname} />
                <input type="number" placeholder="age" value={age} onChange={onChangeAge} />

            </div>
            <br />

            {/* <button onClick={() => setUser({ name: "Nursello", surname: "DEMİRBÜKEN", age: 27 })}>Save</button>
            <button onClick={() => setUser({ age: 17 })}>Change Age</button>
            <button onClick={() => setUser({ ...user, name: "Nursello", surname: "DEMİRBÜKEN", age: 17 })}>Change User Info</button> */}

        </div>
    );
}

export default StateInput;