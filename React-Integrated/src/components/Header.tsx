import { StyleHeader } from "./styles/Header";

export default function Header() {
    return (
        <StyleHeader>
            <nav className="header-nav">
                <div className="header-content">
                    <div className="brand-container">
                        <img className="brand-logo" alt="Logo" src="https://api.builder.io/api/v1/image/assets/TEMP/0ddc236f36922836ec1123efe0ce50e6578fd294?width=64" />
                        <div className="brand-title">Embedded Integration</div>
                    </div>
                    <div className="nav-links">
                        <div className="nav-link">
                            <div className="nav-text">About</div>
                        </div>
                        <div className="nav-link">
                            <div className="nav-text">Technologies</div>
                        </div>
                        <div className="nav-link">
                            <div className="nav-text">Demo</div>
                        </div>
                        <div className="nav-link">
                            <div className="nav-text">Contact</div>
                        </div>
                    </div>
                </div>
            </nav>
        </StyleHeader>
    )
}
