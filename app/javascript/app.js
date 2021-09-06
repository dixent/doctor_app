// Dependencies
import Rails         from '@rails/ujs'
import Turbolinks    from 'turbolinks'
import { RalixApp }  from 'ralix'

// Controllers
// import AppCtrl       from 'controllers/app'
// import DashboardCtrl from 'controllers/dashboard'
import UsersCtrl     from 'controllers/users'

// Components with auto-start on each DOM load event (turbolinks:load or DOMContentLoaded)
// import Modal         from 'components/modal'
// import Tooltip       from 'components/tooltip'

const App = new RalixApp({
  rails_ujs: Rails,
  routes: {
    '/users':     UsersCtrl,
  },
  // components: [Modal, Tooltip]
})

Rails.start()
Turbolinks.start()
App.start()
