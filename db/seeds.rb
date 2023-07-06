puts "🌱 Seeding spices..."

Photographer.destroy_all
Exhibit.destroy_all
Photo.destroy_all

Photographer.create(name: "Lunis Loon", year: "senior")
Photographer.create(name: "Mile RazorBeak", year: "freshman")
Photographer.create(name: "Kylo the Seedy", year: "senior")
Photographer.create(name: "R-10", year: "junior")

Exhibit.create(name: "The Southwest", location: "Room 305", date: "May 1st - June 17th")
Exhibit.create(name: "Thrifted Ideas", location: "library", date: "January 23rd - February 28th")
Exhibit.create(name: "Moments on Film", location: "library", date: "March 14th - April 4th")

Photo.create(image_url: "https://i.imgur.com/NwHAugd.png", title: "Fishing for Hats", year: 2019, description: "We find hats in the ruins on a windy day.", medium: "film", photographer_id: 17, exhibit_id: 13)
Photo.create(image_url: "https://i.imgur.com/M02YA03.png", title: "Arrowheads", year: 2018, description: "Our friends like to make arrowheads.", medium: "digital", photographer_id: 18, exhibit_id: 13)
Photo.create(image_url: "https://i.imgur.com/rUym6kD.jpg", title: "Outlook", year: 2021, description: "Friend in thought.", medium: "film", photographer_id: 19, exhibit_id: 14)
Photo.create(image_url: "https://i.imgur.com/3GUxoZ8.jpg", title: "Flower Blossoms", year: 2018, description: "Threads for spring.", medium: "digital", photographer_id: 19, exhibit_id: 15)
Photo.create(image_url: "https://i.imgur.com/fPgAoKV.jpg", title: "Drama in Business", year: 2021, description: "We don't do mundane.", medium: "digital", photographer_id: 20, exhibit_id: 15)
Photo.create(image_url: "https://i.imgur.com/ydqqq9P.png", title: "NM Chili 1", year: 2019, description: "Streets of ABQ", medium: "film", photographer_id: 20, exhibit_id: 14)
Photo.create(image_url: "https://i.imgur.com/z5oFL1O.jpg", title: "NM Chili 2", year: 2019, description: "Streets of ABQ", medium: "digital", photographer_id: 19, exhibit_id: 15)
Photo.create(image_url: "https://i.imgur.com/4i6ClVs.jpg", title: "Drive Thru", year: 2021, description: "ABQ Quirks", medium: "digital", photographer_id: 17, exhibit_id: 14)
Photo.create(image_url: "https://i.imgur.com/2sTIWR3.png", title: "Leprechaun Gods", year: 2019, description: "Green festivities.", medium: "digital", photographer_id: 17, exhibit_id: 14)
Photo.create(image_url: "https://i.imgur.com/zCI8g1s.png", title: "In a Sentimental Mood", year: 2018, description: "A gift.", medium: "film", photographer_id: 18, exhibit_id: 15)
Photo.create(image_url: "https://i.imgur.com/NVBpaiv.jpg", title: "Rio Grande", year: 2017, description: "Summer memories.", medium: "film", photographer_id: 20, exhibit_id: 15)
Photo.create(image_url: "https://i.imgur.com/Gf4mArF.jpg", title: "Off Plaid", year: 2021, description: "Classic pairing of white and plaid in a loose silhouette?", medium: "digital", photographer_id: 20, exhibit_id: 13)
Photo.create(image_url: "https://i.imgur.com/jAvBaoI.jpg", title: "Tough but Do It Cute", year: 2020, description: "Always ask, why not?", medium: "digital", photographer_id: 19, exhibit_id: 14)
Photo.create(image_url: "https://i.imgur.com/fVdQLvU.png", title: "ABQ Style", year: 2020, description: "Shops in ABQ", medium: "digital", photographer_id: 18, exhibit_id: 15)

puts "✅ Done seeding!!"