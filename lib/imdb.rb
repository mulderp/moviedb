module Imdb

  module Gateway
    def self.conn
      conn = Faraday::Connection.new('http://imdbapi.org') do |builder|
        builder.response :logger
        builder.adapter Faraday.default_adapter
      end
    end

    def self.get_by_title(title)
      raw_resp = conn.get '?', { :title => title }
      JSON.parse(raw_resp.body)
    end
  end
end
