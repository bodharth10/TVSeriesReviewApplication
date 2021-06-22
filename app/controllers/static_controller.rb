class StaticController < ApplicationController
  def home
    @tv_series = TvSeries.includes(:reviews)
  end
end
