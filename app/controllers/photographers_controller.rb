class PhotographersController < ApplicationController
    wrap_parameters format: []

    def index
        photographers = Photographer.all
        render json: photographers, status: :ok
    end

    def show 
        photographer = Photographer.find(params[:id])
        render json: photographer, status: :ok
    end

    def create 
        photographer = Photographer.create(photographer_params)
        render json: photographer, status: :created
    end

    def update
        photographer = Photographer.find_by(id: params[:id])
        if photographer
            photographer.update(photographer_params)
            render json: photographer, status: :accepted
        else
            render json: {error: "Photographer Not Found"}, status: :not_found
        end
    end


    def destroy
        photographer = Photographer.find_by(id: params[:id])
        if photographer
            photographer.destroy
            head :no_content
        else 
            render json: {error: "Photographer Not Found"}, status: :not_found
        end
    end

    private

    def photographer_params 
        params.permit(:name, :year)
    end

end
