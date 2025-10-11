
import axios from "axios";
import { useEffect, useState } from "react"



const useApp = () => {
    const [AppData, setAppData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        setLoading(true)
        axios('/AllAppsData.json')
            .then(data => setAppData(data.data))
            .catch((err => setError(err)))
            .finally(() => setLoading(false))
    }, []);


    return { AppData, loading, error };
};

export default useApp;