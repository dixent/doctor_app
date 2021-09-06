import Rails         from '@rails/ujs'
import Turbolinks    from 'turbolinks'
import { RalixApp }  from 'ralix'

// Controllers
import UsersCtrl     from 'controllers/users'

const App = new RalixApp({
  rails_ujs: Rails,
  routes: {
    '/users':     UsersCtrl,
  }
})

Rails.start()
Turbolinks.start()
App.start()
