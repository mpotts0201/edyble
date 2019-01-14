require 'httparty'


class Api::RecipesController < ApplicationController
    include HTTParty

    def search 
        @res = HTTParty.get('https://api.edamam.com/search?q=' + params[:search] + '&app_id=' + ENV['APP_ID'] +'&app_key=' + ENV['APP_KEY'],
            :headers => {'Content-Type' => 'application/json'})

        render json: @res
    end

end
