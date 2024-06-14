class RemoveDescriptionFromCategory < ActiveRecord::Migration[7.1]
  def change
    remove_column :categories, :description, :text
  end
end
