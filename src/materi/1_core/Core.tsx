import { useState } from "react";

type CoreProp = {
    text: string;
};

/**
 * Function Component: Mengembalikan elemen HTML
 * Props dipakai untuk menerima data dari parent.
 */
function Core({ text }: CoreProp) {
    /**
     * JSX: Nulis HTML di dalam JavaScript
     * Props bisa digunakan dalam JSX dengan {}
     */
    const helloWorld = <p>Hello {text}!</p>;

    /**
     * State React: [value, setValue]
     * Mengatur data dinamis di dalam komponen.
     */
    const [count, setCount] = useState(0);

    /**
     * Mengubah state dengan fungsi
     */
    const handleClick = () => setCount((prev) => prev + 1);

    /**
     * Conditional Rendering
     */
    const reachTen = count % 5 === 0 && count !== 0 ? <small>(Count is multiple of 5!)</small> : null;

    /**
     * List Rendering: Menggunakan .map()
     */
    const listRender = ["One", "Two", "Three"].map((x) => <li key={x}>{x}</li>);

    return (
        <div id="materi-core">
            <hr />
            <h1>Core!</h1>
            {helloWorld}
            <button onClick={handleClick}>Count: {count}</button>
            {reachTen}
            <ul>
                <li><strong>List render:</strong></li>
                {listRender}
            </ul>
            <hr />
        </div>
    );
}

export { Core };
