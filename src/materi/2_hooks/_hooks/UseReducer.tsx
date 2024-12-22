import { useReducer } from "react";

/**
 * useReducer digunakan untuk mengelola state yang lebih kompleks dengan banyak aksi.
 * Ini sangat berguna untuk state yang membutuhkan logika pembaruan yang lebih kompleks daripada useState.
 */
export default function UseReducer() {
    // Mendefinisikan reducer untuk menangani berbagai aksi
    const reducer = (state: { count: number }, action: { type: string }) => {
        switch (action.type) {
            case "increment":
                return { count: state.count + 1 };
            case "decrement":
                return { count: state.count - 1 };
            default:
                return state;
        }
    };

    // Menggunakan useReducer untuk mengelola state count
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div>
            <h2>useReducer</h2>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
            <span>Count: {state.count}</span>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
        </div>
    );
}
