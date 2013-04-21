class Api::RegistrationsController < Api::BaseController
  
  respond_to :json

  def create
    user = User.new(params['user'])
    if user.save
      user.reset_authentication_token!
      render :json => { :user => { :auth_token => user.authentication_token, :email => user.email }}, :status=>200
      return
    else
      warden.custom_failure!
      render :json=> user.errors, :status=>422
    end
  end
end
