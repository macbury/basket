require 'factory_girl'

FactoryGirl.define do
  factory :user do
    sequence(:email) { |index| "email#{index+1000}@test.local" }
    password 'admin1234'
    password_confirmation 'admin1234'
  end
end
