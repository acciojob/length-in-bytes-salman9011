const byteSize = (str) => {
  // Create a Blob object with the given string
  const blob = new Blob([str]);

  // Get the size of the Blob object in bytes
  const sizeInBytes = blob.size;

  return sizeInBytes;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
