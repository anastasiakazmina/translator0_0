require 'translation_api_helper'

class TranslatorChannel < ApplicationCable::Channel
  def subscribed
    stream_from "translator_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def translate(payload)
    puts "translator_channel.rb: #translate: got payload: #{payload}"
    translated_text = TranslationApiHelper.translate payload['text']
    # ActionCable.server.broadcast 'translator_channel', translated_text: "Translated text is: #{payload['text']} (DUMMY STUB)!"
    ActionCable.server.broadcast 'translator_channel', translated_text: translated_text
  end
end
