Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'registrations/registrations' }

  devise_scope :user do
    authenticated do
      resources :patients, only: %i[index]
      resources :doctors, only: %i[index]

      root 'home#index', as: :authenticated_root
    end

    unauthenticated do
      root 'devise/sessions#new'
    end
  end
end
