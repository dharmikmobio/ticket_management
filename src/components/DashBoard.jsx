import React from "react";

// Custom Components
import KanbanBoard from "./KanbanBoard";

// Redux
import { useSelector } from "react-redux";

const DashBoard = () => {
  const ticketData = useSelector((state) => state.tickets.ticketData);

  return (
    <div>
      <KanbanBoard tickets={ticketData} />
    </div>
  );
};

export default DashBoard;
