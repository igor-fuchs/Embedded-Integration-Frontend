// Check if the part is touching the object
export const isTouching = (partRef: React.RefObject<HTMLDivElement | null>, objectRef: React.RefObject<HTMLDivElement | null>): boolean => {
    if (!partRef.current || !objectRef.current) return false;

    const partRect = partRef.current.getBoundingClientRect();
    const conveyorElement = objectRef.current.parentElement;
    if (!conveyorElement) return false;

    const conveyorRect = conveyorElement.getBoundingClientRect();

    // Verifica sobreposição horizontal e vertical
    const horizontalOverlap =
        partRect.left < conveyorRect.right &&
        partRect.right > conveyorRect.left;

    const verticalOverlap =
        partRect.top < conveyorRect.bottom &&
        partRect.bottom > conveyorRect.top;

    return horizontalOverlap && verticalOverlap;
};
