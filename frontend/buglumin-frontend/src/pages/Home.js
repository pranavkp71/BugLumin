import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
    const [snapshots, setSnapshots] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/snapshots/")
        .then(res => res.json())
        .then(data => {
            console.log("Fetched snapshots:", data);
            setSnapshots(data.snapshots);
        })
        .catch(err => console.error("Error fetching snapshots:", err));

    }, []);

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Debug Snapshots</h1>
            {snapshots.map(snap => (
                <Link to={`/snapshot/${snap.id}`} key={snap.id}>
                    <div className="border p-2 mb-2 rounded bg-gray-100 hover:bg-gray-200">
                        <p className="text-sm text-gray-700">{snap.created_at}</p>
                        <pre className="text-xs">{snap.code.slice(0,100)}...</pre>
                    </div>
                </Link>
            ))}
        </div>
    );
}