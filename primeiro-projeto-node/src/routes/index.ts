import { Router } from "express";
import appointmentsRouter from "./appointments.routes";

const routes = Router();

// toda rota que comece com appointments passa o que vier depois para appointmentsRouter
routes.use("/appointments", appointmentsRouter);

export default routes;
