import { Task } from "./Task";

type TodoProp = {
    task: Task;
    onToggle: (taskId: number) => void;
    onRemove: (taskId: number) => void;
};

export function Todo({ task, onToggle, onRemove }: TodoProp) {
    const handleToggle = () => onToggle(task.id); // Memanggil fungsi toggle dari props
    const handleRemove = () => onRemove(task.id); // Memanggil fungsi remove dari props

    return (
        <li>
            <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={handleToggle}
            />
            {/* Menampilkan nama tugas dengan kondisi jika selesai diberi <del> */}
            {task.isCompleted ? <del>{task.name}</del> : task.name}
            <button onClick={handleRemove}>Hapus</button>
        </li>
    );
}
