class PatientsController < ApplicationController
  before_action :authenticate_user!

  def index
    @patients = policy_scope(Patient.all)
  end
end
