import { useRef } from "react";

/**
 * useRef digunakan untuk menyimpan referensi ke elemen DOM atau nilai yang tidak memicu render ulang.
 * Biasanya digunakan untuk manipulasi DOM secara langsung atau untuk menyimpan nilai yang tidak perlu di-render ulang.
 */
export default function UseRef() {
    // Membuat referensi untuk input element
    const inputRef = useRef<HTMLInputElement>(null);

    // Fungsi untuk memfokuskan input
    const focusInput = () => inputRef.current?.focus();

    return (
        <div>
            <h2>useRef</h2>
            <input ref={inputRef} />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
}