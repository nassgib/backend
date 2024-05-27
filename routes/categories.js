const categoriesRouter = require("express").Router(); 

const {
    findAllCategories,
    findCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
    checkEmptyName,
    checkIsCategoryExists,
  } = require('../middlewares/category');
const {
    sendAllCategories,
    sendCategoryById,
    sendCategoryCreated,
    sendCategoryUpdated,
    sendCategoryDeleted
  } = require('../controllers/category');
const { checkAuth } = require("../middlewares/auth");

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);

categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);

categoriesRouter.post("/categories", findAllCategories, checkIsCategoryExists, checkEmptyName, checkAuth, createCategory, sendCategoryCreated);

categoriesRouter.put("/categories/:id", checkEmptyName, checkAuth, updateCategory, sendCategoryUpdated);

categoriesRouter.delete("/categories/:id", checkAuth, deleteCategory, sendCategoryDeleted);

module.exports = categoriesRouter;