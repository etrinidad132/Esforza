class Api::UsersController < ApplicationController
    ## For testing purposes only
    skip_before_action :verify_authenticity_token
    ##

    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password)
    end
end
