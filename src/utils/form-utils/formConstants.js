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
};

const searchFormDefaults = {
  ticketSearch: '',
};

const adminFormDefaults = {
  adminUserName: '',
  adminPassword: '',
};
const ticketUpdateFormDefaults = {
  ticketStatus: 'pending',
  ticketResponseMessage: '',
};

const ticketStatusMessage = {
  pending: 'Bekliyor',
  rejected: 'Reddedildi',
  accepted: 'Kabul edildi',
};

// const ticketUpdateFormOptions = ['Bekliyor', 'Reddedildi', 'Kabul Edildi'];

const ticketStatusOptions = Object.keys(ticketStatusMessage).map((key) => ({
  key,
  value: ticketStatusMessage[key],
}));

const ticketFormReasonMessages = {
  notReceived: 'Ürün ulaşmadı',
  missingItem: 'Eksik ürün',
  damagedItem: 'Hasarlı ürün',
  wrongItem: 'Yanlış ürün',
};

const newTicketFormOptions = Object.keys(ticketFormReasonMessages).map((key) => ({
  key,
  value: ticketFormReasonMessages[key],
}));

export {
  newTicketFormDefaults,
  newTicketFormOptions,
  searchFormDefaults,
  ticketStatusMessage,
  adminFormDefaults,
  ticketStatusOptions,
  ticketFormReasonMessages,
  ticketUpdateFormDefaults,
};
