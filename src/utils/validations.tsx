const emailPattern = '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$';

export const isValidEmail = (email: string) => email.match(emailPattern);
export const isValidSSN = (ssn: number) => ssn.toString().length === 10;
export const isValidMobileNo = (mobileNo: number) =>
  mobileNo.toString().length === 10;
export const isValidPassword = (password: string) => password.length >= 8;
