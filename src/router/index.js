import Vue from "vue";
import VueRouter from "vue-router";

import TokenService from "@/services/token.service";
import { Options } from "@/helpers/options.js";

Vue.use(VueRouter);
const baseRoute = process.env.VUE_APP_BASE_NAME_ROUTE;
const router = new VueRouter({
  base: `/${baseRoute}/`,
  mode: "history",
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: () => import("@/pages/dashboardPage/index.vue"),
      redirect: "/prediccion",
      children: [
        {
          path: "/prediccion",
          name: "prediccion",
          component: () => import("@/pages/audiosPage/index.vue"),
          meta: {
            codeOption: Options.find((el) => el.name === "prediccion").code,
          },
        },
        {
          path: "/prediccion/nuevo",
          name: "nuevo",
          component: () => import("@/pages/audioPage/index.vue"),
          meta: {
            codeOption: Options.find((el) => el.name === "prediccion").code,
          },
        },
        {
          path: "/resultados",
          name: "resultados",
          component: () => import("@/pages/tutorialPage/index.vue"),
          meta: {
            codeOption: Options.find((el) => el.name === "resultados").code,
          },
        }
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const { codeOption } = to.meta;
  let _optionDefault = null;
  //   let _codeOptions = [];
  let _codeOptions = ["01", "02"];

  if (TokenService.exist()) {
    // let _systems = TokenService.getDecoded().usuario.sistemas;
    // let _system = _systems.find((el) => el.codigo === "152");
    // _codeOptions = _system.opciones;
    _optionDefault = Options.find((el) => el.code === _codeOptions[0]);
    if (!_optionDefault) {
      _codeOptions = ["00"];
      _optionDefault = Options.find((el) => el.code === "00");
    }
  }
  if (codeOption) {
    //if (!TokenService.exist()) {
    //  return next({ name: "login" });
    //}
    if (codeOption.length && !_codeOptions.includes(codeOption)) {
      return next({ name: _optionDefault.name });
    }
  } else {
    if (TokenService.exist()) {
      return next({ name: _optionDefault.name });
    }
  }
  next();
});

export default router;
