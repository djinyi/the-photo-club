class PhotosController < ApplicationController
    wrap_parameters format: []

    def index
        photos = Photo.all
        render json: photos, status: :ok
    end

    def show
        photo = find_photo
        if photo
            render json: photo, status: :ok
        else
            render json: {error: "Photo Not Found"}, status: :not_found
        end
    end

    def create
        photo = Photo.create(photo_params)
        render json: photo, status: :created
    end

    def update
        photo = find_photo
        if photo
            photo.update(photo_params)
            render json: photo, status: :ok
        else
            render json: {error: "Bird Not Found"}, status: :not_found
        end
    end

    def destroy
        photo = find_photo
        if photo
            photo.destroy
            render json: {}, head: :no_content
        else
            render json: {error: "Photo Not Found"}, status: :not_found
        end
    end


    private

    def photo_params
        params.permit(:image_url, :title, :year, :description, :medium)
    end

    def find_photo
        Photo.find_by(id: params[:id])
    end


end
