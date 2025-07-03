import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SharePublic() {
    const { shareId } = useParams();
    const [ snap, setSnap ] = useState(null);

    useEffect(() => {
        fetch(`http://127.0.0.1:5000/public/${shareId}`)
            .then(res => res.json())
            .then(setSnap);
    }, [shareId]);

    if (!snap) return <div className="p-4">Loading public snapshot....</div>;

    return (
        <div className="p-4">
            <h2 className="text-lg font-bold mb-2">Shared Snapshot</h2>
            <pre className="bg-black text-white p-4 rounded">{snap.code}</pre>
        </div>
    );
}