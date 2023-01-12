require("dotenv").config();
const express = require("express");
const db = require("./db");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(cors());

app.use(express.json());

//get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  try {
    // const results = await db.query("select * from restaurants");
    const restaurantRatingData = await db.query(
      "select * from restaurants left join (select restaurant_id, COUNT(*),TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id =reviews.restaurant_id left join (select * from rstatus) rstatus on restaurants.id= rstatus.restaurant_id;"
    );
    res.status(200).json({
      status: "success",
      results: restaurantRatingData.rows.length,
      data: {
        restaurants: restaurantRatingData.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//get a restaurants
app.get("/api/v1/restaurants/ownerhome/:id/review", async (req, res) => {
  console.log(req.params.id);
  try {
    const restaurant = await db.query(
      "select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1)as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id where id = $1",
      [req.params.id]
    );
    const reviews = await db.query(
      "select * from reviews where restaurant_id = $1",
      [req.params.id]
    );

    res.status(200).json({
      status: "success",
      data: {
        restaurant: restaurant.rows[0],
        reviews: reviews.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//Update page display

app.get("/api/v1/restaurants/:id/update", async (req, res) => {
  console.log(req.params.id);
  try {
    const restaurant = await db.query(
      "select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1)as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id where id = $1",
      [req.params.id]
    );
    const reviews = await db.query(
      "select * from reviews where restaurant_id = $1",
      [req.params.id]
    );

    const rstatus =await db.query(
      "select * from rstatus where restaurant_id = $1",[req.params.id]
    )

    res.status(200).json({
      status: "success",
      data: {
        restaurant: restaurant.rows[0],
        reviews: reviews.rows,
        rstatus:rstatus.rows[0]
      },
    });
  } catch (err) {
    console.log(err);
  }
});




app.get("/api/v1/restaurants/customerhome/:id/review", async (req, res) => {
  console.log(req.params.id);
  try {
    const restaurant = await db.query(
      "select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1)as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id where id = $1",
      [req.params.id]
    );
    const reviews = await db.query(
      "select * from reviews where restaurant_id = $1",
      [req.params.id]
    );

    res.status(200).json({
      status: "success",
      data: {
        restaurant: restaurant.rows[0],
        reviews: reviews.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//create restaurants

app.post("/api/v1/restaurants", async (req, res) => {
  console.log(req.body);

  try {
    const results = await db.query(
      "INSERT INTO restaurants (name, location, price_range) values ($1, $2, $3) returning *",
      [req.body.name, req.body.location, req.body.price_range]
    );
    console.log(results);
    res.status(201).json({
      status: "succes",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//Update restaurants

app.put("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE restaurants SET name = $1, location = $2, price_range = $3 where id = $4 returning *",
      [req.body.name, req.body.location, req.body.price_range, req.params.id]
    );
    const response = await db.query(
      "UPDATE rstatus SET status=$1 where restaurant_id = $2 returning *", [req.body.status, req.params.id]
    )

    res.status(200).json({
      status: "succes",
      data: {
        restaurant: results.rows[0],
        rstatus: response.rows[0]
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//delete restaurants

app.delete("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const results = db.query("DELETE FROM restaurants where id = $1", [
      req.params.id,
    ]);
    res.status(204).json({
      status: "sucess",
    });
  } catch (err) {
    console.log(err);
  }
});


//Add Review 

app.post("/api/v1/restaurants/:id/addReview", async (req, res) => {
  try {
    const newReview = await db.query(
      "INSERT INTO reviews (restaurant_id, name, review, rating) values ($1, $2, $3, $4) returning *;",
      [req.params.id, req.body.name, req.body.review, req.body.rating]
    );
    console.log(newReview);
    res.status(201).json({
      status: "success",
      data: {
        review: newReview.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});


//Menu

app.get("/api/v1/restaurants/ownerhome/:id/menu", async (req, res) => {
  try {
    const restaurant = await db.query(
      "select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1)as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id where id = $1",
      [req.params.id]
    );
    const menus = await db.query(
      "select * from menus where restaurant_id = $1",
      [req.params.id]
    );

    res.status(200).json({
      status: "success",
      data: {
        restaurant: restaurant.rows[0],
        menus: menus.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});



//Menu

app.get("/api/v1/restaurants/customerhome/:id/menu", async (req, res) => {
  try {
    const restaurant = await db.query(
      "select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1)as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id where id = $1",
      [req.params.id]
    );
    const menus = await db.query(
      "select * from menus where restaurant_id = $1",
      [req.params.id]
    );

    res.status(200).json({
      status: "success",
      data: {
        restaurant: restaurant.rows[0],
        menus: menus.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});



//Add Menu

app.post("/api/v1/restaurants/:id/addMenu", async (req, res) => {
  try {
    const newMenu = await db.query(
      "INSERT INTO menus (restaurant_id,item) values ($1,$2) returning *;",
      [req.params.id, req.body.item]
    );
    res.status(201).json({
      status: "success",
      data: {
        menu: newMenu.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

app.delete("/api/v1/restaurants/ownerhome/:restaurant_id/menu/:id", async (req, res) => {
  try {
    const results = db.query("DELETE FROM menus where restaurant_id = $1 and id=$2", [
      req.params.restaurant_id, req.params.id
    ]);
    res.status(204).json({
      status: "sucess",
    });
  } catch (err) {
    console.log(err);
  }
});



const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
