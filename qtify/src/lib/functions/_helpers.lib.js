import events from "../../events/events";
import eventEmitter from "../services/event.emitter";

export const globalCatchSuccess = (response) => {
  let message = "Something went wrong";
  if (response?.data?.message) {
    message = response?.data?.message;
  }

  eventEmitter.emit(events.showNotification, {
    message,
    options: {
      variant: "suucess",
    },
  });
};

export const globalCatchWarning = (response) => {
  let message = "Something went wrong";
  if (response?.data?.message) {
    message = response?.data?.message;
  }

  eventEmitter.emit(events.showNotification, {
    message,
    options: {
      variant: "warning",
    },
  });
};

export const globalCatchError = (error) => {
  let message = "Something went wrong";
  if (error?.response?.data?.message) {
    message = error?.response?.data?.message;
  }

  if (error.response && error.response.status === 500) {
    message = "Server is currently not reachable";
  }
  console.log("Sourav Basak", error);

  eventEmitter.emit(events.showNotification, {
    message,
    options: {
      variant: "error",
    },
  });
};
