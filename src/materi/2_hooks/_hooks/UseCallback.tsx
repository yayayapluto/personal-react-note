import { useCallback, useState } from "react";

/**
 * useCallback digunakan untuk mengoptimalkan performa dengan mengingat fungsi yang dibuat, hanya membuat ulang fungsi jika dependensi berubah.
 */
export default function UseCallback() {
    const [count, setCount] = useState<number>(0);

    // useCallback akan mengingat fungsi increment sehingga tidak dibuat ulang setiap render
    const increment = useCallback(() => setCount(count + 1), [count]);

    return (
        <div>
            <h2>useCallback</h2>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}