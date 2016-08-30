Rails.application.routes.draw do

  # get "/*path" => "front#index"

  Rails.application.routes.draw do
    constraints subdomain: 'www' do
      get ':any', to: redirect(subdomain: nil, path: '/%{any}'), any: /.*/
    end

    ###############################################  CONCERNS  ###########################################################

    #################################################  AUTH  #############################################################

    #################################################  ADMIN  ############################################################

    ##################################################  API  #############################################################

    #################################################  FRONT  ############################################################

    root controller: :front, action: :index

    scope module: :front do
      Front::GetPages.each { |page| get page }
    end

    ################################################  DYNAMIC  ###########################################################

    #################################################  CABLE  ############################################################

    mount ActionCable.server, at: :cable

    #################################################  ERRORS  ###########################################################

    if Rails.env.production?
      scope module: :errors do
        Front::ErrorPages.each do |error, code|
          match error, via: :all
          get '*unmatched_route', action: error if code.is 404
        end
      end
    end
  end

end
