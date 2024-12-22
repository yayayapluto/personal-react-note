import { useState } from "react";

/**
 * useState digunakan untuk mengelola state dalam function component.
 * useState mengembalikan 2 elemen: state saat ini dan fungsi untuk mengubah nilai state tersebut.
 */
export default function UseState() {
    // Menginisialisasi state `count` dengan nilai awal 0 dan tipe data number
    const [count, setCount] = useState<number>(0);

    // Fungsi untuk menambah nilai `count`
    const increment = () => setCount(prev => prev + 1);

    // Fungsi untuk mengurangi nilai `count`
    const decrement = () => setCount(prev => prev - 1);

    return (
        <div>
            <h2>useState</h2>
            <button onClick={decrement}>-</button>
            <span> Current count: {count} </span>
            <button onClick={increment}>+</button>
        </div>
    );
}
