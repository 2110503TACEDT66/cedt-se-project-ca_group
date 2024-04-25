const express = require("express");
const {
  getMenus,
  getMenu,
  createMenu,
  updateMenu,
  deleteMenu,
} = require("../controllers/menu");

const router = express.Router({ mergeParams: true });

const { protect, authorize } = require("../middleware/auth");

router
  .route("/")
  .get(getMenus) 
  .post(protect, authorize("admin"), createMenu);

router
  .route("/:id")
  .get(getMenu)
  .put(protect, authorize("admin"), updateMenu)
  .delete(protect, authorize("admin"), deleteMenu);
  
module.exports = router;
  