require 'rails_helper'

RSpec.describe List, type: :model do
  it { should validate_presence_of(:name) }
  it { should belong_to(:owner).class_name('User') }
  it { should have_many(:items) }
end
