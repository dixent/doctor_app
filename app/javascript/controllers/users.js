import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from '!mapbox-gl'

export default class UsersCtrl {
  constructor() {
    this.initializeMap()
  }

  initializeMap() {
    mapboxgl.accessToken = attr('#doctor-location', 'token')

    this.map = new mapboxgl.Map({
      container: 'doctor-location',
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 0
    })
    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
        trackUserLocation: true,
        showUserHeading: true
      });
    this.map.addControl(geolocate);
    this.map.on('load', () => {
      geolocate.trigger()
      this.map.resize()
    });
    geolocate.on('geolocate', (e) => {
      data('#lon', { value: e.coords.longitude })
      data('#lat', { value: e.coords.latitude })
    });
  }

  changeRoleForm() {
    switch(currentElement().value) {
      case 'Patient':
        show('#patient-form')
        hide('#doctor-form')
        break
      case 'Doctor':
        show('#doctor-form')
        hide('#patient-form')
        this.map.resize()
        break
    }
  }
}
