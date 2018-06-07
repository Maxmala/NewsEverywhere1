class CreateJoinTableCountriesUsers < ActiveRecord::Migration[5.2]
  def change
    create_join_table :countries, :users do |t|
      t.index [:country_id, :user_id]
      t.index [:user_id, :country_id]
    end
  end
end
