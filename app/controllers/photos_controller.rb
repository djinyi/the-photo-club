class PhotosController < ApplicationController
    wrap_parameters format: []

    def index
        photos = Photo.all
        render json: photos, except: [:created_at, :updated_at], status: :ok
    end

    def show
        photo = find_photo
        if photo
            render json: photo, except: [:created_at, :updated_at], status: :ok
        else
            render_not_found_response
        end
    end

    def create
        photo = Photo.create(photo_params)
        render json: photo, except: [:created_at, :updated_at], status: :created
    end

    def update
        photo = find_photo
        if photo
            photo.update(photo_params)
            render json: photo, except: [:created_at, :updated_at], status: :ok
        else
            render_not_found_response
        end
    end

    def destroy
        photo = find_photo
        if photo
            photo.destroy
            render json: {}, head: :no_content
        else
            render_not_found_response
        end
    end


    private

    def photo_params
        params.permit(:image_url, :title, :year, :description, :medium)
    end

    def find_photo
        Photo.find_by(id: params[:id])
    end

    def render_not_found_response
        render json: {error: "Photo Not Found"}, status: :not_found
    end


end
