class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :set_current_user



end
