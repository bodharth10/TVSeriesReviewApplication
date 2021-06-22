# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'csv'
require 'activerecord-import'


CSV.foreach(Rails.root.join('lib/tv_series.csv'), headers: true) do |row|
  check_duplicate = TvSeries.where(tv_series: row[0])
  unless check_duplicate.present?
    TvSeries.create({
      tv_series: row[0],
      genre: row[1],
      no_of_seasons: row[2],
      date_of_first_release: row[3],
      director: row[4],
      actor: row[5],
      shoot_location: row[6],
      country: row[7]
    })
  end 
end




lists_hash = TvSeries.all.pluck(:tv_series, :id).to_h
items = []
CSV.foreach(Rails.root.join('lib/reviews.csv'), headers: true) do |row|
  tv_series_id = lists_hash[row["TV Series"]]
  items << { tv_series_id: tv_series_id, tv_series: row[0], user: row[1], stars: row[2], review: row[3]}
end
Review.import(items)
