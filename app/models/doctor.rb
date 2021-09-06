class Doctor < ApplicationRecord
  has_one :user, as: :roleable
end
