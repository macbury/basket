# Base controller for all api controllers
class ApiController < ApplicationController
  respond_to :json
  before_action :authenticate_user!
end
