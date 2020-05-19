class Fx < ApplicationRecord

  def as_json_for_rack
    {
      id: id,
      name: name
    }
  end

  def as_json_for_use
    {
      id: id,
      name: name,
      volume: 80
    }
  end

end
