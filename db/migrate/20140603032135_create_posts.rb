class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.text :description
      t.date :date
      t.string :image

      t.timestamps
    end
  end
end
