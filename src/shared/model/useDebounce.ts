import { useCallback, useRef } from "react";

const useDebounce = <T extends any[]>(callback: (...args: T) => void, delay: number = 1000) => {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const debouncedFunction = useCallback((...args: T) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            callback(...args)
        }, delay);
    }, [callback, delay])


    return debouncedFunction;
}

export { useDebounce };
