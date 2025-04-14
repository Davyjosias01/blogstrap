class Article < ApplicationRecord
    #definindo que o nome não pode ser nullo, e precisa ter no minimo 5 caracteres
    validates :name, presence: true, length: {minimum:3}
    #definindo que o body não pode ser nullo e precisa ter no minimo 10 caracteres 
    validates :body, presence: true, length: {minimum:10}

end
