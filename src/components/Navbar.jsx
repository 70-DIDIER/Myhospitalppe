import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="container-fluid sticky-top bg-white shadow-sm">
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
                    <Link to="/" className="navbar-brand">
                        <h1 className="m-0 logo" style={{ color: '#0077B6' }}>
                        <i className="bi bi-h-square" style={{ color: '#0077B6' }}></i>
                            MyHospital
                        </h1>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <Link to="/" className="nav-item nav-link active">
                                Home
                            </Link>
                            <Link to="/about" className="nav-item nav-link">
                                About
                            </Link>
                            <Link to="/service" className="nav-item nav-link">
                                Service
                            </Link>
                            <div className="nav-item dropdown">
                                <Link
                                    to="#"
                                    className="nav-link dropdown-toggle"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Pages
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to="/team" className="dropdown-item">
                                        The Team
                                    </Link>
                                    <Link to="/testimonial" className="dropdown-item">
                                        Testimonial
                                    </Link>
                                    <Link to="/appointment" className="dropdown-item">
                                        Appointment
                                    </Link>
                                    <Link to="/search" className="dropdown-item">
                                        Search
                                    </Link>
                                </div>
                            </div>
                            <Link to="/contact" className="nav-item nav-link">
                                Contact
                            </Link>
                            <Link to="/contact" className="login-button">
                                Connexion
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;