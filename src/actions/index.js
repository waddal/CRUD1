import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const ADD_CONTACT = "ADD_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const UPDATE_CONTACT = "UPDATE_CONTACT";
export const CONFIRMATION_MESSAGE = "CONFIRMATION_MESSAGE";

export const getContacts = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .get(`${process.env.REACT_APP_API}entries`)
      .then((res) => {
        dispatch(fetchSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchFail(err));
      });
  };
};

export const getContactById = (id) => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .get(`${process.env.REACT_APP_API}entry?id=${id}`)
      .then((res) => {
        dispatch(fetchSuccess(res.data));
      })
      .catch((err) => {
        dispatch(
          fetchFail({
            message: `Unable to locate contact with id, ${id}`,
          })
        );
      });
  };
};

export const addContact = (contact) => {
  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_API}entry`, contact)
      .then((res) => {
        dispatch(
          confirmationMessage({ message: "New contact successfully added!" })
        );
      })
      .catch((err) => {
        dispatch(fetchFail({ message: `Unable to create contact` }));
      });
  };
};

export const deleteContact = (id) => {
  return (dispatch) => {
    axios
      .delete(`${process.env.REACT_APP_API}entry?id=${id}`, id)
      .then((res) => {
        dispatch(
          confirmationMessage({ message: "Deleted contact successfully." })
        );
      })
      .catch((err) => {
        dispatch(fetchFail({ message: `Unable to create contact` }));
      });
  };
};

export const fetchStart = () => {
  return { type: FETCH_START };
};

export const fetchSuccess = (data) => {
  return { type: FETCH_SUCCESS, payload: data };
};

export const fetchFail = (message) => {
  return { type: FETCH_FAIL, payload: message };
};

export const updateContact = (contactId) => {
  return { type: UPDATE_CONTACT, payload: contactId };
};

export const confirmationMessage = (message) => {
  return { type: CONFIRMATION_MESSAGE, payload: message };
};
