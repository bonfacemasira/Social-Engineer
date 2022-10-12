class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :email, :licence_number, :contact, :experience, :password_digest
end
