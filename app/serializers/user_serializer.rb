class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :email, :license_number, :contact, :experience
 
  has_many :projects
end
