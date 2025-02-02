function Pharmacie() {
    return (
      <div style={styles.container}>
        {/* En-tête */}
        <h1 style={styles.mainTitle}>PHARMACIES DE GARDE</h1>
        
        {/* Section principale */}
        <div style={styles.content}>
          <h2 style={styles.pharmacyName}>Pharmacie GPIOUP C</h2>
          
          {/* Section de fiche */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Fiche de pharmacie</h3>
            {/* Ajouter ici le contenu supplémentaire si nécessaire */}
          </div>
        </div>
      </div>
    );
  }
  
  const styles = {
    container: {
      maxWidth: '600px',
      margin: '20px auto',
      backgroundColor: '#f5f5f5',
      borderRadius: '10px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    },
    mainTitle: {
      color: '#c62828',
      textAlign: 'center',
      borderBottom: '2px solid #c62828',
      paddingBottom: '10px',
      marginBottom: '20px',
      fontSize: '1.8em'
    },
    content: {
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '15px'
    },
    pharmacyName: {
      color: '#2c3e50',
      fontSize: '1.4em',
      marginBottom: '15px',
      fontWeight: 'bold'
    },
    section: {
      border: '1px solid #ddd',
      borderRadius: '6px',
      padding: '10px',
      marginTop: '10px'
    },
    sectionTitle: {
      color: '#7f8c8d',
      fontSize: '1.1em',
      marginBottom: '8px',
      fontWeight: '600'
    }
  };
  
  export default Pharmacie;