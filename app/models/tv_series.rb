class TvSeries < ApplicationRecord
	has_many :reviews, dependent: :destroy
end
