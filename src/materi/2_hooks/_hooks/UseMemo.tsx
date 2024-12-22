import { useMemo, useState } from "react";

/**
 * useMemo digunakan untuk memcached hasil perhitungan yang mahal, agar hanya dihitung ulang ketika dependensi berubah.
 */
export default function UseMemo() {
    const [count, setCount] = useState<number>(0);

    // useMemo hanya akan menghitung ulang result jika `count` berubah
    const expensiveComputation = useMemo(() => {
        console.log("Menghitung ulang...");
        return count / 10;
    }, [count]);

    return (
        <div>
            <h2>useMemo</h2>
            <p>Result of expensive computation: {expensiveComputation}</p>
            <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
        </div>
    );
}
