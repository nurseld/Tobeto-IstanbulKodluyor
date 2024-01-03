import { useState } from "react";

function StateInput2() {

    const [user, setUser] = useState({ name: "Nursel", surname: "Demirkıran", age: 27 });


    const onChangeValue = (e) => {

        var inputName = e.target.name;

        setUser({ ...user, [e.target.name]: e.target.value })

        // if (inputName == "name")
        //     setName(e.target.value)

        // if (inputName == "surname")
        //     setName(e.target.value)

        // if (inputName == "age")
        //     setName(e.target.value)
    }

    return (

        <div>

            <h1>State Input</h1>
            <hr />
            <div>
                {user.name} {user.surname} ({user.age})
            </div>
            <br />

            <div>

                {/* <input type="text" placeholder="name" value={name} onChange={(event) => setName(event.target.value)} />
                <input type="text" placeholder="surname" value={surname} onChange={(event) => setSurname(event.target.value)} />
                <input type="number" placeholder="age" value={age} onChange={(event) => setAge(event.target.value)} /> */}

                <input name="name" type="text" placeholder="name" value={user.name} onChange={onChangeValue} />
                <input name="surname" type="text" placeholder="surname" value={user.surname} onChange={onChangeValue} />
                <input name="age" type="number" placeholder="age" value={user.age} onChange={onChangeValue} />

            </div>
            <br />

            {/* <button onClick={() => setUser({ name: "Nursello", surname: "DEMİRBÜKEN", age: 27 })}>Save</button>
            <button onClick={() => setUser({ age: 17 })}>Change Age</button>
            <button onClick={() => setUser({ ...user, name: "Nursello", surname: "DEMİRBÜKEN", age: 17 })}>Change User Info</button> */}

        </div>
    );
}

export default StateInput2;