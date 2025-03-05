import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if this is the user's first page load in the current session
    const initialTracked = sessionStorage.getItem("initialPageTracked");

    if (!initialTracked) {
      // Send a standard pageview hit on the first visit
      ReactGA.send({ hitType: "pageview", page: location.pathname });
      sessionStorage.setItem("initialPageTracked", "true");
    } else {
      // Log subsequent navigations as events without counting as a pageview
      ReactGA.event({
        category: "Navigation",
        action: "Page Change",
        label: location.pathname,
      });
    }
  }, [location]);
};

export default usePageTracking;
