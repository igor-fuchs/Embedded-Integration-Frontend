import { StyleAbout } from "./styles/About";

export default function About() {
    return (
        <StyleAbout>
            <div className="about-container">
                <div className="about-content">
                    <div className="about-header">
                        <h2 className="about-title">About the Project</h2>
                        <p className="about-description">
                            Demonstrating seamless data flow between industrial automation systems and modern web interfaces
                        </p>
                    </div>

                    <div className="about-grid">
                        <div className="features-column">
                            <div className="feature-card">
                                <div className="feature-content">
                                    <div className="feature-icon industrial">
                                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 1C1.44687 1 1 1.44687 1 2V9.5V11V13.5C1 14.3281 1.67188 15 2.5 15H15.5C16.3281 15 17 14.3281 17 13.5V9.5V4.75625C17 4.1875 16.3938 3.82813 15.8938 4.09688L11 6.73125V4.75625C11 4.1875 10.3938 3.82813 9.89375 4.09688L5 6.73125V2C5 1.44687 4.55313 1 4 1H2Z" fill="white"/>
                                        </svg>
                                    </div>
                                    <div className="feature-text">
                                        <h3 className="feature-title">Industrial Integration</h3>
                                        <p className="feature-description">
                                            Factory IO simulates real industrial processes, while TIA Portal provides PLC programming capabilities, creating an authentic automation environment.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="feature-card">
                                <div className="feature-content">
                                    <div className="feature-icon web">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_87_2782)">
                                                <path d="M11 8C11 8.69375 10.9625 9.3625 10.8969 10H5.10313C5.03438 9.3625 5 8.69375 5 8C5 7.30625 5.0375 6.6375 5.10313 6H10.8969C10.9656 6.6375 11 7.30625 11 8ZM11.9 6H15.7469C15.9125 6.64062 16 7.30937 16 8C16 8.69063 15.9125 9.35938 15.7469 10H11.9C11.9656 9.35625 12 8.6875 12 8C12 7.3125 11.9656 6.64375 11.9 6ZM15.4187 5H11.7719C11.4594 3.00312 10.8406 1.33125 10.0437 0.2625C12.4906 0.909375 14.4812 2.68438 15.4156 5H15.4187ZM10.7594 5H5.24062C5.43125 3.8625 5.725 2.85625 6.08437 2.04063C6.4125 1.30313 6.77812 0.76875 7.13125 0.43125C7.48125 0.1 7.77187 0 8 0C8.22813 0 8.51875 0.1 8.86875 0.43125C9.22187 0.76875 9.5875 1.30313 9.91562 2.04063C10.2781 2.85313 10.5687 3.85938 10.7594 5ZM4.22813 5H0.58125C1.51875 2.68438 3.50625 0.909375 5.95625 0.2625C5.15938 1.33125 4.54063 3.00312 4.22813 5ZM0.253125 6H4.1C4.03437 6.64375 4 7.3125 4 8C4 8.6875 4.03437 9.35625 4.1 10H0.253125C0.0875 9.35938 0 8.69063 0 8C0 7.30937 0.0875 6.64062 0.253125 6ZM6.08437 13.9563C5.72187 13.1438 5.43125 12.1375 5.24062 11H10.7594C10.5687 12.1375 10.275 13.1438 9.91562 13.9563C9.5875 14.6938 9.22187 15.2281 8.86875 15.5656C8.51875 15.9 8.22813 16 8 16C7.77187 16 7.48125 15.9 7.13125 15.5688C6.77812 15.2313 6.4125 14.6969 6.08437 13.9594V13.9563ZM4.22813 11C4.54063 12.9969 5.15938 14.6688 5.95625 15.7375C3.50625 15.0906 1.51875 13.3156 0.58125 11H4.22813ZM15.4187 11C14.4812 13.3156 12.4938 15.0906 10.0469 15.7375C10.8438 14.6688 11.4594 12.9969 11.775 11H15.4187Z" fill="white"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_87_2782">
                                                    <path d="M0 0H16V16H0V0Z" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="feature-text">
                                        <h3 className="feature-title">Web Interface</h3>
                                        <p className="feature-description">
                                            React-based dashboard provides real-time monitoring and control capabilities, bridging the gap between industrial systems and modern web technologies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="diagram-column">
                            <div className="diagram-card">
                                <div className="diagram-content">
                                    <div className="flow-header">
                                        <span className="flow-label factory">Factory IO</span>
                                        <div className="flow-line"></div>
                                        <span className="flow-label react">React</span>
                                    </div>

                                    <div className="central-icon-wrapper">
                                        <div className="central-icon">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_87_2795)">
                                                    <path d="M6.875 0.9375C6.875 0.417969 6.45703 0 5.9375 0C5.41797 0 5 0.417969 5 0.9375V2.5C3.62109 2.5 2.5 3.62109 2.5 5H0.9375C0.417969 5 0 5.41797 0 5.9375C0 6.45703 0.417969 6.875 0.9375 6.875H2.5V9.0625H0.9375C0.417969 9.0625 0 9.48047 0 10C0 10.5195 0.417969 10.9375 0.9375 10.9375H2.5V13.125H0.9375C0.417969 13.125 0 13.543 0 14.0625C0 14.582 0.417969 15 0.9375 15H2.5C2.5 16.3789 3.62109 17.5 5 17.5V19.0625C5 19.582 5.41797 20 5.9375 20C6.45703 20 6.875 19.582 6.875 19.0625V17.5H9.0625V19.0625C9.0625 19.582 9.48047 20 10 20C10.5195 20 10.9375 19.582 10.9375 19.0625V17.5H13.125V19.0625C13.125 19.582 13.543 20 14.0625 20C14.582 20 15 19.582 15 19.0625V17.5C16.3789 17.5 17.5 16.3789 17.5 15H19.0625C19.582 15 20 14.582 20 14.0625C20 13.543 19.582 13.125 19.0625 13.125H17.5V10.9375H19.0625C19.582 10.9375 20 10.5195 20 10C20 9.48047 19.582 9.0625 19.0625 9.0625H17.5V6.875H19.0625C19.582 6.875 20 6.45703 20 5.9375C20 5.41797 19.582 5 19.0625 5H17.5C17.5 3.62109 16.3789 2.5 15 2.5V0.9375C15 0.417969 14.582 0 14.0625 0C13.543 0 13.125 0.417969 13.125 0.9375V2.5H10.9375V0.9375C10.9375 0.417969 10.5195 0 10 0C9.48047 0 9.0625 0.417969 9.0625 0.9375V2.5H6.875V0.9375ZM6.25 5H13.75C14.4414 5 15 5.55859 15 6.25V13.75C15 14.4414 14.4414 15 13.75 15H6.25C5.55859 15 5 14.4414 5 13.75V6.25C5 5.55859 5.55859 5 6.25 5ZM13.75 6.25H6.25V13.75H13.75V6.25Z" fill="white"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_87_2795">
                                                        <path d="M0 0H20V20H0V0Z" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <p className="portal-label">TIA Portal</p>
                                    </div>

                                    <div className="status-indicators">
                                        <div className="status-item">
                                            <div className="status-dot simulation"></div>
                                            <span className="status-text">Simulation</span>
                                        </div>
                                        <div className="status-item">
                                            <div className="status-dot processing"></div>
                                            <span className="status-text">Processing</span>
                                        </div>
                                        <div className="status-item">
                                            <div className="status-dot interface"></div>
                                            <span className="status-text">Interface</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StyleAbout>
    );
}
