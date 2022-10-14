class Api::ProjectsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_error
wrap_parameters format: []
before_action :authenticate
skip_before_action :authenticate, only: [:show, :index]

    def index
        render json: Project.all, status: :ok
    end

    def show
        project = find_project
        render json: project, status: :ok
    end

    def create
        user = User.find_by(id: session[:user_id])
        project = user.projects.create!(project_params)
        render json: project, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: {errors: invalid.record.errors}
    end

    def update
        project = find_project
        project.update!(project_params)
        render json: project, status: :ok
    end

    def destroy
        project = find_project
        project.destroy!
        head :no_content
    end

    private

    def find_project
        Project.find_by!(id: params[:id])
    end

    def project_params
        params.permit(:id, :title, :description, :image, :status, :location)
    end

    def render_not_found_error
        render json: {error: "Project Not Found"}, status: :not_found
    end

    def authenticate
        render json: {errors: ["You are not logged in"]}, status: 401 unless session.include? :user_id
    end
end
