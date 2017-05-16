FactoryGirl.define do
  factory :listing do
    association :host, factory: :user
    association :region, factory: :region
    title 'Futon in SOMA'
    longitude 0
    latitude 0
    description 'Come stay in our living room! We have one futon that sleeps 2'
    image_url 'example.com'
  end
end
