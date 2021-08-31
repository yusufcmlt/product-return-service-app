const ticketStatusMessage = {
  pending: 'Bekliyor',
  rejected: 'Reddedildi',
  accepted: 'Kabul edildi',
};
const ticketFormReasonMessages = {
  notReceived: 'Ürün ulaşmadı',
  missingItem: 'Eksik ürün',
  damagedItem: 'Hasarlı ürün',
  wrongItem: 'Yanlış ürün',
};
const ticketDetailTitles = {
  ticketFirstName: 'Ad',
  ticketLastName: 'Soyad',
  ticketAge: 'Yaş',
  ticketIdNumber: 'TC no',
  ticketTelNumber: 'Telefon',
  ticketAddress: 'Adres',
  ticketItemCode: 'Ürün kodu',
  ticketReason: 'İade nedeni',
  ticketStatus: 'İade durumu',
  ticketResponseMessage: 'İade durum Mesajı',
  ticketReasonDetail: 'Problem detayları',
  ticketFile: 'Dosya(lar)',
  id: 'İade kodu',
  ticketCreatedAt: 'Oluşturma tarihi',
  ticketModifiedAt: 'Son güncelleme tarihi',
  ticketLink: 'Link',
};

const ticketStatusOptions = Object.keys(ticketStatusMessage).map((key) => ({
  key,
  value: ticketStatusMessage[key],
}));
const newTicketFormOptions = Object.keys(ticketFormReasonMessages).map((key) => ({
  key,
  value: ticketFormReasonMessages[key],
}));

export {
  newTicketFormOptions,
  ticketStatusMessage,
  ticketStatusOptions,
  ticketFormReasonMessages,
  ticketDetailTitles,
};
