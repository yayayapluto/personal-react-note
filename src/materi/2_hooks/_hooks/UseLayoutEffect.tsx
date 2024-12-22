import { useLayoutEffect, useState } from "react";

/**
 * useLayoutEffect mirip dengan useEffect, tetapi dijalankan lebih awal, setelah DOM telah dimodifikasi tetapi sebelum komponen di-render.
 * Biasanya digunakan untuk manipulasi DOM secara langsung.
 */
export default function UseLayoutEffect() {
    const [width, setWidth] = useState<number>(window.innerWidth);

    useLayoutEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div>
            <h2>useLayoutEffect</h2>
            <p>Window width: {width}</p>
        </div>
    );
}
