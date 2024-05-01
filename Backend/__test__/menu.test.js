const {
    getMenus,
    getMenu,
    createMenu,
    updateMenu,
    deleteMenu,
  } = require("../controllers/menu");

  const { getReviews,getReview,addReview,deleteReview, updateReview} = require('../controllers/review');

  const {
    getRestaurants,
    getRestaurant,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant,
    searchRestaurants,
    getRestaurantslimitfour,
  } = require("../controllers/restaurant");
  

describe('menu backend function', () => {
    it('example case', async () => {
        //expect(getMenus).toBe('Input sides must be integers between 1 and 200');
        const result = await fetch('http://localhost:5000/api/v1/restaurants/66023f743087f578117dd62f/menus')
        const resultJson = await result.json()
        expect(resultJson.success).toBe(true)
        
    });
    it('example case 2', async () => {
        //expect(getMenus).toBe('Input sides must be integers between 1 and 200');
        const result = await fetch('http://localhost:5000/api/v1/restaurants/66023f743087f578117dd62/menus')
        const resultJson = await result.json()
        if(!result.ok){
            console.log("not ok")
        }
        expect(resultJson.success).toBe(false)
        
    });

    it('example case 3', async () => {
        //expect(getMenus).toBe('Input sides must be integers between 1 and 200');
        const result = await fetch('http://localhost:5000/api/v1/menus/6629bffea8cc50a8eaebc4b7')
        const resultJson = await result.json()
        expect(resultJson.success).toBe(true)
        
    });

    it('test case', async () => {
        //expect(getMenus).toBe('Input sides must be integers between 1 and 200');
        const result = await fetch('http://localhost:5000/api/v1/menus/?name=Burger')
        const resultJson = await result.json()
        expect(resultJson.success).toBe(true)
        
    });

    it('example case 6', async () => {
        //expect(getMenus).toBe('Input sides must be integers between 1 and 200');
        const result = await fetch('http://localhost:5000/api/v1/menus/6629bffea8cc50a8eaebc7')
        const resultJson = await result.json()
        expect(resultJson.success).toBe(false)
        
    });
    it('example case 7', async () => {
        //expect(getMenus).toBe('Input sides must be integers between 1 and 200');
        const result = await fetch('http://localhost:5000/api/v1/restaurants/66023b25682edb1814b4bad7/reviews')
        const resultJson = await result.json()
        expect(resultJson.success).toBe(true)
        
    });
    it('example case8', async () => {
        //expect(getMenus).toBe('Input sides must be integers between 1 and 200');
        const result = await fetch('http://localhost:5000/api/v1/restaurants/search/:search?restaurantName=%20&minPrice=1&maxPrice=5')
        const resultJson = await result.json()
        expect(resultJson.success).toBe(true)
        
    });

    it('example case 4', async () => {
        //expect(getMenus).toBe('Input sides must be integers between 1 and 200');
        const result = await fetch(`http://localhost:5000/api/v1/restaurants/6602a7ae09ff9bd2d7021962/menus`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MWU4NzcyNjk4ODdmZDYyNTI5YWQ5MCIsImlhdCI6MTcxNDUyMDMzMiwiZXhwIjoxNzE3MTEyMzMyfQ.n82VH1Hqx2MSzvuLH0eVvjzl3LAo4mf0Qf6lYmOk6_Y`,
            },
            body: JSON.stringify({
                name: "Super Burger 4",
                price: 199,
                restaurant: "6602a7ae09ff9bd2d7021962"
            }),
        })
        const resultJson = await result.json()
        expect(resultJson.success).toBe(true)
        
    });

    it('example case 10', async () => {
        //expect(getMenus).toBe('Input sides must be integers between 1 and 200');
        const result = await fetch(`http://localhost:5000/api/v1/menus/663181112131d6779b267c39`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MWU4NzcyNjk4ODdmZDYyNTI5YWQ5MCIsImlhdCI6MTcxNDUyMDMzMiwiZXhwIjoxNzE3MTEyMzMyfQ.n82VH1Hqx2MSzvuLH0eVvjzl3LAo4mf0Qf6lYmOk6_Y`,
            },
            body: JSON.stringify({
            }),
        })
        const resultJson = await result.json()
        expect(resultJson.success).toBe(true)
        
    });
})