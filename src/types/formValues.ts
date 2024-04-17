export type FilterValues = {
  search: string;
  options: string[];
  form: string;
};

export type BookFormValues = {
  name: string;
  email: string;
  dates: [Date | null, Date | null];
  comment: string;
};
