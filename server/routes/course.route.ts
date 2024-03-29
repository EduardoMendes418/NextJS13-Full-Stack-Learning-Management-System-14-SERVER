import express from "express";
import { editCourse, getAllCourses, getCourseByUser, getSingleCourse, uploadCourse } from "../controllers/course.controller";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
const courseRouter = express.Router();

//Post
courseRouter.post(
  "/create-course",
  isAuthenticated,
  authorizeRoles("admin"),
  uploadCourse
);

//Put
courseRouter.put(
  "/edit-course/:id",
  isAuthenticated,
  authorizeRoles("admin"),
  editCourse
);

//Get
courseRouter.get(
  "/get-course/:id",
  getSingleCourse
);
courseRouter.get(
  "/get-courses",
  getAllCourses
);
courseRouter.get(
  "/get-course-content/:id",
  isAuthenticated,
  getCourseByUser
);

export default courseRouter;
