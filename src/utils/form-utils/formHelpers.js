// Get file size and name for database
// Gets a FileList object as parameter
// const getFileInfoOnly = (fileList) => {
//   const fileKeys = Object.keys(fileList);
//   const fileArray = fileKeys.map((key) => fileList[key]);

//   // Create a new object with name and size
//   return fileArray.reduce((prevFile, currentFile, index) => {
//     const { name, size } = currentFile;
//     return { ...prevFile, [index]: { name, size } };
//   }, {});
// };

// Get only file list objects length.
// No need for files anyway
const getFileLengthOnly = (fileList) => fileList.length;

const modifyReturnFormData = (data) => {
  // Divide files and rest of the data
  let { ticketFile } = data;

  // Get file size and names from file data
  ticketFile = getFileLengthOnly(ticketFile);

  // Creation and modify date
  const ticketCreatedAt = new Date();
  const ticketModifiedAt = new Date();
  const ticketStatus = 'pending';
  const ticketResponseMessage = 'Süreç başlatıldı.';

  // Return a new object for database
  return {
    ...data,
    ticketFile,
    ticketCreatedAt,
    ticketModifiedAt,
    ticketStatus,
    ticketResponseMessage,
  };
};

export default modifyReturnFormData;
