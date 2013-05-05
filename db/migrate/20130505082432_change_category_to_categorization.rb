class ChangeCategoryToCategorization < ActiveRecord::Migration
  def up
    change_table :movies do |t|
      t.rename :category_id, :categorization_id
    end
  end

  def down
    change_table :movies do |t|
      t.rename :categorization_id, :category_id
    end
  end
end
