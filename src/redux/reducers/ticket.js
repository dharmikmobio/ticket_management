// Redux
import { createSlice } from "@reduxjs/toolkit";

const ticketSlice = createSlice({
  name: "tickets",
  initialState: {
    ticketData: [],
  },
  reducers: {
    // Reducer to add a new ticket
    addTicket: (state, action) => {
      state?.ticketData?.push(action.payload);
    },

    // Reducer to update the status of a ticket
    updateTicketList: (state, action) => {
      const { ticketId, newStatus } = action.payload;
      state.ticketData = state.ticketData.map((ticket) => {
        if (ticket.id === ticketId) {
          return {
            ...ticket,
            status: newStatus,
          };
        }
        return ticket;
      });
    },
  },
});

export const { addTicket, updateTicketList } = ticketSlice.actions;

export default ticketSlice.reducer;
