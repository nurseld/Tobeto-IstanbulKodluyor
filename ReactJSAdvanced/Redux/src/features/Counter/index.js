import { increment, decrement, selectTick } from "../tickSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {

    const value = useSelector(selectTick)
    const dispatch = useDispatch();
    return (
        <>
            <br></br>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <span className="text">{value}</span>
            <button onClick={() => dispatch(increment())}>Increment</button>
        </>
    );
}