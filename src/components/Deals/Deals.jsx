import { DealsContainer, DealsList, DealsItem } from "./Deals.styled";
import { SectionTitle } from "components/common/titles.styled";
import { DealCard } from "./DealCard/DealCard";

export const Deals = ({ data }) => {
  console.log(data);
  return (
    <DealsContainer>
      <SectionTitle>Monthly Deals</SectionTitle>
      <DealsList>
        {data.map(item => {
          return (
            <DealsItem key={item._id}><DealCard item={item} /></DealsItem>
          );
        })}
      </DealsList>
    </DealsContainer>
  );
}