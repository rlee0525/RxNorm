json.array! @search_histories.each do |history|
  json.extract! history, :name
end
