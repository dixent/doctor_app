# frozen_string_literal: true

class PatientPolicy < ApplicationPolicy
  def index?
    user.doctor?
  end
end
