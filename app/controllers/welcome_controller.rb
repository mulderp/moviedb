class WelcomeController < ApplicationController
  def index
    @categories = Category.all.map { |c| CategorySerializer.new(c, {root: false}) }.to_json.html_safe
  end
end
