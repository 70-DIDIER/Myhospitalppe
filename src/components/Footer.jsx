
function Footer() {
    return (
        <>
            <div className="container-fluid bg-dark text-light mt-5 py-5">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h4 className="d-inline-block custom-btn text-uppercase border-bottom border-5 border-secondary mb-4">
                                Get In Touch
                            </h4>
                            <p className="mb-4">
                                No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et
                                et dolor sed dolor
                            </p>
                            <p className="mb-2">
                                <i className="bi bi-geo-alt  me-3" style={{ color: '#0077B6' }}></i>
                                123 Street, New York, USA
                            </p>
                            <p className="mb-2">
                                <i className="bi bi-envelope  me-3" style={{ color: '#0077B6' }}></i>
                                info@example.com
                            </p>
                            <p className="mb-0">
                                <i className="bi bi-telephone  me-3" style={{ color: '#0077B6' }}/>
                                +012 345 6789
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="d-inline-block custom-btn text-uppercase border-bottom border-5 border-secondary mb-4">
                                Quick Links
                            </h4>
                            <div className="d-flex flex-column">
                                <a href="/" className="text-light mb-2">
                                    <i className="bi bi-chevron-right me-2" style={{ color: '#0077B6' }}/> Home
                                </a>
                                <a href="/contact" className="text-light mb-2">
                                    <i className="bi bi-chevron-right me-2" /> Contact
                                </a>
                                <a href="/about" className="text-light mb-2">
                                    <i className="bi bi-chevron-right me-2" /> About
                                </a>
                                <a href="/services" className="text-light mb-2">
                                    <i className="bi bi-chevron-right me-2" /> Services
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="d-inline-block custom-btn text-uppercase border-bottom border-5 border-secondary mb-4">
                                Follow Us
                            </h4>
                            <div className="d-flex">
                                <a className="btn btn-lg custom-btn btn-lg-square rounded-circle me-2" href="#">
                                    <i className="bi bi-twitter"></i>
                                </a>
                                <a className="btn btn-lg custom-btn btn-lg-square rounded-circle me-2" href="#">
                                    <i className="bi bi-facebook"></i>
                                </a>
                                <a className="btn btn-lg custom-btn btn-lg-square rounded-circle me-2" href="#">
                                    <i className="bi bi-linkedin"></i>
                                </a>
                                <a className="btn btn-lg custom-btn btn-lg-square rounded-circle" href="#">
                                    <i className="bi bi-instagram"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="d-inline-block custom-btn text-uppercase border-bottom border-5 border-secondary mb-4">
                                Newsletter
                            </h4>
                            <form action="">
                                <div className="input-group">
                                    <input type="text" className="form-control p-3 border-0" placeholder="Your Email Address" />
                                    <button className="btn custom-btn ">Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="container-fluid bg-dark text-light border-top border-secondary py-4">
                    <div className="container">
                    <div className="row g-5">
                        <div className="col-md-6 text-center text-md-start">
                        <p className="mb-md-0">
                            ©{" "}
                            <a className="custom-btn" href="#">
                           MyHospital
                            </a>
                            . Tous droits reservé.
                        </p>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                        <p className="mb-0">
                            Designed by{" "}
                            <a className="custom-btn" href="https://htmlcodex.com">
                            Myhospital Developer
                            </a>
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <a href="#" className="btn btn-lg custom-btn btn-lg-square back-to-top">
                <i className="bi bi-arrow-up" />
            </a>
        </>
    );
}



export default Footer;