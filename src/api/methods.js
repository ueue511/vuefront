//node.jsの関数はこちらでまとめる
import Api from "./index";
import axios from "axios";

export default {
  //メニューリストのresponse処理 axios.all使用
  testPosting() {
  return axios.all([Api().get("https://ancient-earth-61569.herokuapp.com/menulist"), Api().get("https://ancient-earth-61569.herokuapp.com/menuimg")]);
},

  //管理画面adminsterのメニューlist
  AdminsterList() {
      return Api().get("https://ancient-earth-61569.herokuapp.com/adminster");
  },

  //新規注文メニュー
  AdminsterNewMenu(menu, file) {
    const formData = new FormData();
    const menu_all = menu
    formData.append("menu", menu_all)
    formData.append("file", file)
    // console.log(...formData.entries())
    return Api().post("https://ancient-earth-61569.herokuapp.com/adminsternew", formData, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "multipart/form-data",
      }
    });
  },

  //追加メニュー及び画像の場合
  AdminsterAddMenuImg(menu, file) {
    const formData = new FormData();
    const menu_all = menu
    formData.append("menu", menu_all)
    formData.append("file", file)
    // console.log(...formData.entries())
    return Api().post("https://ancient-earth-61569.herokuapp.com/adminsteradd", formData, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "multipart/form-data",
      }
    });
  },

  //追加メニューのみ
  AdminsterAddMenu(menu) {
    const formData = new FormData();
    const menu_all = menu
    formData.append("menu", menu_all)
    // console.log(...formData.entries())
    return Api().post("https://ancient-earth-61569.herokuapp.com/adminsteradd", formData, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "multipart/form-data",
      }
    });
  },

  //削除
  AdminsterDelete(list) {
    const deletemenu = list;
    const formData = new FormData();
    formData.append("id", deletemenu)
    // console.log(...formData.entries())
    return Api().post("https://ancient-earth-61569.herokuapp.com/adminsterdelete", formData, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "multipart/form-data",
      }
    });
  },

  LoginAdminster(list) {
    const logindata = list;
    const formData = new FormData();
    formData.append("login", logindata);
    // console.log(...formData.entries());
    return Api().post("https://ancient-earth-61569.herokuapp.com/loginuser", formData, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "multipart/form-data",
      }
    });
  }
};