class ResourcesController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    render json: Resource.all
  end

  def create
    tags = []
    if (params[:tags] != nil && params[:tags].length > 0)
      tagStrings = params[:tags].split(',')

      tagStrings.each do |tagStr|
        tags << Tag.new({name: tagStr})
      end

    end
    
    Resource.create(link: params[:url], title: params[:title], description: params[:description], tags: tags, type: generate_type(params[:url]))

    render json: [], status: :created
  end

  def search
    term = params[:term]
    matching_tags = Resource.joins(:tags).where(tags: Tag.where("name like ?", "%#{term}%")).distinct
    matching_resources = Resource.where("title like ? or description like ?", "%#{term}%", "%#{term}%")


    render json: (matching_tags + matching_resources).uniq
  end

  private

  def generate_type(link)
    type = Resource::TYPE[:web]

    if (link.contains "learning.flatironschool.com")
      type = Resource::TYPE[:flatiron]
    end

    type
  end

end