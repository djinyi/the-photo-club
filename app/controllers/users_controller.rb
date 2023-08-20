class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :created
        else
            record_error
        end
    end

    def show
        render json: @current_user
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

    def record_error
        render json: {errors: "Password can't be blank, Username can't be blank, Username is too short (minimum is 2 characters)"}, status: :unprocessable_entity
    end


end
