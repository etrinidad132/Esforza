class Api::UsersController < ApplicationController
    ## For testing purposes only
    skip_before_action :verify_authenticity_token
    ##

    def index
        @users = User.all
        render "api/users/index"
    end

    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages
        end
    end

    def update
        @user = User.find(params[:id])
        # debugger
        if @user.update(user_params)
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages
        end
        
    end

    def show
      @user = User.find(params[:id])
      render 'api/users/show'
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :fname, :lname, :birthday, :gender, :location)
    end
end
