class PostsController < ApplicationController
  def index
    respond_to do |f|
      f.html
      f.json { render json: Post.all }
    end
  end
end
