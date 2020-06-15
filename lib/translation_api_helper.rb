require 'uri'
require 'net/http'
require 'openssl'

class TranslationApiHelper
  def self.translate(src_text)
    url = URI("https://piratespeak.p.rapidapi.com/pirate.json?text=#{CGI.escape(src_text)}")

    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE

    request = Net::HTTP::Post.new(url)
    request["x-rapidapi-host"] = ENV['TRANSLATION_API_HOST']
    request["x-rapidapi-key"] = ENV['TRANSLATION_API_KEY']
    request["content-type"] = 'application/x-www-form-urlencoded'

    response = http.request(request)

    Rails.logger.debug "TranslationApiHelper: got response with headers: #{ response.to_hash }"

    if response.code == '200'
      json = JSON.parse(response.read_body)
      translated_text = json.dig('contents', 'translated')

      if translated_text.blank?
        Rails.logger.error "Server responded with 200 code, but did not return any translation; " \
              "body was: #{response.read_body}"
        return 'Server error. We got notification and working on solving problem'
      else
        return translated_text
      end
    end

    Rails.logger.error "Server responded with unexpected code #{response.code}; body was: #{response.read_body}"
    return 'Server error. We got notification and working on solving problem'
  end
end
