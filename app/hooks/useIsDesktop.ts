import { useState, useEffect } from 'react';

export const useIsDesktop = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 768px)");
        setIsDesktop(mediaQuery.matches);

        const handleChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    return isDesktop;
};