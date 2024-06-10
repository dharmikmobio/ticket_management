import React, { useState } from "react";
import { Typography } from "antd";
import useStore from "../zustand/useStore";
import "../styles/KanbanBoard.css";
import { statusColumn } from "../utils/constants";

const { Title, Text } = Typography;

const KanbanBoard = ({ tickets }) => {
  const updateTicketList = useStore((state) => state.updateTicketList);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const handleDragStart = (e, ticketId) => {
    const ticket = tickets.find((ticket) => ticket.id === ticketId);
    setSelectedTicket(ticket);
  };

  const handleDragEnd = () => {
    setSelectedTicket(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, columnId) => {
    e.preventDefault();
    if (selectedTicket) {
      updateTicketList(selectedTicket.id, columnId);
    }
  };

  return (
    <div className="kanban-container">
      {statusColumn.map((status) => (
        <div
          key={status.name}
          className="kanban-column"
          id={status.name}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, status.name)}
        >
          <Title level={3} style={{ color: status.color }}>
            {status.name.charAt(0).toUpperCase() +
              status.name.slice(1).replace("_", " ")}
          </Title>
          <hr />
          {tickets.length > 0 &&
            tickets
              .filter((ticket) => ticket.status === status.name)
              .map((ticket, index) => (
                <div
                  key={index}
                  id={ticket.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, ticket.id)}
                  onDragEnd={handleDragEnd}
                  className={`kanban-ticket ${ticket.status}`}
                >
                  <div>
                    <Text strong>Name: </Text>
                    <Text>{ticket.name}</Text>
                  </div>
                  <div>
                    <Text strong>Title: </Text>
                    <Text>{ticket.title}</Text>
                  </div>
                </div>
              ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
