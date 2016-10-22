source 'https://rubygems.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.0.0', '>= 5.0.0.1'
# Use postgresql as the database for Active Record
gem 'pg', '~> 0.18'
# Use Puma as the app server
gem 'puma', '~> 3.0'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'

# Place all gems for authorization and authentication here
group :auth do
  gem 'devise'
end

# Place all gems with assets here
group :assets do
  gem 'react_on_rails', '~> 6'
  gem 'therubyracer'
end


group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platform: :mri
  gem 'shoulda'
  gem 'factory_girl_rails'
  gem 'rspec-rails'
  gem 'guard-rspec'
  gem 'pry-rails'
end

group :test do
  gem 'database_cleaner'
  gem 'capybara'
  gem 'poltergeist', '1.9.0'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console'
  gem 'listen', '~> 3.0.5'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
