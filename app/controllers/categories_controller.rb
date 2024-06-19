class CategoriesController < ApplicationController
  def show
    @category = Category.find(params[:id])
    @product = @category.products
    @product = @product.where('price <= ?', params[:max]) if params[:max].present?
    return unless params[:min].present?

    @product = @product.where('price >= ?', params[:min])
  end
end
