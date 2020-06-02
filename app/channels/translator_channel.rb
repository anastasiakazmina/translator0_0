class TranslatorChannel < ApplicationCable::Channel
  def subscribed
    stream_from "translator_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def translate(payload)
    puts "translator_channel.rb: #translate: got payload: #{payload}"
    ActionCable.server.broadcast 'translator_channel', translated_text: "Translated text is: #{payload['text']} (DUMMY STUB)!"
  end
end
