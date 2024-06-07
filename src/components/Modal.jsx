import React from "react";

// Antd Components
import { Form, Input, Modal, Select, Button } from "antd";
const { Option } = Select;

// Constants
import { Buttons, Messages } from "../utils/constants";

// Redux
import { useDispatch } from "react-redux";
import { addTicket } from "../redux/reducers/ticket";

const CustomModal = ({ isOpen, closeModal, title, form }) => {
  const dispatch = useDispatch();

  // Function to handle form submission
  const handleSubmitClick = async (values) => {
    const ticketData = values;
    ticketData.id = Math.floor(Math.random() * 1000);
    dispatch(addTicket(ticketData));
    closeModal();
  };

  return (
    <>
      <Modal title={title} open={isOpen} footer={null} onCancel={closeModal}>
        <Form layout="vertical" form={form} onFinish={handleSubmitClick}>
          <Form.Item
            label="Department"
            name="name"
            rules={[
              {
                required: true,
                message: Messages.REQUIRE,
              },
            ]}
          >
            <Input placeholder="Enter Customer Name" />
          </Form.Item>
          <Form.Item
            label="Job Title"
            name="title"
            rules={[
              {
                required: true,
                message: Messages.REQUIRE,
              },
            ]}
          >
            <Input placeholder="Enter Title" />
          </Form.Item>
          <Form.Item
            label="Status"
            name="status"
            rules={[
              {
                required: true,
                message: Messages.REQUIRE,
              },
            ]}
          >
            <Select placeholder="Select Status">
              <Option value="Draft">Draft</Option>
              <Option value="Active">Active</Option>
              <Option value="Inactive">Inactive</Option>
              {/* <Option value="closed">closed</Option> */}
              <Option value="closed">Closed</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {Buttons.CREATE_FORM}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CustomModal;
