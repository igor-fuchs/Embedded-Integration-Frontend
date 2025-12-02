import { StyleRobot } from "./styles/Robot"
import RobotLeftBody from "../assets/images/robot-left-body.svg?react";
import RobotLeftAxisX from "../assets/images/robot-left-axis-x.svg?react";
import RobotLeftAxisY from "../assets/images/robot-left-axis-y.svg?react";

interface RobotProps {
    id: string;
    bodyStyle: React.CSSProperties;
    axisXStyle: React.CSSProperties;
    axisYStyle: React.CSSProperties;
}

export default function Robot({ id, bodyStyle, axisXStyle, axisYStyle }: RobotProps) {
    return (
        <StyleRobot id={id}>
            <RobotLeftBody style={bodyStyle} />
            <RobotLeftAxisX style={axisXStyle} />
            <RobotLeftAxisY style={axisYStyle} />
        </StyleRobot>
    );
}