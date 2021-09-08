import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from '!mapbox-gl'
import mapboxSdk from '@mapbox/mapbox-sdk/services/geocoding'
import { data } from 'jquery';

mapboxgl.accessToken = 'pk.eyJ1IjoiZGl4ZW50IiwiYSI6ImNrOHJpNXN5OTAyejAzbXBtYWRzOTF3MDIifQ.nJkYf9ep7wQad5bTK71ocQ'

export default class DoctorsCtrl {
  constructor() {
    this.mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
  }

  search() {
    var query = currentElement().value

    if (query.length <= 0) return 0

    this.mapboxClient.forwardGeocode({
      query: query,
      limit: 5
    }).send()
      .then(response => {
        var object = JSON.parse(response.rawBody);
        this.updateOptions(object['features'])
      });
  }

  updateOptions(results) {
    var selectResults = results.map((result) => {
      return render('searchOption', { placeName: result['place_name'] })
    }).join('')

    clearSearchResults()
    insertHTML('#search-doctor-container', selectResults, 'end')
    on('li', 'click', this.selectOption)
  }

  selectOption(e) {
    currentElement().value = e.currentTarget.textContent
    clearSearchResults()
  }

  clearSearchResults() {
    find('#search-doctor-container').innerHTML = '';
  }
}
