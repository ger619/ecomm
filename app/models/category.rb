class Category < ApplicationRecord
  has_one_attached :image do |attachable|
    attachable.variant :thumb, resize: '50x50'
    attachable.variant :medium, resize: '300x300'
  end
  has_rich_text :content

  has_many :products, dependent: :destroy
end
