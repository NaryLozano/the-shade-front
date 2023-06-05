interface buttonDataStructure {
  buttonImage?: string;
  text?: {
    back: string;
    login: string;
    loadmore: string;
    add: string;
    modify: string;
  };
  buttonName: {
    next: string;
    previous: string;
    modify: string;
    delete: string;
  };
  className: {
    modify: string;
    delete: string;
    primary: {
      dark: string;
      light: string;
    };
  };
}

const buttonData: buttonDataStructure = {
  text: {
    add: "add queen",
    back: "back",
    loadmore: "load more",
    login: "login",
    modify: "modify queen",
  },
  buttonName: {
    delete: "delete",
    modify: "modify",
    next: "next",
    previous: "previous",
  },
  className: {
    delete: "delete",
    modify: "modify",
    primary: {
      dark: "button__dark",
      light: "button__light",
    },
  },
  buttonImage: "",
};

export default buttonData;
