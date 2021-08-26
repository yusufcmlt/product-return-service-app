const newTicketFormDefaults = {
  ticketFirstName: '',
  ticketLastName: '',
  ticketAge: '',
  ticketIdNumber: '',
  ticketTelNumber: '',
  ticketAddress: '',
  ticketItemCode: '',
  ticketReason: 'Ürün ulaşmadı',
  ticketReasonDetail: '',
};

const newTicketFormOptions = ['Ürün ulaşmadı', 'Eksik ürün', 'Hasarlı ürün', 'Yanlış ürün'];

export { newTicketFormDefaults, newTicketFormOptions };
