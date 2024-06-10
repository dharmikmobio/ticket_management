import create from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      ticketData: [],
      addTicket: (ticket) =>
        set((state) => ({ ticketData: [...state.ticketData, ticket] })),
      updateTicketList: (ticketId, newStatus) =>
        set((state) => ({
          ticketData: state.ticketData.map((ticket) =>
            ticket.id === ticketId ? { ...ticket, status: newStatus } : ticket
          ),
        })),
    }),
    {
      name: "tickets-storage", // name of the storage key
    }
  )
);

export default useStore;
