namespace :webpack do
  desc 'Compile and optimize assets for clientside'
  task compile: :environment do
    sh 'rm -rf app/assets/javascripts/client.* || true && npm run compile'
  end
end
