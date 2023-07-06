class PhotosController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    wrap_parameters format: []

    def index
        if params[:photographer_id]
            photographer = Photographer(params[:photographer_id])
            photos = photographer.photos
        else
            photos = Photo.all
        end
        render json: photos, include: :photographer, status: :ok
    end

    def show
        photo = find_photo
        if photo
            render json: photo, status: :ok
        else
            render_not_found_response
        end
    end

    def create
        photo = Photo.create!(photo_params)
        render json: photo, status: :created
    end

    def update
        photo = find_photo
        if photo
            photo.update!(photo_params)
            render json: photo, status: :ok
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

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end


end
