class Api::RoutesController < ApplicationController
    # resources :routes, only: [:index, :show, :create, :update, :destroy]
    def index
        # For Testing
        # debugger
        if current_user
            @routes = current_user.routes
        else
            @routes = Route.all
        end
        #
        # @routes = Route.all

        render "api/routes/index"
    end

    def show
        @route = Route.find(params[:id])
    end

    def create
        # debugger
         @route = Route.new(route_params)

        if @route.save
            render "api/routes/show"
        else
            render json: @route.errors.full_messages
        end
    end

    def update
        @route = Route.find(params[:id])
        # debugger
        if @route.update(route_params)
            render "api/routes/show"
        else
            render json: @route.errors.full_messages
        end
        
    end

    def destroy
        @route = Route.find(params[:id])
        if @route.destroy
            render json: {}
        else
            render json: ["Route does not exist!"], status: 404
        end
    end

    private

    def route_params
        params.require(:route).permit(:user_id, :name, :description, :distance, :time, :elevation, :activity_type, :route_type)
    end
end