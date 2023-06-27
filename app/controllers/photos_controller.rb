class PhotosController < ApplicationController
    wrap_parameters format: []

    def index
        photos = Photo.all
        render json: photos
    end

    def show
        photo = Photo.find(params[:id])
        render json: photo, status: :ok
    end

    def create
        photo = Photo.create(photo_params)
        render json: photo, status: :created
    end

    private

    def photo_params
        params_permit(:image_url, :title, :year, :description, :medium)
    end

end
