class CreateOrderProducts < ActiveRecord::Migration[7.1]
  def change
    create_table :order_products, id: :uuid do |t|
      t.references :product, null: false, foreign_key: true, type: :uuid
      t.references :order, null: false, foreign_key: true, type: :uuid
      t.string :size
      t.integer :quantity

      t.timestamps
    end
  end
end
