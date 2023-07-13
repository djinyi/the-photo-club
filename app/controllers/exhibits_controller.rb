class ExhibitsController < ApplicationController

    def index
        exhibits = Exhibit.all
        render json: exhibits, status: :ok
    end

    def create
        exhibit = Exhibit.create!(exhibit_params)
        render json: exhibit, status: :created
    end

    private

    def exhibit_params
        params.permit(:name, :location, :date)
    end
end
