import React, { useState } from "react";

// Custom Components
import CustomModal from "./Modal";

// Antd Components
import { Button, Form, Typography } from "antd";
const { Title } = Typography;

// Constants
import { Buttons, Titles } from "../utils/constants";

// styles
import "../styles/header.css";

const Header = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ticketForm] = Form.useForm();

  // Open Modal
  const handleClick = () => {
    setIsOpen(true);
  };

  // Close Modal
  const handleClose = () => {
    setIsOpen(false);
    ticketForm.resetFields();
  };

  return (
    <div className="header-container">
      <Title level={3}>{title}</Title>
      {/* <Button type="primary" onClick={handleClick}>
        {Buttons.CREATE_TICKET}
      </Button> */}
      <CustomModal
        isOpen={isOpen}
        closeModal={handleClose}
        title={Titles.CREATE_TICKET}
        form={ticketForm}
      />
    </div>
  );
};

export default Header;
