# Item is one of thing to do in Todo list.
class Item < ApplicationRecord
  validates :name, presence: true
  belongs_to :list, touch: true
end
