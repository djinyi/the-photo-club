class ExhibitsController < ApplicationController

    def index
        exhibits = Exhibit.all
        render json: exhibits, status: :ok
    end

    def create
        exhibit = Exhibit.create!(exhibit_params)
        render json: exhibit, status: :created
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
end
