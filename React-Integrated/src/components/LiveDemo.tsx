import { StyleLiveDemo } from "./styles/LiveDemo";

export default function LiveDemo() {
    return (
        <StyleLiveDemo>
            <div className="demo-container">
                <div className="demo-content">
                    <div className="demo-header">
                        <h2 className="demo-title">Live Demo</h2>
                        <p className="demo-description">
                            Experience the integration in action with interactive pixel art animations
                        </p>
                    </div>

                    <div className="demo-card">
                        <div className="demo-window">
                            <div className="window-overlay"></div>
                            <div className="window-controls">
                                <div className="control-dot green"></div>
                                <div className="control-dot yellow"></div>
                                <div className="control-dot blue"></div>
                            </div>

                            <div className="demo-preview">
                                <div className="play-button">
                                    <div className="play-icon">
                                        <svg width="23" height="30" viewBox="0 0 23 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_play)">
                                                <path d="M4.27734 2.28561C3.41016 1.7524 2.32031 1.73482 1.43555 2.23287C0.550781 2.73092 0 3.66842 0 4.68795V25.3129C0 26.3325 0.550781 27.27 1.43555 27.768C2.32031 28.2661 3.41016 28.2426 4.27734 27.7153L21.1523 17.4028C21.9902 16.893 22.5 15.9848 22.5 15.0004C22.5 14.0161 21.9902 13.1137 21.1523 12.5981L4.27734 2.28561Z" fill="white"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_play">
                                                    <path d="M0 0H22.5V30H0V0Z" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>

                                <h3 className="preview-title">Interactive Factory Simulation</h3>
                                <p className="preview-description">
                                    Watch pixel art animations come to life as data flows between Factory IO, TIA Portal, and React in real-time
                                </p>

                                <button className="launch-button">Launch Demo</button>
                            </div>
                        </div>

                        <div className="feature-cards">
                            <div className="feature-card">
                                <div className="feature-icon control">
                                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_control)">
                                            <path d="M18 0C18.5531 0 19 0.446875 19 1V15C19 15.5531 18.5531 16 18 16C17.4469 16 17 15.5531 17 15V1C17 0.446875 17.4469 0 18 0ZM14 3C14.5531 3 15 3.44687 15 4V15C15 15.5531 14.5531 16 14 16C13.4469 16 13 15.5531 13 15V4C13 3.44687 13.4469 3 14 3ZM11 7V15C11 15.5531 10.5531 16 10 16C9.44687 16 9 15.5531 9 15V7C9 6.44687 9.44687 6 10 6C10.5531 6 11 6.44687 11 7ZM6 9C6.55313 9 7 9.44687 7 10V15C7 15.5531 6.55313 16 6 16C5.44687 16 5 15.5531 5 15V10C5 9.44687 5.44687 9 6 9ZM3 13V15C3 15.5531 2.55313 16 2 16C1.44687 16 1 15.5531 1 15V13C1 12.4469 1.44687 12 2 12C2.55313 12 3 12.4469 3 13Z" fill="white"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_control">
                                                <path d="M0 0H20V16H0V0Z" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <h4 className="feature-title">Control Signals</h4>
                                <p className="feature-description">Real-time system control interface</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon assistant">
                                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_assistant)">
                                            <path d="M10 0C10.5531 0 11 0.446875 11 1V3H14.75C15.9937 3 17 4.00625 17 5.25V13.75C17 14.9937 15.9937 16 14.75 16H5.25C4.00625 16 3 14.9937 3 13.75V5.25C3 4.00625 4.00625 3 5.25 3H9V1C9 0.446875 9.44687 0 10 0ZM6.5 12C6.225 12 6 12.225 6 12.5C6 12.775 6.225 13 6.5 13H7.5C7.775 13 8 12.775 8 12.5C8 12.225 7.775 12 7.5 12H6.5ZM9.5 12C9.225 12 9 12.225 9 12.5C9 12.775 9.225 13 9.5 13H10.5C10.775 13 11 12.775 11 12.5C11 12.225 10.775 12 10.5 12H9.5ZM12.5 12C12.225 12 12 12.225 12 12.5C12 12.775 12.225 13 12.5 13H13.5C13.775 13 14 12.775 14 12.5C14 12.225 13.775 12 13.5 12H12.5ZM8.25 8C8.25 7.66848 8.1183 7.35054 7.88388 7.11612C7.64946 6.8817 7.33152 6.75 7 6.75C6.66848 6.75 6.35054 6.8817 6.11612 7.11612C5.8817 7.35054 5.75 7.66848 5.75 8C5.75 8.33152 5.8817 8.64946 6.11612 8.88388C6.35054 9.1183 6.66848 9.25 7 9.25C7.33152 9.25 7.64946 9.1183 7.88388 8.88388C8.1183 8.64946 8.25 8.33152 8.25 8ZM13 9.25C13.3315 9.25 13.6495 9.1183 13.8839 8.88388C14.1183 8.64946 14.25 8.33152 14.25 8C14.25 7.66848 14.1183 7.35054 13.8839 7.11612C13.6495 6.8817 13.3315 6.75 13 6.75C12.6685 6.75 12.3505 6.8817 12.1161 7.11612C11.8817 7.35054 11.75 7.66848 11.75 8C11.75 8.33152 11.8817 8.64946 12.1161 8.88388C12.3505 9.1183 12.6685 9.25 13 9.25ZM1.5 7H2V13H1.5C0.671875 13 0 12.3281 0 11.5V8.5C0 7.67188 0.671875 7 1.5 7ZM18.5 7C19.3281 7 20 7.67188 20 8.5V11.5C20 12.3281 19.3281 13 18.5 13H18V7H18.5Z" fill="white"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_assistant">
                                                <path d="M0 0H20V16H0V0Z" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <h4 className="feature-title">AI Assistant</h4>
                                <p className="feature-description">Interactive chat for troubleshooting</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon info">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_info)">
                                            <path d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM6.75 10.5H7.5V8.5H6.75C6.33437 8.5 6 8.16563 6 7.75C6 7.33437 6.33437 7 6.75 7H8.25C8.66563 7 9 7.33437 9 7.75V10.5H9.25C9.66563 10.5 10 10.8344 10 11.25C10 11.6656 9.66563 12 9.25 12H6.75C6.33437 12 6 11.6656 6 11.25C6 10.8344 6.33437 10.5 6.75 10.5ZM8 4C8.26522 4 8.51957 4.10536 8.70711 4.29289C8.89464 4.48043 9 4.73478 9 5C9 5.26522 8.89464 5.51957 8.70711 5.70711C8.51957 5.89464 8.26522 6 8 6C7.73478 6 7.48043 5.89464 7.29289 5.70711C7.10536 5.51957 7 5.26522 7 5C7 4.73478 7.10536 4.48043 7.29289 4.29289C7.48043 4.10536 7.73478 4 8 4Z" fill="white"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_info">
                                                <path d="M0 0H16V16H0V0Z" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <h4 className="feature-title">Information</h4>
                                <p className="feature-description">Project insights and documentation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StyleLiveDemo>
    );
}
