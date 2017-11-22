class SearchHistory < ActiveRecord::Base
  validates :name, :count, presence: true
end
