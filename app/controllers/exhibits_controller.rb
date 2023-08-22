class ExhibitsController < ApplicationController
    skip_before_action :authorize, only: [:index, :destroy]
    wrap_parameters format: []

    def index
        exhibits = Exhibit.all
        render json: exhibits, include: ['photographers', 'photos', 'photos.photographer'], status: :ok
    end

    def create
        exhibit = Exhibit.create!(exhibit_params)
        render json: exhibit, include: ['photographers', 'photos', 'photos.photographer'], status: :created
    end

    def destroy
        photo = Exhibit.find_by(id: params[:id])
        if photo
            photo.destroy
            render json: {}, head: :no_content
        else
            render_not_found_response
        end
    end

    private

    def exhibit_params
        params.permit(:name, :location, :date)
    end

    def render_not_found_response
        render json: {error: "Exhibit Not Found"}, status: :not_found
    end
end
