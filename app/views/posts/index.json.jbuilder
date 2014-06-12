json.array!(@posts) do |post|
  json.extract! post, :id, :description, :date, :image
  json.url post_url(post, format: :json)
end
