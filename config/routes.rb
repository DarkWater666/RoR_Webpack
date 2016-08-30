Rails.application.routes.draw do
  root controller: :front, action: :index
  get "/*path" => "front#index"
end
