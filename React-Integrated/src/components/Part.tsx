import { useEffect, useState, useRef } from 'react';
import { StylePart } from './styles/Part';
import { isTouching } from './lib/PartLib';
import GreenPart from '../assets/images/green-part.svg?react';

interface PartProps {
    bodyIndex: number;
    bodyStyle: React.CSSProperties;
    conveyorRunning: boolean;
    conveyorRef: React.RefObject<HTMLDivElement | null>;
    moveToHome: boolean;
    moveToPick: boolean;
    moveToAntecipation: boolean;
    moveToDrop: boolean;
    robotRef: React.RefObject<HTMLDivElement | null>;
    bigConveyorRef: React.RefObject<HTMLDivElement | null>;
    actuatorARef: React.RefObject<HTMLDivElement | null>;
    actuatorBRef: React.RefObject<HTMLDivElement | null>;
    actuatorCRef: React.RefObject<HTMLDivElement | null>;
}

export default function Part({ bodyIndex, bodyStyle, conveyorRef, conveyorRunning, moveToHome, moveToPick, moveToAntecipation, moveToDrop, robotRef, bigConveyorRef, actuatorARef, actuatorBRef, actuatorCRef }: PartProps) {
    const animationID = useRef<number | null>(null);
    const frameTime = useRef<number>(0);
    const partRef = useRef<HTMLDivElement>(null);
    const [yOffset, setYOffset] = useState(0);
    const [xOffset, setXOffset] = useState(0);

    // Conveyor Animation Effect
    useEffect(() => {
        // Stopping unnecessary animation frames
        if (!conveyorRunning || !isTouching(partRef, conveyorRef)) {
            cancelAnimationFrame(animationID.current!);
            animationID.current = null;
            return;
        }

        const animate = (currentTime: number) => {
            // Intializing the animation start time
            if (!frameTime.current) {
                frameTime.current = currentTime;
            }

            // Calculating time difference
            const deltaTime = currentTime - frameTime.current;

            if (deltaTime > 0) {
                const speed = parseFloat(conveyorRef.current?.dataset.speedMs || '0');

                // Moving animation based on speed and time elapsed
                setYOffset(prev => prev - speed * deltaTime);

                // Changing the firstTime to the current time after frame update
                frameTime.current = currentTime;
            }

            animationID.current = requestAnimationFrame(animate);
        };

        frameTime.current = 0;
        animationID.current = requestAnimationFrame(animate);
        return () => {
            if (animationID.current) {
                cancelAnimationFrame(animationID.current);
                animationID.current = null;
            }
        };

    }, [conveyorRunning]);

    return (
        <StylePart ref={partRef} style={{ ...bodyStyle, zIndex: bodyIndex }} $xOffset={xOffset} $yOffset={yOffset}>
            <GreenPart className='part' />
        </StylePart>
    );
}