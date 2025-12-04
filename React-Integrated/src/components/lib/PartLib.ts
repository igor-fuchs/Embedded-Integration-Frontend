import { useEffect, useState, type RefObject } from 'react';

export const useTransformMonitor = (
    ref: RefObject<HTMLElement | null>,
    isActive: boolean
) => {
    const [transform, setTransform] = useState<string>('none');

    useEffect(() => {
        if (!isActive) return;

        let animationId: number;
        let lastTransform = '';

        const monitorTransform = () => {
            if (ref.current) {
                const currentTransform = window.getComputedStyle(ref.current).transform;
                
                if (currentTransform !== lastTransform) {
                    lastTransform = currentTransform;
                    setTransform(currentTransform);
                }
            }
            animationId = requestAnimationFrame(monitorTransform);
        };

        animationId = requestAnimationFrame(monitorTransform);
        return () => cancelAnimationFrame(animationId);
    }, [ref, isActive]);

    console.log('Current Transform:', transform);
    return transform;
};