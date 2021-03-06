import _ from 'lodash';

import { getMessages } from "../static-data";
import { SEND_MESSAGE } from "../constants/action-types";

export default function messages(state = getMessages(10), action) {
  switch (action.type) {
    case SEND_MESSAGE:
      const { message, userId } = action.payload;
      const allUserMsgs = state[userId];
      // + converted to a Number instead of a String.
      const number = +_.keys(allUserMsgs).pop();
      debugger
      return {
        ...state,
        [userId]: {
          ...allUserMsgs,
          [number]: {
            number,
            text: message,
            is_user_msg: true
          }
        }
      };
    default:
      return state;
  }
}