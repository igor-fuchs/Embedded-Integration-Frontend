import { StyleTechnologies } from "./styles/Technologies";
import IndustrialIcon from '../assets/icons/industrial-icon.svg';
import Logo from '../assets/logo.svg';
import ReactIcon from '../assets/icons/react-icon.svg';
import DotNetIcon from '../assets/icons/dotnet-icon.png';
import ConfigIcon from '../assets/icons/config-icon.svg';
import PaintIcon from '../assets/icons/paint-icon.svg';
import { useRef, useState, useEffect } from "react";

export default function Technologies() {
    const gridRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [velocity, setVelocity] = useState(0);
    const [lastX, setLastX] = useState(0);
    const [lastTime, setLastTime] = useState(0);
    const [autoScroll, setAutoScroll] = useState(true); // mantém ativo desde o início
    const inactivityTimerRef = useRef<number | null>(null);
    const contentWidthRef = useRef<number>(0);

    const cards = [
        {
            key: 'factory-io',
            iconClass: 'factory-io',
            icon: IndustrialIcon,
            title: 'Factory IO',
            description: '3D factory simulation platform providing realistic industrial automation scenarios and equipment modeling.'
        },
        {
            key: 'tia-portal',
            iconClass: 'tia-portal',
            icon: Logo,
            title: 'TIA Portal',
            description: 'Siemens engineering framework for PLC programming, HMI development, and industrial automation control.'
        },
        {
            key: 'react',
            iconClass: 'react',
            icon: ReactIcon,
            title: 'React',
            description: 'Modern JavaScript library for building responsive user interfaces and real-time data visualization dashboards.'
        },
        {
            key: 'dotnet',
            iconClass: 'dotnet',
            icon: DotNetIcon,
            title: '.NET',
            description: 'Server-side runtime enabling real-time communication and data processing between systems.'
        },
        {
            key: 'protocols',
            iconClass: 'siemens-plc',
            icon: ConfigIcon,
            title: 'Communication Protocols',
            description: 'OPC UA and HTTP enabling communication between industrial devices and services.'
        },
        {
            key: 'pixel-art',
            iconClass: 'pixel-art',
            icon: PaintIcon,
            title: 'Pixel Art',
            description: 'Custom animated pixel art visualizations bringing factory operations to life in a unique artistic style.'
        }
    ];

    const resetInactivityTimer = () => {
        if (inactivityTimerRef.current) {
            clearTimeout(inactivityTimerRef.current);
        }
        setAutoScroll(false);
        inactivityTimerRef.current = window.setTimeout(() => {
            setAutoScroll(true);
        }, 3000);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!gridRef.current) return;
        resetInactivityTimer();
        setIsDragging(true);
        setStartX(e.pageX - gridRef.current.offsetLeft);
        setScrollLeft(gridRef.current.scrollLeft);
        setLastX(e.pageX);
        setLastTime(Date.now());
        setVelocity(0);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !gridRef.current) return;
        e.preventDefault();
        const x = e.pageX - gridRef.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        gridRef.current.scrollLeft = scrollLeft - walk;

        const currentTime = Date.now();
        const timeDiff = currentTime - lastTime;
        if (timeDiff > 0) {
            const newVelocity = (e.pageX - lastX) / timeDiff;
            setVelocity(newVelocity);
        }
        setLastX(e.pageX);
        setLastTime(currentTime);

        // Wrap-around during drag
        const contentWidth = contentWidthRef.current;
        if (contentWidth > 0) {
            if (gridRef.current.scrollLeft >= contentWidth) {
                gridRef.current.scrollLeft -= contentWidth;
            } else if (gridRef.current.scrollLeft <= 0) {
                gridRef.current.scrollLeft += contentWidth;
            }
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        resetInactivityTimer();
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        resetInactivityTimer();
    };

    // Initial measurement of content width (original set of cards)
    useEffect(() => {
        if (gridRef.current) {
            // Each card has fixed width, but we rely on scrollWidth/2 due to duplication
            contentWidthRef.current = gridRef.current.scrollWidth / 2;
        }
    }, []);

    // Momentum after drag release
    useEffect(() => {
        if (!isDragging && Math.abs(velocity) > 0.1 && gridRef.current) {
            let currentVelocity = velocity * 16; // scale
            const decay = 0.95;
            const step = () => {
                if (!gridRef.current) return;
                if (Math.abs(currentVelocity) < 0.5) return;
                gridRef.current.scrollLeft -= currentVelocity;
                currentVelocity *= decay;

                // Wrap-around
                const contentWidth = contentWidthRef.current;
                if (contentWidth > 0) {
                    if (gridRef.current.scrollLeft >= contentWidth) {
                        gridRef.current.scrollLeft -= contentWidth;
                    } else if (gridRef.current.scrollLeft <= 0) {
                        gridRef.current.scrollLeft += contentWidth;
                    }
                }
                requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
        }
    }, [isDragging, velocity]);

    // Auto-scroll when inactive
    useEffect(() => {
        if (!autoScroll || isDragging) return;
        let rafId: number;
        const speed = 0.8; // velocidade um pouco maior para ficar visível
        const autoStep = () => {
            if (!gridRef.current) return;
            gridRef.current.scrollLeft += speed;
            const contentWidth = contentWidthRef.current;
            if (contentWidth > 0) {
                if (gridRef.current.scrollLeft >= contentWidth) {
                    gridRef.current.scrollLeft -= contentWidth;
                } else if (gridRef.current.scrollLeft <= 0) {
                    gridRef.current.scrollLeft += contentWidth;
                }
            }
            rafId = requestAnimationFrame(autoStep);
        };
        rafId = requestAnimationFrame(autoStep);
        return () => cancelAnimationFrame(rafId);
    }, [autoScroll, isDragging]);

    // Removido controle de setas

    return (
        <StyleTechnologies id="Technologies">
            <div className="technologies-container">
                <div className="technologies-content">
                    <div className="technologies-header">
                        <h2 className="technologies-title">Technologies</h2>
                        <p className="technologies-description">
                            Cutting-edge tools and platforms powering the integration
                        </p>
                    </div>

                    <div 
                        className="technologies-grid"
                        ref={gridRef}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="technologies-track">
                            {cards.concat(cards).map((c, idx) => (
                                <div key={c.key + '-' + idx} className="tech-card">
                                    <div className={`tech-icon ${c.iconClass}`}> 
                                        <img src={c.icon} alt={c.title} {...(c.key === 'tia-portal' ? { width: 22, height: 22 } : {})} />
                                    </div>
                                    <h3 className="tech-title">{c.title}</h3>
                                    <p className="tech-description">{c.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </StyleTechnologies>
    );
}
