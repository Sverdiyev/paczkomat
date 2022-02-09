export const phoneIsOk = (phone: string) => {
  if (phone.trim() === '') return false;
  if (phone.trim().length !== 9) return false;

  return true;
  // ) if (isNaN(phone)) return false;
  // return phone.toString.length === 9 ? true : false;
};

export const codeIsOk = (code: string) => {
  if (code.trim() === '') return false;
  if (code.trim().length !== 4) return false;
  return true;
};
