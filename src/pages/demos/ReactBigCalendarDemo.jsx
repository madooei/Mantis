import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import MainCard from "../../components/MainCard";
import Typography from "@mui/material/Typography";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment); // or globalizeLocalizer
const events = [
  {
    id: 1,
    title: "Coding",
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },
];

function ReactBigCalendarDemo(props) {
  return (
    <MainCard title={"React Big Caledar"} codeHighlight>
      <Typography variant="body2" gutterBottom>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
        />
      </Typography>
    </MainCard>
  );
}

export default ReactBigCalendarDemo;
