class Act < ApplicationRecord
  belongs_to :script
  has_many :scenes, dependent: :destroy
end
