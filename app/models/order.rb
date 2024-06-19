class Order < ApplicationRecord
  has_many :order_products, dependent: :destroy
  validates :total, numericality: { greater_than_or_equal_to: 0 }
end
