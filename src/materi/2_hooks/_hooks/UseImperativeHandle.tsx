import { forwardRef, useImperativeHandle, useRef } from "react";

/**
 * useImperativeHandle digunakan untuk mengontrol nilai yang diekspos oleh ref dari komponen yang menggunakan forwardRef.
 */
const UseImperativeHandle = forwardRef((_, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    // Menggunakan useImperativeHandle untuk mengekspose method tertentu kepada komponen parent
    useImperativeHandle(ref, () => ({
        focusInput: () => inputRef.current?.focus(),
    }));

    return <input ref={inputRef} />;
});

export default function ParentComponent() {
    const childRef = useRef<any>(null);

    // Fungsi untuk memfokuskan input pada child
    const focusInputInChild = () => childRef.current?.focusInput();

    return (
        <div>
            <h2>useImperativeHandle</h2>
            <button onClick={focusInputInChild}>Focus Child Input</button>
            <UseImperativeHandle ref={childRef} />
        </div>
    );
}
