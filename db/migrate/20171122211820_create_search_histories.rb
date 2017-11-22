class CreateSearchHistories < ActiveRecord::Migration
  def change
    create_table :search_histories do |t|
      t.string :name, null: false
      t.integer :count, null: false

      t.timestamps null: false
    end
  end
end
