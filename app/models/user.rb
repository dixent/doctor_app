class User < ApplicationRecord
  ROLES = %w[Patient Doctor].freeze
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  belongs_to :roleable, polymorphic: true

  def doctor?
    roleable_type == 'Doctor'
  end

  def patient?
    roleable_type == 'Patient'
  end
end
