class User < ApplicationRecord
    has_secure_password

    validates :email, :full_name, :license_number, presence: true
    validates :email, uniqueness: true
end
