import { useState } from "react";
import { increment, decrement, incrementByAmount, selectTick } from "../tickSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {

    const [amount, setAmount] = useState(0);
    const value = useSelector(selectTick);
    const dispatch = useDispatch();

    return (
        <>
            <br></br>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <span className="text">{value}</span>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <br /><br />

            <input value={amount} onChange={(e) => setAmount(e.target.value)} />
            <button onClick={() => dispatch(incrementByAmount({ val: parseInt(amount) }))}>Increment by Amount</button>
        </>
    );
}