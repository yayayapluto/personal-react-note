import { useDebugValue } from "react";

/**
 * useDebugValue digunakan untuk memberikan label debug pada hook kustom yang sedang digunakan.
 * Berguna untuk menambahkan label yang lebih informatif pada React Developer Tools.
 */
function useCustomHook(value: number) {
    useDebugValue(value > 10 ? "High" : "Low");
    return value;
}

export default function UseDebugValue() {
    const value = useCustomHook(5);

    return (
        <div>
            <h2>useDebugValue</h2>
            <p>Value: {value}</p>
        </div>
    );
}
