module ApplicationHelper
  def body_klass
    "#{controller_name}-controller #{action_name}-action"
  end
end
