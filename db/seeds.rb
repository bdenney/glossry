# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Resource.create(link: "https://google.com",
    title:"Google",
    description: "Search for it!",
    tags: [
        Tag.new({name:"search"}),
        Tag.new({name:"reference"}),
        Tag.new({name:"resource"})
    ],
    type: Resource::TYPE[:web]
)

Resource.create(link: "https://xkcd.com",
    title:"xkcd",
    description: "Good for a laugh",
    tags: [
        Tag.new({name:"fun"}),
        Tag.new({name:"cs"}),
        Tag.new({name:"science"})
    ],
    type: Resource::TYPE[:web]
)

Resource.create(link: "https://flatironschool.com",
    title:"Flatiron School",
    description: "Learn things!",
    tags: [
        Tag.new({name:"learn"}),
        Tag.new({name:"school"}),
        Tag.new({name:"coding"})
    ],
    type: Resource::TYPE[:web]
)

Resource.create(link: "https://learning.flatironschool.com/courses/4985/assignments/163558?module_item_id=352049",
    title:"Flatagram",
    description: "Phase 1 practice that mimics instagram.",
    tags: [
        Tag.new({name:"learn"}),
        Tag.new({name:"school"}),
        Tag.new({name:"coding"}),
        Tag.new({name:"practice"}),
        Tag.new({name:"phase 1"})
    ],
    type: Resource::TYPE[:flatiron]
);