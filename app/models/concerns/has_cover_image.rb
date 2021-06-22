module HasCoverImage
  extend ActiveSupport::Concern

  included do
    has_one_attached :cover_image
  end

  def fetch_cover_image
    if self.cover_image.attached?
      Rails.application.routes.url_helpers.rails_blob_url(self.cover_image, host: Rails.application.credentials[Rails.env.to_sym][:host])
    else
      begin
        ActionController::Base.helpers.image_url("defaults/#{self.class.name.underscore}_cover_image.jpg")
      rescue
        ActionController::Base.helpers.image_url("defaults/user_cover_image.jpg")
      end
    end
  end

end
