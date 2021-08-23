const languagesGlobal = {
  tr: {},
  en: {},
};
const languagesButtons = {
  tr: {
    newReturn: 'Yeni İade',
    checkReturnStatus: 'İade Durum Sorgula',
    homepage: 'Anasayfa',
    admin: 'Giriş',
    about: 'Hakkımızda',
    addFile: 'Dosya Ekle',
  },
  en: {
    newReturn: 'New Return',
    checkReturnStatus: 'Status of Your Return',
    homepage: 'Home',
    admin: 'Login',
    about: 'About',
    addFile: 'Add File',
  },
};
const languagesHeadings = {
  tr: {
    itemReturnSystemTitle: 'Ürün İade Sistemi',
    itemReturnSystemSubtitle:
      'Ürün iade işlemi başlatabilir veya iade sürecinizi takip edebilirsiniz.',
    createNewReturnTitle: 'Yeni bir iade süreci başlatın',
  },
  en: {
    itemReturnSystemTitle: 'Item Return System',
    itemReturnSystemSubtitle:
      'You can start a new item return process or check your current return status',
    createNewReturnTitle: 'Start ',
  },
};
const languagesForms = {
  tr: {
    personalInfoTitle: 'Kişisel Bilgileriniz',
    personalInfoSubtitle: 'Merak etmeyin aramızda kalacak :)',
    returnInfoTitle: 'İadenizle ilgili bilgiler',
    returnInfoSubtitle: 'Ürününüzle yaşadığınız sorunun detaylarını yazın.',
    nameLabel: 'Adınız',
    lastNameLabel: 'Soyadınız',
    ageLabel: 'Yaşınız',
    idNumberLabel: 'TC No',
    telNumberLabel: 'Telefon',
    addressLabel: 'Adres',
    returnReasonLabel: 'İade nedeni',
    returnReasonDetailLabel: 'Yaşadığınız sorunun detayları.',
  },
  en: {
    personalInfoTitle: 'Personal Information',
    personalInfoSubtitle: "Don't worry, just between us :)",
    returnInfoTitle: 'Information About Your Problem',
    returnInfoSubtitle: 'Give us a bit more detail about your return',
    nameLabel: 'Name',
    lastNameLabel: 'Last name',
    ageLabel: 'Age',
    idNumberLabel: 'ID number',
    telNumberLabel: 'Phone Number',
    addressLabel: 'Address',
    returnReasonLabel: 'Return reason',
    returnReasonDetailLabel: 'Details of your problem',
  },
};

const languagesOptions = {
  tr: {
    noReason: 'Nedensiz',
    damagedItem: 'Hasarlı ürün',
    wrongItem: 'Yanlış ürün',
    noItem: 'Ürün gelmedi',
  },
  en: {
    noReason: 'No reason',
    damagedItem: 'Damaged item',
    wrongItem: 'Wrong item',
    noItem: 'Ürün gelmedi',
  },
};

export { languagesGlobal, languagesForms, languagesHeadings, languagesButtons, languagesOptions };
