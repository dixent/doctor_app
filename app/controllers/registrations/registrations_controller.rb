# frozen_string_literal: true

class Registrations::RegistrationsController < Devise::RegistrationsController
  def create
    ActiveRecord::Base.transaction do
      roleable_type = params[:user].delete(:roleable_type)
      role = create_role(roleable_type)

      build_resource(sign_up_params.merge(roleable_id: role.id, roleable_type: roleable_type))
      super
    end
  end

  private

  def role_params
    params[:user][:roleable]
  end

  def build_resource(hash = {})
    self.resource ||= resource_class.new_with_session(hash, session)
  end

  def create_role(roleable_type)
    klass = roleable_type.constantize

    case roleable_type
    when 'Patient'
      role = klass.create(params[:user].require(:roleable).permit(:full_name))
      role.images.attach(params[:user][:roleable][:images])
      role
    when 'Doctor'
      klass.create(params[:user].require(:roleable).permit(:full_name, :lon, :lat))
    end
  end
end
