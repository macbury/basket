# This file is copied to spec/ when you run 'rails generate rspec:install'
ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
# Prevent database truncation if the environment is production
abort("The Rails environment is running in production mode!") if Rails.env.production?
require 'spec_helper'
require 'rspec/rails'
require 'shoulda'
require 'devise'
require 'capybara/rspec'
require 'capybara/poltergeist'
require 'factory_girl'
require 'factory_girl_rails'
require 'database_cleaner'
require 'phantomjs'

Capybara.register_driver :poltergeist do |app|
  Capybara::Poltergeist::Driver.new(app, {
    js_errors: false,
    window_size: [1920, 1080],
    phantomjs: Phantomjs.path
  })
end

Capybara.javascript_driver = :poltergeist
Capybara.default_driver    = :poltergeist

Dir[Rails.root.join('spec/support/**/*.rb')].each { |f| require f }

ActiveRecord::Migration.maintain_test_schema!

RSpec.configure do |config|
  ReactOnRails::TestHelper.configure_rspec_to_compile_assets(config)
  config.fixture_path = "#{::Rails.root}/spec/fixtures"
  config.include Devise::Test::ControllerHelpers, type: :controller
  config.extend DeviseSupport::Controller, type: :controller
  config.extend DeviseSupport::Feature, type: :feature
  config.include Warden::Test::Helpers
  config.include FactoryGirl::Syntax::Methods
  config.use_transactional_fixtures = false
  config.infer_spec_type_from_file_location!
  config.filter_rails_from_backtrace!

  config.before(:suite) do
    Warden.test_reset!
    ScreenshotSupport.clean!
    DatabaseCleaner.strategy = :truncation
    DatabaseCleaner.start
  end

  config.after(:suite) do
    DatabaseCleaner.clean
  end

  config.after(:each) do |example|
    Warden.test_reset!
    if example.metadata[:type] == :feature
      if example.exception.present?
        ScreenshotSupport.failure!(page,example)
      else
        ScreenshotSupport.success!(page, example)
      end
    end
  end
end
