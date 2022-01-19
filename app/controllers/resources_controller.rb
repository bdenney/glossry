class ResourcesController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    render json: Resource.all
  end

  def create
    Resource.create(link: params[:url], title: params[:title], description: params[:description], tags: params[:tags])
    render json: [], status: :created
  end

  def search
    term = params[:term]
    # byebug
    render json: Resource.where("title like ? OR description like ? or tags like ?", "%#{term}%", "%#{term}%", "%#{term}%")
  end

  private

  def create_params
    # params.permit(:url, :title, :description, :tags)
  end

end