class Tag < ApplicationRecord
    has_many :tag_associations
    has_many :resources, through: :tag_associations
end
