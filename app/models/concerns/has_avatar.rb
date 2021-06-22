module HasAvatar
  extend ActiveSupport::Concern

  included do
    has_one_attached :avatar
  end

  def fetch_avatar
    if self.avatar.attached?
      Rails.application.routes.url_helpers.rails_blob_url(self.avatar, host: Rails.application.credentials[Rails.env.to_sym][:host])
    else
      begin
        ActionController::Base.helpers.image_url("defaults/#{self.class.name.underscore}_avatar.png")
      rescue
        ActionController::Base.helpers.image_url("defaults/user_avatar.png")
      end
    end
  end

end
