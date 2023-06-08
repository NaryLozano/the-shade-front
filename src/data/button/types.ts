interface buttonDataStructure {
  buttonPicture?: {
    modify: {
      img: string;
      width: string;
      height: string;
    };
    delete: {
      deleteImg: string;
      widht: string;
      height: string;
    };
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
    add: string;
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
