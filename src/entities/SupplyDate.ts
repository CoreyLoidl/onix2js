import {
  SupplyDateRoleEnum,
  SupplyDateRole
} from "../codelists/SupplyDateRole";
import { parseType, parseValue } from "../utils/parse";
import { parseOnixDate } from "../utils/date";

export class SupplyDate {
  constructor(json: any) {
    this.supplyDateRole = parseType(json, "SupplyDateRole", SupplyDateRole);
    this.date = parseOnixDate(parseValue(json, "Date"));
  }

  supplyDateRole: SupplyDateRoleEnum;
  date: Date
}

// <SupplyDate>
//     <SupplyDateRole>08</SupplyDateRole>
//     <Date>20080201</Date>
// </SupplyDate>
