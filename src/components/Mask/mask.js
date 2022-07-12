export const cpfMask = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

<<<<<<< HEAD

  export const phoneMask = (value) => {
    return value
        .replace(/\D/g, '') 
        .replace(/(\d{0})(\d)/, '$1($2') 
        .replace(/(\d{2})(\d)/, '$1)$2') 
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1')
  }

=======
export const phoneMask = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{0})(\d)/, "$1($2")
    .replace(/(\d{2})(\d)/, "$1)$2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{4})\d+?$/, "$1");
};
>>>>>>> 309ba9e6bafcd2b51401a95f0f82d4f0f54be1ba
