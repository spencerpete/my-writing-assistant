class Script < ApplicationRecord
  belongs_to :user
  has_many :acts, dependent: :destroy 
  has_many :characters, dependent: :destroy
end
