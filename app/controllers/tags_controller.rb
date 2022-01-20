class TagsController < ApplicationController
    protect_from_forgery with: :null_session

    def search
        term = params[:term]
        render json: Tag.where("name like ?", "%#{term}%")
    end 
end