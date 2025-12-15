import { StyleBigConveyor } from "./styles/BigConveyor";
import { useEffect, useRef } from "react";
import Conveyor8mBody from "../assets/images/conveyor-8m-body.svg?react";
import Conveyor8mBelt from "../assets/images/conveyor-8m-belt.svg?react";
import Conveyor8mArch from "../assets/images/conveyor-8m-arch.svg?react";
import Conveyor8mBoxes from "../assets/images/conveyor-8m-boxes.svg?react";

export interface BigConveyorMovement {
    transformPx: number;
    transitionMs: number;
}

interface BigConveyorProps {
    id: string;
    ref: React.RefObject<HTMLDivElement | null>;
    running: boolean;
    bodyIndex: number;
    bodyStyle: React.CSSProperties;
    beltStyle: React.CSSProperties;
    beltMovement: BigConveyorMovement;
    setBeltMovement: React.Dispatch<React.SetStateAction<BigConveyorMovement>>;
    scaleFactor: number;
}

export default function BigConveyor({ id, ref, running, bodyIndex, bodyStyle, beltStyle, beltMovement, setBeltMovement, scaleFactor }: BigConveyorProps) {
    // Part z-index needs to be bodyIndex + 1
    const archIndex = bodyIndex + 2;
    const boxesIndex = bodyIndex + 3;
    const beltIndex = bodyIndex - 1;

    const animationDurationMs = 5000;
    const animationFrameRef = useRef<number | null>(null);
    const lastTimeRef = useRef<number>(0);
    const conveyorHeightRef = useRef<number>(0);
    const speedRef = useRef<number>(0);

    useEffect(() => {
        if (!ref.current) return;

        // Calculate conveyor height and speed
        conveyorHeightRef.current = ref.current.offsetHeight;
        const totalMovement = conveyorHeightRef.current * 0.5; // 50% of the height
        speedRef.current = totalMovement / animationDurationMs; // Speed in pixels per millisecond

        ref.current.dataset.speedMs = speedRef.current.toString();
    }, [scaleFactor]);

    useEffect(() => {
        if (!running) {
            // Stop animation
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
                animationFrameRef.current = null;
            }
            lastTimeRef.current = 0;
            return;
        }

        // Start animation
        const animate = (currentTime: number) => {
            if (!lastTimeRef.current) {
                lastTimeRef.current = currentTime;
            }

            const deltaTime = currentTime - lastTimeRef.current;

            if (deltaTime > 0) {
                setBeltMovement(prev => {
                    let newTransform = prev.transformPx - speedRef.current * deltaTime;
                    
                    // Reset position when it completes 50% movement
                    if (newTransform <= 0) {
                        newTransform = conveyorHeightRef.current * 0.5;
                    }

                    return {
                        transformPx: newTransform,
                        transitionMs: 0, // No transition, smooth frame-by-frame
                    };
                });

                lastTimeRef.current = currentTime;
            }

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        lastTimeRef.current = 0;
        // Initialize with 50% position
        setBeltMovement({
            transformPx: conveyorHeightRef.current * 0.5,
            transitionMs: 0,
        });
        animationFrameRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
                animationFrameRef.current = null;
            }
        };
    }, [running, scaleFactor]);

    return (
        <StyleBigConveyor id={id} ref={ref} style={bodyStyle}>
            <Conveyor8mBody className="body" style={{ zIndex: bodyIndex }} />
            <Conveyor8mArch className="arch" style={{ zIndex: archIndex }} />
            <Conveyor8mBoxes className="boxes" style={{ zIndex: boxesIndex }} />

            {/* Belt Animated */}
            <div 
                className="belt" 
                style={{ 
                    ...beltStyle, 
                    zIndex: beltIndex,
                    transform: `translateY(${beltMovement.transformPx * scaleFactor}px)`,
                    transition: beltMovement.transitionMs > 0 ? `transform ${beltMovement.transitionMs}ms ease` : 'none',
                }}
            >
                <Conveyor8mBelt style={{ width: '100%', height: '100%' }} />
                <Conveyor8mBelt style={{ width: '100%', height: '100%' }} />
            </div>
        </StyleBigConveyor>
    );
}