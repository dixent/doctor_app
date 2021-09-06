import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiZGl4ZW50IiwiYSI6ImNrOHJpNXN5OTAyejAzbXBtYWRzOTF3MDIifQ.nJkYf9ep7wQad5bTK71ocQ';

export default class UsersCtrl {
  constructor() {
    this.patientForm = $('#patient-form')
    this.doctorForm = $('#doctor-form')
    this.select = $('#role_select')
    this.map = new mapboxgl.Map({
      container: 'doctor-location',
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 0
    })
    this.initializeMap()
  }

  initializeMap() {
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
      $('#lon').val(e.coords.longitude)
      $('#lat').val(e.coords.latitude)
    });
  }

  changeRoleForm() {
    var selected = this.select.val();

    if(selected === 'Patient') {
      this.patientForm.show()
      this.doctorForm.hide()
    } else if (selected === 'Doctor') {
      this.doctorForm.show()
      this.patientForm.hide()
      this.map.resize()
    }
  }
}
