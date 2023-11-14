import './_map.scss'
// import map from '../../../src/assets/images/map.png'
  

function Map() {
  return (
    <section className="map">
        <div className="container">
            {/* <img className="map-img" src={map} alt="map" /> */}
            <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1514.4326769696363!2d69.26034688501355!3d41.29612230737169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b27d4f3a9d9%3A0x3307ce9410fe0956!2sPlatinum%20airlines!5e1!3m2!1sru!2sus!4v1697287282329!5m2!1sru!2sus"
        width="100%"
        height="400px"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
        </div>
    </section>
  )
}

export default Map