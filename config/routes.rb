Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'

  namespace :api do 
    root 'recipes#landing'
    get '*path', to: 'recipes#landing'
    get '/recipes', to: 'recipes#search'
  end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
