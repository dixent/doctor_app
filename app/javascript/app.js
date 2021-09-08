import Rails         from '@rails/ujs'
import Turbolinks    from 'turbolinks'
import { RalixApp }  from 'ralix'

// Controllers
import UsersCtrl     from 'controllers/users'
import DoctorsCtrl     from 'controllers/doctors'

import * as Templates from 'templates'

const App = new RalixApp({
  rails_ujs: Rails,
  routes: {
    '/users': UsersCtrl,
    '/doctors': DoctorsCtrl
  },
  templates: Templates
})

Rails.start()
Turbolinks.start()
App.start()
