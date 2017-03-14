class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render "api/users/show"
    else
      render(
        json: ["Surfer, your username or password is incorrect. Try again."],
        status: 401
      )
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render(
        json: ["There's no surfer to log out."],
        status: 404
      )
    end
  end
end
