import { useEffect, useRef } from 'react'

const useClickOutside = (callback) => {
    const ref = useRef();

    useEffect(() => {
        const handleClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            callback();
        }
        };
        document.addEventListener('click', handleClick, true);

        return () => {
            document.removeEventListener('click', handleClick, true);
        };
    }, [ref, callback]);

    return ref;
};

export { useClickOutside };