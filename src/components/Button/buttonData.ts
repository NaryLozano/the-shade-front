import Delete from "../../media/Delete.svg";
import modify from "../../media/Lipstick.svg";
interface buttonDataStructure {
  buttonPicture?: {
    modify: string;
    Delete: string;
  };
  content?: {
    back: string;
    login: string;
    loadmore: string;
    add: string;
    modify: string;
  };
  buttonA11Y: {
    next: string;
    previous: string;
    modify: string;
    delete: string;
    back: string;
  };
  buttonClassName: {
    modify: string;
    delete: string;
    primary: {
      dark: string;
      light: string;
    };
  };
}

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
    modify: modify,
    Delete: Delete,
  },
};

export default buttonData;
