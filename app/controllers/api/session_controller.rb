class Api::SessionController < ApplicationController
    ## For testing purposes only
    skip_before_action :verify_authenticity_token
    ##

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user
            login(@user)
            render "api/users/show"
        else
            render json: ["Incorrect Username or Password!"]
        end
    end

    def destroy
        if current_user
            logout
             #   render json: {message: "Logout Successful!"}
            render json: {}
        else
            render json: ["No User is Logged in"], status: 404
        end
    end

end
