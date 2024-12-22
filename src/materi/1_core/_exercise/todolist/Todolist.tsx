import { ChangeEvent, useMemo, useState } from "react";
import { Todo } from "./Todo";
import { Task } from "./Task";

export default function Todolist() {
    // State utama
    const [tasks, setTasks] = useState<Task[]>([]);
    const [inputTaskName, setInputTaskName] = useState<string>("");
    const [filterStatus, setFilterStatus] = useState<boolean | null>(null);
    const [sortOrder, setSortOrder] = useState<"ASC" | "DESC">("ASC");
    const [searchTerm, setSearchTerm] = useState<string>("");

    // Handler untuk menambah tugas
    const addTask = (name: string) => {
        if (!name) return alert("Nama tugas tidak boleh kosong!");
        if (tasks.some((task) => task.name === name)) return alert("Tugas dengan nama yang sama sudah ada!");
        setTasks((prev) => [
            ...prev,
            {
                id: prev.length + 1,
                name: name.trim(),
                isCompleted: false,
            },
        ]);
    };

    // Handler untuk menghapus tugas
    const removeTask = (taskId: number) => {
        setTasks((prev) => prev.filter((task) => task.id !== taskId));
    };

    // Handler untuk toggle status tugas
    const toggleTask = (taskId: number) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === taskId
                    ? { ...task, isCompleted: !task.isCompleted }
                    : task
            )
        );
    };

    // Menggunakan useMemo untuk menghitung daftar tugas yang difilter, diurutkan, dan dicari
    const filteredTasks = useMemo(() => {
        let updatedTasks = [...tasks];

        // Filter berdasarkan status
        if (filterStatus !== null) {
            updatedTasks = updatedTasks.filter(
                (task) => task.isCompleted === filterStatus
            );
        }

        // Filter berdasarkan kata kunci pencarian
        if (searchTerm) {
            updatedTasks = updatedTasks.filter((task) =>
                task.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Sorting berdasarkan nama
        updatedTasks.sort((a, b) =>
            sortOrder === "ASC"
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name)
        );

        return updatedTasks;
    }, [tasks, filterStatus, searchTerm, sortOrder]);

    // Handler untuk input nama tugas
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputTaskName(e.target.value);
    };

    // Handler untuk input pencarian
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div id="todolist">
            {/* Input form untuk menambah tugas */}
            <div id="inputs">
                <input
                    type="text"
                    placeholder="Masukkan nama tugas..."
                    value={inputTaskName}
                    onChange={handleInputChange}
                />
                <button onClick={() => addTask(inputTaskName)}>Tambah</button>
            </div>

            {/* Filter, sorting, dan pencarian */}
            <div id="controls">
                <input
                    type="text"
                    placeholder="Cari nama tugas..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button onClick={() => setFilterStatus(false)}>
                    Status: Belum
                </button>
                <button onClick={() => setFilterStatus(true)}>
                    Status: Selesai
                </button>
                <button onClick={() => setFilterStatus(null)}>
                    Tampilkan Semua
                </button>
                <button onClick={() => setSortOrder("ASC")}>Sort: ASC</button>
                <button onClick={() => setSortOrder("DESC")}>Sort: DESC</button>
            </div>

            {/* List tugas */}
            <div id="lists">
                <h2>Daftar Tugas:</h2>
                <ul>
                    {filteredTasks.length > 0 ? (
                        filteredTasks.map((task) => (
                            <Todo
                                key={task.id}
                                task={task}
                                onToggle={toggleTask}
                                onRemove={removeTask}
                            />
                        ))
                    ) : (
                        <li>Belum ada tugas yang ditemukan.</li>
                    )}
                </ul>
            </div>
        </div>
    );
}