import remove from "../../media/Delete.svg";
import modify from "../../media/Lipstick.svg";
import next from "../../media/next.svg";
import previous from "../../media/previous.svg";

import buttonDataStructure from "./types";

const buttonData: buttonDataStructure = {
  content: {
    add: "add queen",
    back: "back",
    loadmore: "load more",
    login: "login",
    modify: "modify queen",
    next: "next",
    previous: "previous",
  },
  buttonA11Y: {
    delete: "delete",
    modify: "modify",
    next: "next",
    previous: "previous",
    back: "back",
    add: "add",
    login: "login",
    loadmore: "loadmore",
  },
  buttonClassName: {
    delete: "delete",
    modify: "modify",
    pagination: "pagination",
    primary: {
      dark: "dark",
      light: "light",
    },
  },
  buttonPicture: {
    modify: {
      img: modify,
      width: "43",
      height: "43",
    },
    delete: {
      deleteImg: remove,
      width: "20",
      height: "20",
    },
    paginationNext: {
      img: next,
      height: "29.09",
      width: "20",
    },

    paginationPrev: {
      img: previous,
      height: "29.09",
      width: "20",
    },
  },
  buttonType: "submit",
};

export default buttonData;
