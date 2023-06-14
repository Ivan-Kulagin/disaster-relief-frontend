import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import * as AuthService from "@/services/AuthService";
import { instance } from "@/services/_api";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    mockData: true,
    authToken: null,
    pageTransition: {
      name: "router-view",
      mode: "in-out",
    },
    notifications: [
      {
        color: "amber",
        icon: "mdi-gesture-tap-button",
        subtitle: "Juny 06, 2023 (07:10:14)",
        title: "Обращение отправлено",
      },
      {
        color: "blue",
        icon: "mdi-clipboard-text",
        subtitle: "May 17, 2023 (16:29:42)",
        title: "Рекомендации по безопасности (№104)",
        readable: true,
      },
      {
        color: "blue",
        icon: "mdi-clipboard-text",
        subtitle: "May 17, 2023 (16:29:36)",
        title: "Обращение зарегистрировано (№104)",
        readable: true,
      },
      {
        color: "amber",
        icon: "mdi-gesture-tap-button",
        subtitle: "May 17, 2023 (16:28:31)",
        title: "Обращение отправлено",
      },
      {
        color: "blue",
        icon: "mdi-clipboard-text",
        subtitle: "May 14, 2023 (14:39:31)",
        title: "Рекомендации по безопасности (№44)",
        readable: true,
      },
      {
        color: "blue",
        icon: "mdi-clipboard-text",
        subtitle: "May 14, 2023 (14:39:25)",
        title: "Обращение зарегистрировано (№44)",
      },
      {
        color: "amber",
        icon: "mdi-gesture-tap-button",
        subtitle: "May 14, 2023 (14:39:21)",
        title: "Обращение отправлено",
      },
    ],
    coords: { lat: 55.0965399, lon: 36.6022451 },
    role: {
      name: "default",
      display: "Очевидец",
    },
  },
  mutations: {
    setPageTransition(state, value) {
      if ("default" === value) {
        Vue.set(state, "pageTransition", {
          name: "router-view",
          mode: "in-out",
        });
      }
      if ("back" === value) {
        Vue.set(state, "pageTransition", {
          name: "router-view-back",
          mode: "",
        });
      }
    },
    readNotification(state, value) {
      state.notifications[value].readable = false;
    },
    setCoords(state, value) {
      state.coords = value;
    },
    setRole(state, value) {
      if (value.name === "volunteer") {
        state.role = {
          name: "volunteer",
          display: "Волонтёр",
          id: value.id,
        };
      } else {
        state.role = {
          name: "default",
          display: "Очевидец",
        };
      }
    },
    setToken(state, value) {
      state.authToken = value;
      localStorage.setItem("token", value);
    },
    removeToken(state) {
      state.authToken = null;
      localStorage.removeItem("token");
    },
  },
  actions: {
    signIn({ commit }, value) {
      const { login, password } = value;
      AuthService.login(login, password).then((res) => {
        instance.defaults.headers.common["Authorization"] =
          "Bearer " + res.data.token;
        commit("setRole", { name: "volunteer", id: login });
        commit("setToken", res.data.token);
      });
    },
    logout({ commit }) {
      instance.defaults.headers.common["Authorization"] = "";
      commit("setRole", { name: "default" });
      commit("removeToken");
    },
  },
  getters: {
    unreadNotifications(state) {
      return state.notifications.filter((i) => i.readable).length;
    },
    notifications(state) {
      return state.notifications;
    },
    coords(state) {
      return state.coords;
    },
    role(state) {
      return state.role;
    },
    isVolunteer(state) {
      return state.role.name === "volunteer";
    },
    isMock(state) {
      return state.mockData;
    },
  },
});
