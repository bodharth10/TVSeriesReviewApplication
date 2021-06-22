class TvSeriesSerializer < ApplicationSerializer
  set_type 'TvSeries'

  attributes :tv_series , :country , :genre, :no_of_seasons, :date_of_first_release, :director, :actor, :shoot_location


  attribute :rating do |ts|
  	stars = ts.reviews.pluck(:stars).inject(0, :+)
  	count = ts.reviews.count
  	average = stars / count
  end 	
end
