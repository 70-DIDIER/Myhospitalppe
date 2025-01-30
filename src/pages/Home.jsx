import backgroundImage from '../assets/background.jpg'; // Assurez-vous que le chemin est correct

function Home() {
    const pageStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        color: 'white'
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1
    };

    const contentStyle = {
        position: 'relative',
        zIndex: 2
    };

    return (
        <div style={pageStyle}>
            <div style={overlayStyle}></div>
            <div style={contentStyle}>
                <div className="container-fluid py-5 mb-5 hero-header">
                    <div className="container py-5">
                        <div className="row justify-content-start">
                            <div className="col-lg-8  text-lg-start">
                                <h3 style={{ fontSize: "35px", fontWeight:"bold"}}>Bienvenu sur MyHospital votre application de localisation des services de santé</h3>
                                <p>Vous pouvez rechercher les services de santé les plus proches de votre position géographique</p>
                                <p>Prenez rendez vous avec un medecin qualifié pour vos consultation</p>  
                                <div className="pt-2">
                                    <a style={{ backgroundColor: "#0077B6" }}
                                        href=""
                                        className="btn btn-light rounded-pill py-md-3 px-md-5 mx-2"
                                    >
                                        Pharmacie de Garde
                                    </a>
                                    <a style={{ backgroundColor: "#0077B6" , color: "#000000", fontWeight: "bold" }}
                                        href=""
                                        className="btn btn-outline-light rounded-pill py-md-3 px-md-5 mx-2"
                                    >
                                        Hopital
                                    </a>
                                    <a style={{ backgroundColor: "#0077B6" , color: "#000000", fontWeight: "bold" }}
                                        href=""
                                        className="btn btn-outline-light rounded-pill py-md-3 px-md-5 mx-2"
                                    >
                                        Prendre rendez-vous
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;