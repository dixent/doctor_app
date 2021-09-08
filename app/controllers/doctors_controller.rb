class DoctorsController < ApplicationController
  DEFAULT_CITY = 'Sevilla'.freeze

  before_action :authenticate_user!

  def index; end
end
