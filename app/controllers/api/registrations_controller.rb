class Api::RegistrationsController < Api::BaseController
  
  respond_to :json

  def create
    user = User.new(params['user'])
    if user.save
      user.reset_authentication_token!
      render :json => { :auth_token => user.authentication_token, :email => user.email }, :status=>201
      return
    else
      warden.custom_failure!
      render :json=> user.errors, :status=>422
    end
  end
end
