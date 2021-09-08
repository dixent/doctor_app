class Patient < ApplicationRecord
  has_many_attached :images do |image|
    image.variant :thumb, resize: '200x200'
  end
end
