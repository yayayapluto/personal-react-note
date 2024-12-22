import { useContext, createContext } from "react";

/**
 * useContext digunakan untuk mengambil nilai dari Context.
 * Context digunakan untuk berbagi data antar komponen tanpa perlu mengirim props berulang-ulang.
 */
export default function UseContext() {
    // Membuat Context dengan nilai default 'light'
    const ThemeContext = createContext<string>("light");

    // Mengakses nilai dari ThemeContext menggunakan useContext
    const theme = useContext(ThemeContext);

    return (
        <div>
            <h2>useContext</h2>
            <p>Current Theme: {theme}</p>
        </div>
    );
}