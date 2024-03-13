import Ticket from '../DAO/mongo/models/ticket.js';

const createTicket = async (ticketData) => {
  try {
    const ticket = new Ticket(ticketData);
    await ticket.save();
  } catch (error) {
    throw new Error(`Error al crear el ticket: ${error.message}`);
  }
};


export default {
  createTicket
};
