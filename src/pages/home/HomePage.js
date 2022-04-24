import { Fragment } from "react";
import { PomoHeader } from "../../components/pomodoro/PomoHeader";
import Timer from "../../components/pomodoro/Timer";

export const HomePage = () => {
   return (
      <Fragment>
         <PomoHeader />
         <Timer />
      </Fragment>
   );
};
