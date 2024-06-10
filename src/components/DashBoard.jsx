import React from "react";
import KanbanBoard from "./KanbanBoard";
import useStore from "../zustand/useStore";

const DashBoard = () => {
  const ticketData = useStore((state) => state.ticketData);

  return (
    <div>
      <KanbanBoard tickets={ticketData} />
    </div>
  );
};

export default DashBoard;
