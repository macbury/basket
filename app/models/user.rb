# This model defines user in system.
class User < ApplicationRecord
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable
  has_many :lists, dependent: :destroy, inverse_of: :owner
  has_many :items, through: :lists
end
