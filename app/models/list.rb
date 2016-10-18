# List is a Todo list that have name and contains many items
class List < ApplicationRecord
  validates :name, presence: true
  belongs_to :owner, class_name: 'User', inverse_of: :lists
  has_many :items, dependent: :destroy
end
