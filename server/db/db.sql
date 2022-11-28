CREATE TABLE restaurants(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL check (price_range >=1 and price_range <=5)
);


CREATE TABLE reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
    UNIQUE (restaurant_id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL check(rating >= 1 and rating <= 5)
);



      "select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1)as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id where id = $1",

    


ALTER TABLE reviews DROP CONSTRAINT reviews_restaurant_id_fkey,ADD CONSTRAINT reviews_restaurant_id_fkey FOREIGN KEY(restaurant_id)REFERENCES restaurants (id) ON DELETE CASCADE;


DELETE FROM restaurants where id = $1


      "INSERT INTO reviews (restaurant_id, name, review, rating) values ($1, $2, $3, $4) returning *;",


      "UPDATE restaurants SET name = $1, location = $2, price_range = $3 where id = $4 returning *",


      "INSERT INTO restaurants (name, location, price_range) values ($1, $2, $3) returning *",
