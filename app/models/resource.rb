class Resource < ApplicationRecord

    has_many :tag_associations
    has_many :tags, through: :tag_associations
    
    self.inheritance_column = :_type_disabled

    def as_json(options={})
        super(include: :tags)
    end

    TYPE = {
        web: 0,
        flatiron: 1
    }
end
