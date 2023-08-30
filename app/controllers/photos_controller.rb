class PhotosController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    wrap_parameters format: []
    skip_before_action :authorize, only: [:index, :show]

    def index
        photos = Photo.all
        render json: photos, include: :photographer, status: :ok
    end

    def show
        photo = find_photo
        if photo.user.match?(@current_user)
            render json: photo, status: :ok
        else
            render_not_found_response
        end
    end

    def create
        photo = @current_user.photos.create!(photo_params)
        render json: photo, status: :created
    end

    def update
        photo = find_photo
        if photo
            photo.update!(photo_params)
            render json: photo, status: :ok
        else
            not_authorized
        end
    end

    def destroy
        photo = find_photo
        if photo
            photo.destroy
            render json: {}, head: :no_content
        else
            not_authorized
        end
    end


    private

    def photo_params
        params.permit(:image_url, :title, {:title => []}, :year, :description, :medium, :photographer_id, :exhibit_id)
    end

    def find_photo
        @current_user.photos.find_by(id: params[:id])
    end

    def render_not_found_response
        render json: {error: "Photo Not Found"}, status: :not_found
    end
    
    def not_authorized
        render json: {errors: "Not authorized."}, status: :unprocessable_entity
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end



end
