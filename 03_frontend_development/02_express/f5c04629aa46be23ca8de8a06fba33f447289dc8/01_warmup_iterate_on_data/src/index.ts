// Code here
type CustomerType = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
};

export function getEmails(dataCustomer: CustomerType[]): string[] {
  const arrResult: string[] = [];
  dataCustomer.forEach((element) => {
    arrResult.push(element.email);
  });
  return arrResult;
}
