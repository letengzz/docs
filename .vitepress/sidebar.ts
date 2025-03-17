import { set_sidebar } from "../utils/auto-gen-sidebar.mjs";	// 改成自己的路径
import { DotNet, Go, Java, Python } from "./backend";
import { NoRelational, Relational } from "./db";
import { FrontBasic, FrontFrame, FrontTools, FrontOthers } from "./frontend";
import { Docker, JumpServer, Kubernetes, Linux, Nginx, OpsOthers, OpsTools, VM } from "./ops";
export const sidebar = {

  //前端
  "/docs/Frontend/Basic": FrontBasic,
  "/docs/Frontend/Frame": FrontFrame,
  "/docs/Frontend/Tools": FrontTools,
  "/docs/Frontend/Others": FrontOthers,

  //后端
  "/docs/Backend/Go": Go,
  "/docs/Backend/DotNet": DotNet,
  "/docs/Backend/Java": Java,
  "/docs/Backend/Python": Python,

  //运维
  "/docs/Ops/VM": VM,
  "/docs/Ops/Linux": Linux,
  "/docs/Ops/Nginx": Nginx,
  "/docs/Ops/Docker": Docker,
  "/docs/Ops/Kubernetes": Kubernetes,
  "/docs/Ops/JumpServer": JumpServer,
  "/docs/Ops/Tools": OpsTools,
  "/docs/Ops/Others": OpsOthers,

  //NoRelational
  "/docs/DB/NoRelational": NoRelational,
  //Relational
  "/docs/DB/Relational": Relational,

  //其他
  "/docs/Others": set_sidebar("/docs/Others"),
}