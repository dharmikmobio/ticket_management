import React, { useState } from "react";

// Redux
import { useDispatch } from "react-redux";
import { updateTicketList } from "../redux/reducers/ticket";

// Antd Components
import { Typography } from "antd";
const { Title, Text } = Typography;

// Constants
import { statusColumn } from "../utils/constants";

// styles
import "../styles/KanbanBoard.css";

const KanbanBoard = ({ tickets }) => {
  const dispatch = useDispatch();
  const [selectedTicket, setSelectedTicket] = useState(null);

  // Function to handle the start of dragging a ticket
  const handleDragStart = (e, ticketId) => {
    // Find the ticket being dragged by its ID
    const ticket = tickets.find((ticket) => ticket.id === ticketId);
    // Set the selected ticket if it's not closed
    // if (ticket.status !== "closed") {
    setSelectedTicket(ticket);
    // }
  };

  // Function to handle the end of dragging a ticket
  const handleDragEnd = () => {
    // Clear the selected ticket
    setSelectedTicket(null);
  };

  // Function to handle the drag over event
  const handleDragOver = (e) => {
    // Prevent default behavior
    e.preventDefault();
  };

  // Function to handle the drop event
  const handleDrop = (e, columnId) => {
    // Prevent default behavior
    e.preventDefault();
    // If there's a selected ticket, update its status to the dropped column
    if (selectedTicket) {
      dispatch(
        updateTicketList({ ticketId: selectedTicket.id, newStatus: columnId })
      );
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
