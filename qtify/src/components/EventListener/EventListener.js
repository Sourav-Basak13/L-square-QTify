import React, { useCallback, useEffect } from "react";
import { toast } from "sonner";
import eventEmitter from "../../lib/services/event.emitter";
import events from "../../events/events";
import useDetectOnline from "../../hooks/general/useDetectOnline";
import { theme } from "../../mui-theme/MuiThemeProvider";

function EventListener() {
  useDetectOnline();
  const showNotification = useCallback(({ message, options }) => {
    const { error, success, warning, info } = theme.palette;
    if (options.variant === "error")
      toast.error(message, {
        style: {
          color: error.dark,
        },
      });
    if (options.variant === "warning")
      toast.error(message, {
        style: {
          color: warning.dark,
        },
      });
    if (options.variant === "success")
      toast.error(message, {
        style: {
          color: success.dark,
        },
      });
    if (options.variant === "info")
      toast.error(message, {
        style: {
          color: info.dark,
        },
      });
  }, []);

  useEffect(() => {
    eventEmitter.on(events.showNotification, showNotification);

    return () => eventEmitter.off(events.showNotification, showNotification);
  }, []);

  return null;
}

export default EventListener;
