class PhotographersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    wrap_parameters format: []

    def index
        photographers = Photographer.all
        render json: photographers, include: ['photos', 'photos.exhibits'], status: :ok
    end

    def show 
        photographer = find_photographer
        if photographer
            render json: photographer, include: ['photos', 'photos.exhibits'], status: :ok
        else
            render_not_found_response
        end
    end

    def create 
        photographer = Photographer.create!(photographer_params)
        render json: photographer, status: :created
    end

    def update
        photographer = find_photographer
        if photographer
            photographer.update!(photographer_params)
            render json: photographer, status: :accepted
        else
            render_not_found_response
        end
    end


    def destroy
        photographer = find_photographer
        if photographer
            photographer.destroy
            head :no_content
        else 
            render_not_found_response
        end
    end

    private

    def photographer_params 
        params.permit(:name, :year)
    end

    def find_photographer
        Photographer.find_by(id: params[:id])
    end

    def render_not_found_response
        render json: {error: "Photographer Not Found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end


end
