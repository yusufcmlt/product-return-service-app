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
    startReturnProcess: 'İade Sürecini Başlat',
  },
  en: {
    newReturn: 'New Return',
    checkReturnStatus: 'Status of Your Return',
    homepage: 'Home',
    admin: 'Login',
    about: 'About',
    addFile: 'Add File',
    startReturnProcess: 'Start Return Process',
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
    createNewReturnTitle: 'Start a new return process',
  },
};
const languagesForms = {
  tr: {
    personalInfoTitle: '1-Kişisel Bilgileriniz',
    personalInfoSubtitle: 'Merak etmeyin aramızda kalacak :)',
    returnInfoTitle: '2-İadenizle ilgili bilgiler',
    returnInfoSubtitle: 'Ürününüzle yaşadığınız sorunun detaylarını yazın.',
    nameLabel: 'Adınız',
    lastNameLabel: 'Soyadınız',
    ageLabel: 'Yaşınız',
    idNumberLabel: 'TC No',
    telNumberLabel: 'Telefon',
    addressLabel: 'Adres',
    returnReasonLabel: 'İade nedeni',
    returnReasonDetailLabel: 'Yaşadığınız sorunun detayları.',
    addFileLabel: 'Fotoğraf, dosya vb ekleyin',
  },
  en: {
    personalInfoTitle: '1-Personal Information',
    personalInfoSubtitle: "Don't worry, just between us :)",
    returnInfoTitle: '2-Information About Your Problem',
    returnInfoSubtitle: 'Give us a bit more detail about your return',
    nameLabel: 'Name',
    lastNameLabel: 'Last name',
    ageLabel: 'Age',
    idNumberLabel: 'ID number',
    telNumberLabel: 'Phone Number',
    addressLabel: 'Address',
    returnReasonLabel: 'Return reason',
    returnReasonDetailLabel: 'Details of your problem',
    addFileLabel: 'Add photo(s), file(s) etc.',
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
