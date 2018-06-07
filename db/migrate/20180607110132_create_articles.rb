class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.string :source
      t.string :author
      t.text :description
      t.text :url
      t.text :urlToImage
      t.belongs_to :category, index: true, foreign_key: true
      t.belongs_to :country, index: true, foreign_key: true

      t.timestamps
    end
  end
end
