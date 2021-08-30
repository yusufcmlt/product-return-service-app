const newTicketFormDefaults = {
  ticketFirstName: '',
  ticketLastName: '',
  ticketAge: '',
  ticketIdNumber: '',
  ticketTelNumber: '',
  ticketAddress: '',
  ticketItemCode: '',
  ticketReason: 'notReceived',
  ticketReasonDetail: '',
  ticketModifiedAt: new Date(),
  ticketCreatedAt: new Date(),
  ticketStatus: 'pending',
  ticketResponseMessage: 'Süreç başlatıldı.',
};

export default newTicketFormDefaults;
