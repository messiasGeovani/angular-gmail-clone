import {
  FoldersCategory,
  MailStatusCategory,
  MultipleFoldersCategory,
  OthersCategory,
} from '../types/search-categories.type';

type Size = {
  order: 'greater than' | 'less than';
  measureNumber: number;
  measureType: 'MB' | 'KB' | 'Bytes';
};

type DateRangeValues =
  | '1 day'
  | '3 days'
  | '1 week'
  | '2 weeks'
  | '1 month'
  | '2 months'
  | '6 months'
  | '1 year';

type DateWithin = {
  range: DateRangeValues;
  date: Date;
};

export class SearchFieldsModel {
  from?: string;
  to?: string;
  subject?: string;
  hasTheWords?: string;
  doesntHave?: string;
  size?: Size;
  dateWhithin?: DateWithin;
  searchIn?:
    | FoldersCategory
    | MultipleFoldersCategory
    | MailStatusCategory
    | OthersCategory;
  hasAttachment?: boolean;
  includeChats?: boolean;
}
