class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.string :tv_series
      t.string :user
      t.integer :stars
      t.text :review

      t.timestamps
    end
  end
end
