module FrontHelper
  include ApplicationHelper
  MAIN_PATH = 'front'.freeze
  SHARED_PATH = 'shared'.freeze

  def front_component(main, *partials, locals: {})
    render get_main_path(main) + way(partials), locals
  end

  def get_main_path(folder)
    "#{MAIN_PATH}/#{asset_folder}/components/#{folder}"
  end

  def shared(*partials)
    render SHARED_PATH + way(partials)
  end

  def flashed(types)
    html = []
    types.each do |key, value|
      next if value.is 'translation missing: ru.devise.sessions.user.already_signed_out'
      html << "<md-toast class='md-toast toast--fixed toast--bottom_manual toast--#{key}'>"
      html << !(value.is_a? String) ? value.join('<br>') : value
      html << '</md-toast>'
    end
    safe_join html
  end

  def meta_info(resource = meta_resource)
    content_for :title, resource.meta_title
    content_for :description, resource.meta_description
    content_for :keywords, resource.meta_keywords
    content_for :url, request.original_fullpath
  end

  private

  def way(partials)
    partials.present? ? '/' + partials.map(&:to_s).join('/') : ''
  end
end
