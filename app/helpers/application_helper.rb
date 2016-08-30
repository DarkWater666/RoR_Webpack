module ApplicationHelper
  def hand_device?
    browser.device.tablet? || browser.device.mobile?
  end

  def asset_folder
    hand_device? ? 'mobile' : 'desktop'
    'desktop'
  end

  def main_site_url
    return root_url(subdomain: false) if request.subdomain.present?
    current_page?(root_path) ? '#' : root_path
  end

  def meta_resource(title: default_meta_title, description: default_meta_title, keywords: default_meta_title)
    @meta_resource = OpenStruct.new(
      meta_title: title,
      meta_description: description,
      meta_keywords: keywords
    )
  end

  # def settings
  #   @settings ||= OpenStruct.new(
  #     Hash[
  #       Setup.pluck(:var, :val)
  #         .map { |k, v| [k.to_sym, v] }
  #     ]
  #   )
  # end

  def meta_title
    return content_for(:title) if content_for?(:title)
    # return settings.meta_title if settings.meta_title.present?
    # Figaro.env.title
    'Rails App'
  end

  def meta_description
    content_for?(:description) ? content_for(:description) : settings.meta_description
  end

  def meta_keywords
    content_for?(:keywords) ? content_for(:keywords) : settings.meta_keywords
  end

  def meta_url
    content_for?(:url) ? "http://#{Figaro.env.host}#{content_for(:url)}" : "http://#{Figaro.env.host}"
  end

  private

  def default_meta_title
    Figaro.env.title
  end
end
