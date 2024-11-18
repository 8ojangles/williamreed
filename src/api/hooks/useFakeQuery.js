import { useState, useEffect } from 'react';
import PUBS from './../localData/JSON-Map-Gastropubs.json';

const useFakeQuery = (query, { timeout = 1000, shouldError = false } = {}) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                // Simulate network delay
                await new Promise(resolve => setTimeout(resolve, timeout));

                if (shouldError) {
                    throw new Error('Simulated error');
                }

                // Simulate fetched data
                const fakeData = {
                    pubs: PUBS
                };

                setData(fakeData);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [query, timeout, shouldError]);

    return { loading, error, data };
};

export { useFakeQuery };