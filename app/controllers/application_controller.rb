class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :set_current_user
  before_action :authorize

  def set_current_user
    Current.user = User.find_by(id: session[:user_id]) if session[:user_id]
  end


  def authorize
    @current_user = User.find_by(id: session[:user_id])

    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
  end


end
