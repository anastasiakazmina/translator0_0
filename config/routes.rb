Rails.application.routes.draw do
  root to: 'translator#index'
  get '/translate' => 'translator#translate'

  namespace :api, format: :json do
    resources :fxes
    get 'synthroom/index'
  end

  get 'synthroom/index'
  get 'welcome/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
