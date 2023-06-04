interface modalDataStructure {
  messages: {
    invalid: string;
    failed: string;
    modifyFail: string;
    addFail: string;
    logOut: string;
    modifyOk: string;
    addOk: string;
    deleteOk: string;
    deleteFail: string;
  };
  modaltype: {
    error: string;
    OK: string;
  };
  className: {
    error: string;
    OK: string;
  };
}
const modalData: modalDataStructure = {
  messages: {
    invalid: "invalid username \n or password",
    failed: "bring back my queens \n has failed",
    modifyFail: "queen couldn't \n be modified \n try again, please ",
    addFail: "queen could't \n be created \n try again, please",
    logOut: "you have been \n correctly logged out",
    modifyOk: "a new queen has \n been modified!",
    addOk: "you'r queen has \n  been added!",
    deleteOk: "you'r queen has \n been deleted!",
    deleteFail: "queen could't \n be deleted \n try again, please",
  },
  modaltype: {
    error: "oops!",
    OK: "yaas!",
  },
  className: {
    error: "modal-error",
    OK: "modal-ok",
  },
};

export default modalData;
