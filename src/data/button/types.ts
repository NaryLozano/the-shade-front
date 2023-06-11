interface buttonDataStructure {
  buttonPicture?: {
    modify: {
      img: string;
      width: string;
      height: string;
    };
    delete: {
      deleteImg: string;
      width: string;
      height: string;
    };
    paginationNext: {
      img: string;
      width: string;
      height: string;
    };
    paginationPrev: {
      img: string;
      width: string;
      height: string;
    };
  };
  content?: {
    back: string;
    login: string;
    loadmore: string;
    add: string;
    modify: string;
    previous: string;
    next: string;
  };
  buttonA11Y: {
    next: string;
    previous: string;
    modify: string;
    delete: string;
    back: string;
    add: string;
    login: string;
    loadmore: string;
  };
  buttonClassName: {
    modify: string;
    delete: string;
    pagination: string;
    primary: {
      dark: string;
      light: string;
    };
  };
  buttonType: string;
}

export default buttonDataStructure;
