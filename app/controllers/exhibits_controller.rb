class ExhibitsController < ApplicationController

    def index
        exhibits = Exhibit.all
        render json: exhibits, status: :ok
    end
end
