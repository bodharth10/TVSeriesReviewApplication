module Usernameable
  extend ActiveSupport::Concern

  included do
    has_one :username, dependent: :destroy
    accepts_nested_attributes_for :username
  end

  def fetch_username
    return self.username.try(&:name)
  end

end
