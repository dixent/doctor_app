class HomeController < ApplicationController
  before_action :authenticate_user!

  def index
    case current_user.roleable_type
    when 'Doctor'
      redirect_to patients_url
    when 'Patient'
      redirect_to doctors_url
    end
  end
end
