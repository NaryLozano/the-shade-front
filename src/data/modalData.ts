import modalDataStructure from "./modalDataTypes";

const modalData: modalDataStructure = {
  messages: {
    invalid: "invalid username or password",
    failed: "bring back my queens has failed",
    modifyFail: "queen couldn't be modified try again, please ",
    addFail: "queen could't be created try again, please",
    logOut: "you have been correctly logged out",
    modifyOk: "a new queen has been modified!",
    addOk: "a new queen has been added!",
    deleteOk: "you'r queen has been deleted!",
    deleteFail: "queen could't be deleted try again, please",
  },
  modaltype: {
    error: "oops!",
    OK: "yaas!",
  },
  className: {
    error: "modal__error",
    OK: "modal__ok",
  },
};

export default modalData;
