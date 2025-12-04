import { StylePart } from './styles/Part';
import { useTransformMonitor } from './lib/PartLib';
import { useEffect, useState } from 'react';
import GreenPart from '../assets/images/green-part.svg?react';

/* 
1 - A ideia é fazer com que esse componente utilize o id dos outros componentes para se mover de acordo com a sua posição
2 - Ele deve ser capaz de criar múltiplas peças, oou seja, não somente um peça, mas sim várias podem estar presentes e cada uma em uma posilção diferente



Fazer com que ele pegue a posição inicial de Y ao iniciar running, depois fazer um calculo sobre a PosAtual - PosInicial para saber o deslocamento e 
aplicar esse deslocamento na peça
 */

interface PartProps {
    bodyIndex: number;
    bodyStyle: React.CSSProperties;
    conveyorRunning: boolean;
    conveyorRef: React.RefObject<HTMLDivElement | null>;
    robotRef: React.RefObject<HTMLDivElement | null>;
    bigConveyorRef: React.RefObject<HTMLDivElement | null>;
    actuatorARef: React.RefObject<HTMLDivElement | null>;
    actuatorBRef: React.RefObject<HTMLDivElement | null>;
    actuatorCRef: React.RefObject<HTMLDivElement | null>;
}

export default function Part({ bodyIndex, bodyStyle, conveyorRunning, conveyorRef, robotRef, bigConveyorRef, actuatorARef, actuatorBRef, actuatorCRef }: PartProps) {
    const conveyorTransform = useTransformMonitor(conveyorRef, conveyorRunning);

    // Extract Y offset from transform matrix
    const extractYOffset = (transform: string): number => {
        if (!transform || transform === 'none') return 0;
        
        // Transform format: matrix(a, b, c, d, tx, ty)
        const match = transform.match(/matrix.*\((.+)\)/);
        if (!match) return 0;
        
        const values = match[1].split(',').map(v => parseFloat(v.trim()));
        
        // For matrix(a, b, c, d, tx, ty), ty is at index 5
        return values[5];
    };

    const yOffset = -200 + extractYOffset(conveyorTransform);
    const xOffset = 0;

    return (
        <StylePart style={bodyStyle} $xOffset={xOffset} $yOffset={yOffset}>
            <GreenPart className='part' style={{ zIndex: bodyIndex, position: 'absolute',left:0 }} />
        </StylePart>
    );
}