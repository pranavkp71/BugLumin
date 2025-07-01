import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ViewSnapshot() {
    const { id } = useParams();
    const [snap, setSnap] = useState(null);

    useEffect(() => {
        fetch(`http://127.0.0.1:5000/snapshots/${id}`)
            .then(res => res.json())
            .then(setSnap);
    }, [id]);

    if (!snap) return <div className="p-4">Loading...</div>;

    return (
        <div className="p-4">
            <h2 className="text-lg font-bold mb-2">Snapshot Details</h2>
            <pre className="bg-black text-white p-4 rounded">{snap.code}</pre>
            {snap.logs && (
                <div className="mt-4">
                    <h3 className="font-semibold">Logs</h3>
                    <pre className="bg-gray-800 text-white p-2 rounded">{snap.logs}</pre>
                </div>
            )}
        </div>
    );
}