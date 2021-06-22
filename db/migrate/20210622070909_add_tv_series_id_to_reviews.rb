class AddTvSeriesIdToReviews < ActiveRecord::Migration[6.0]
  def change
    add_column :reviews, :tv_series_id, :integer
  end
end
