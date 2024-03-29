import { CheckInHistoryItem } from "./../redux/slices/checkInSlice";
import { APP_URL, COOKIE_ACCESS_TOKEN } from "../constants";
import axios from "axios";
import { readCookie } from "../modules/CookieHandler";
import { Event, EventWithData } from "../redux/slices/eventSlice";
import { getAccessToken } from "../modules/AuthUtils";

// check In

export const callCheckInHistory = async (
  pageIndex: number
): Promise<{
  checkInHistory: CheckInHistoryItem[];
}> => {
  try {
    const response = await axios({
      method: "get",
      url: `${APP_URL}/api/checkin-history`,
      params: { pageIndex },
      headers: {
        Authorization: getAccessToken() || "",
      },
    });

    return response.data;
  } catch (error: any) {
    throw {
      code: "",
      message: error.response.data.message,
    };
  }
};
