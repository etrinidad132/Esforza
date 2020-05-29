class Api::WorkoutsController < ApplicationController
#   resources :workouts, only: [:index, :show, :create, :update, :destroy]
    def index
        if current_user
            @workouts = current_user.workouts
        else
            @workouts = Workout.all
        end

        render "api/workouts/index"
    end

    def show
        @workout = Workout.find(params[:id])
    end

    def create
        @workout = Workout.new(workout_params)

        if @workout.save
            render "api/workouts/show"
        else
            render json: @workout.errors.full_messages
        end

    end

    def update
        @workout = Workout.find(params[:id])

        if @workout.update(workout_params)
            render "api/workouts/show"
        else
            render json: @workout.errors.full_messages
        end
    end

    def destroy
        @workout = Workout.find(params[:id])

        if @workout.destroy
            render "api/workouts/show"
        else
            render json: ["Workout does not exist!"]
        end
    end

    private
    
    def workout_params
        params.require(:workout).permit(:user_id, :name, :description, :distance, :time, :elevation, :activity_type, :date_created)
    end
end
