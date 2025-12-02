import { StyleConveyor } from './styles/Conveyor';
import Conveyor4mBody from '../assets/images/conveyor-4m-body.svg?react';
import Conveyor4mBelt from '../assets/images/conveyor-4m-belt.svg?react';

interface ConveyorProps {
    id: string;
    bodyIndex: number;
    running: boolean;
    bodyStyle: React.CSSProperties;
    beltStyle: React.CSSProperties;
}

export default function Conveyor({ id, running, bodyIndex, bodyStyle, beltStyle }: ConveyorProps) {

    return (
        <StyleConveyor
            id={id}
            style={bodyStyle}
        >
            <Conveyor4mBody
                className='body'
                style={{ zIndex: bodyIndex }}
            />

            {/* Belt Animated */}
            <div
                className={running ? 'belt run' : 'belt'}
                style={beltStyle}
            >
                <Conveyor4mBelt style={{ width: '100%', height: '100%', display: 'block' }} />
                <Conveyor4mBelt style={{ width: '100%', height: '100%', display: 'block' }} />
            </div>
        </StyleConveyor>
    );
}