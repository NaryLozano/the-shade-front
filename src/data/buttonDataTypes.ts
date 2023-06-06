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

export default buttonDataStructure;
