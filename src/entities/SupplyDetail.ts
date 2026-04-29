import { Supplier } from "./Supplier";
import { Price } from "./Price";
import { SupplyDate } from "./SupplyDate";
import {
  ProductAvailabilityEnum,
  ProductAvailability,
} from "../codelists/ProductAvailability";
import { parseValue, parseType } from "../utils/parse";

export class SupplyDetail {
  constructor(json: any) {
    this.supplier = new Supplier(parseValue(json, "Supplier"));
    this.price = new Price(parseValue(json, "Price"));
    this.productAvailability = parseType(
      json,
      "ProductAvailability",
      ProductAvailability
    );

    this.supplyDate =
      (json.SupplyDate || []).map((sd) => new SupplyDate(sd)) || [];
  }

  supplyDate: SupplyDate[];
  supplier: Supplier;
  productAvailability: ProductAvailabilityEnum;
  price: Price;
}

// <SupplyDetail>
//     <Supplier>
//         <SupplierRole>03</SupplierRole>
//         <SupplierName>xx Media AB</SupplierName>
//         <Website>
//            <WebsiteLink>ftp://ftp.qa.xx.dk/yy.epub</WebsiteLink>
//         </Website>
//     </Supplier>
//     <SupplyDate>
//         <SupplyDateRole>08</SupplyDateRole>
//         <Date>20080201</Date>
//     </SupplyDate>
//     <ProductAvailability>20</ProductAvailability>
//     <Price>
//         <PriceType>05</PriceType>
//         <PriceAmount>55.00</PriceAmount>
//         <CurrencyCode>SEK</CurrencyCode>
//     </Price>
// </SupplyDetail>
