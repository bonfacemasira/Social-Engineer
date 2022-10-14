class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :image, :status, :location, :user_id
end
