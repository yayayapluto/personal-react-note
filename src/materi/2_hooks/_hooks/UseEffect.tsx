import { useEffect, useState } from "react";

/**
 * useEffect digunakan untuk menangani efek samping dalam komponen React.
 * Efek samping seperti pengaturan interval atau pengambilan data.
 */
export default function UseEffect() {
    // State untuk menyimpan nilai timer
    const [time, setTime] = useState<number>(0);

    // useEffect untuk mengatur interval saat komponen pertama kali dirender
    useEffect(() => {
        // Mengatur interval untuk menambah `time` setiap detik
        const interval = setInterval(() => {
            setTime(t => t + 1);
        }, 1000);

        // Fungsi cleanup untuk menghentikan interval saat komponen di-unmount
        return () => clearInterval(interval);
    }, []); // Dependency array kosong berarti efek hanya dijalankan sekali

    return (
        <div>
            <h2>useEffect</h2>
            <p>Timer: {time}</p>
        </div>
    );
}
