class PhotographsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    wrap_parameters format: []
    skip_before_action :authorize, only: [:index, :show]

    def index
        photographs = Photograph.all
        render json: photographs, include: :user, status: :ok
    end

    def show
        photograph = find_photograph
        if photograph.user.match?(@current_user)
            render json: photograph, status: :ok
        else
            render_not_found_response
        end
    end

    def create
        photograph = @current_user.photographs.create!(photograph_params)
        render json: photograph, status: :created
    end

    def update
        photograph = find_photograph
        if photograph
            photograph.update!(photograph_params)
            render json: photograph, status: :ok
        else
            not_authorized
        end
    end

    def destroy
        photograph = find_photograph
        if photograph
            photograph.destroy
            render json: {}, head: :no_content
        else
            not_authorized
        end
    end


    private

    def photograph_params
        params.permit(:image_url, :title, {:title => []}, :year, :description, :medium, :user_id, :exhibit_id)
    end

    def find_photograph
        @current_user.photographs.find_by(id: params[:id])
    end

    def render_not_found_response
        render json: {error: "photograph Not Found"}, status: :not_found
    end
    
    def not_authorized
        render json: {errors: "Not authorized."}, status: :unprocessable_entity
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end



end
