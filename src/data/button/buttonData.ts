import remove from "../../media/Delete.svg";
import modify from "../../media/Lipstick.svg";

import buttonDataStructure from "./types";

const buttonData: buttonDataStructure = {
  content: {
    add: "add queen",
    back: "back",
    loadmore: "load more",
    login: "login",
    modify: "modify queen",
  },
  buttonA11Y: {
    delete: "delete",
    modify: "modify",
    next: "next",
    previous: "previous",
    back: "back",
  },
  buttonClassName: {
    delete: "delete",
    modify: "modify",
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
      widht: "20",
      height: "20",
    },
  },
};

export default buttonData;
