export interface Address {
  addressId?: string;
  line1: string;
  line2: string;
  suburb: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
}

type Province = {
  name: string;
  code: string;
};

export type Country = {
  name: string;
  code: string;
  continent: string;
  filename: string;
  provinces: Province[];
};

export interface Countries {
  countries: Country[];
}

export type ViewAddressesResponeData = {
  data: Address[];
  meta?: {
    itemsPerPage: number;
    totalItems: number;
    currentPage: number;
    totalPages: number;
  };
  links?: {
    current: string,
    next: string,
    last: string,
  };
};
