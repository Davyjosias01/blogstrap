class ChangeNameAndBodyTipesInArticles < ActiveRecord::Migration[8.0]
  def change
      change_column :articles, :name, :string
      change_column :articles, :body, :text  
  end
end
