class Api::UsersController < ApplicationController
  
  wrap_parameters format: []
  def index
    user=User.all
    render json: user
  end
    
        def show
            user = User.find_by(id: session[:user_id])
            if user
              render json: user, serializer:UserSerializer
            else
              render json: { error: "Not authorized" }, status: :unauthorized
            end
        end 
        
            def create
                user = User.create(user_params)
                if user.valid?
                    session[:user_id] = user.id
                    render json: user, status: :created
                else
                  render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
                end
              end
        
              private
        
              def user_params
                params.permit( :full_name,:email,:license_number,:contact,:experience, :password,  :password_confirmation)
              end
end
