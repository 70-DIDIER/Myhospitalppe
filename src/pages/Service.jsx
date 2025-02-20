export default function Service(){
    return(
        <>
           <>
  <div className="container-fluid py-5">
    <div className="container">
      <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
        <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
          Services
        </h5>
        <h1 className="display-4">Excellents services médicaux</h1>
      </div>
      <div className="row g-5">
        <div className="col-lg-4 col-md-6">
          <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div className="service-icon mb-4">
              <i className="fa fa-2x fa-ambulance text-white"/>
            </div>
            <h4 className="mb-3">
              Urgences médicales
            </h4>
            <p className="m-0">
              Contactez rapidement les hôpitaux ou cliniques les plus proches pour une intervention immédiate. Notre système de géolocalisation vous aide à identifier les établissements disponibles en temps réel.
            </p>
            <a className="btn btn-lg btn-primary rounded-pill" href="">
              <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div className="service-icon mb-4">
              <i className="fa fa-2x fa-stethoscope text-white" />
            </div>
            <h4 className="mb-3">Consultation en ligne</h4>
            <p className="m-0">
              Accédez à des consultations médicales depuis chez vous. Échangez avec des professionnels de santé pour un diagnostic rapide et des conseils adaptés.
            </p>
            <a className="btn btn-lg btn-primary rounded-pill" href="">
              <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div className="service-icon mb-4">
              <i className="fa fa-2x fa-calendar text-white" />
            </div>
            <h4 className="mb-3">
              Prise de rendez-vous
            </h4>
            <p className="m-0">
              Gagnez du temps en planifiant vos consultations auprès des médecins, spécialistes ou établissements de votre choix en quelques clics.
            </p>
            <a className="btn btn-lg btn-primary rounded-pill" href="">
              <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div className="service-icon mb-4">
              <i className="fa fa-2x fa-house text-white" />
            </div>
            <h4 className="mb-3">Médécine à domicile</h4>
            <p className="m-0">
              Besoin d’une visite médicale à domicile ? MyHospital vous aide à localiser et à contacter des médecins disponibles pour se déplacer chez vous.
            </p>
            <a className="btn btn-lg btn-primary rounded-pill" href="">
              <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div className="service-icon mb-4">
              <i className="fa fa-2x fa-pills text-white" />
            </div>
            <h4 className="mb-3">
              Pharmacie de garde
            </h4>
            <p className="m-0">
              Identifiez rapidement les pharmacies ouvertes 24h/24 et 7j/7 pour obtenir vos médicaments en toute urgence.
            </p>
            <a className="btn btn-lg btn-primary rounded-pill" href="">
              <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div className="service-icon mb-4">
              <i className="fa fa-2x fa- fa-map-location-dot text-white" />
            </div>
            <h4 className="mb-3">Hôpital / Clinique à proximité</h4>
            <p className="m-0">
              Trouvez facilement les centres de santé proches de vous grâce à une carte interactive. Finis les pertes de temps en situation d’urgence.
            </p>
            <a className="btn btn-lg btn-primary rounded-pill" href="">
              <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Services End */}
</>

        
        </>
    )
}