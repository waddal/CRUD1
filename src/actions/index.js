import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const ADD_CONTACT = 'ADD_CONTACT'; 
export const DELETE_CONTACT = 'DELETE_CONTACT'; 
export const UPDATE_CONTACT = 'UPDATE_CONTACT'; 

export const getContacts = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .get(`${process.env.REACT_APP_API}entries`)
      .then((res) => {
        console.log(res.data);
        dispatch(fetchSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchFail(err));
      });
  };
};

export const getContactById = (id) => {
  console.log('fetching from: ', process.env.REACT_APP_API, 'id: ', id);
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .get(`${process.env.REACT_APP_API}entry?id=${id}`)
      .then((res) => {
        console.log(res.data);
        dispatch(fetchSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchFail({message: `Unable to locate contact with id, ${id}`, error: err}));
      });
  };
};

export const fetchStart = () => {
  return { type: FETCH_START };
}

export const fetchSuccess = (data) => {
  return { type: FETCH_SUCCESS, payload: data };
}

export const fetchFail = (message) => {
  return { type: FETCH_FAIL, payload: message };
}

export const addContact = (contact) => {
  return {type: ADD_CONTACT, payload: contact};
}

export const deleteContact = (contactId) => {
  return {type: DELETE_CONTACT, payload: contactId};
}

export const updateContact = (contactId) => {
  return {type: UPDATE_CONTACT, payload: contactId};
}