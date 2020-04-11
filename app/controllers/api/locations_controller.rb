class Api::LocationsController < ApplicationController
    def index
        @locations = Location.all
        render "api/locations/index"
    end
    
    def show
        @location = Location.find(params[:id])
        render "api/locations/show"
    end

    def create
        @location = Location.new(location_params)

        if @location.save
            render "api/locations/show"
        else
            render json: @location.errors.full_messages, status: 422
        end
    end
    
    def update
        # debugger
        if current_user
            @location = current_user.routes.locations.find(params[:id])
        else
            @location = Location.find(params[:id])
        end
        
        if @location.update(location_params)
            render "api/locations/show"
        else
            render json: @location.errors.full_messages, status: 422
        end

    end

    def destroy
        @location = Location.find(params[:id])
        if @location.destroy
            render json: {}
        else
            render json: ["Location does not exist!"], status: 404
        end
    end

    private

    def location_params
        params.require(:location).permit(:route_id, :sequence, :lat, :lng)
    end
end