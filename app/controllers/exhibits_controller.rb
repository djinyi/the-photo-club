class ExhibitsController < ApplicationController

    def index
        exhibits = Exhibit.all
        render json: exhibits, except: [:created_at, :updated_at], status: :ok
    end
end
