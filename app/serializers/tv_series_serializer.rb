class TvSeriesSerializer < ApplicationSerializer
  set_type 'TvSeries'

  attributes :tv_series , :country , :genre, :no_of_seasons, :date_of_first_release, :director, :actor, :shoot_location
end
