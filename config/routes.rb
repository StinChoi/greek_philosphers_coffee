Rails.application.routes.draw do

  resourses :philos do
    resources :coffees
  end
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
