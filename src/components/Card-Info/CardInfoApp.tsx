import{ useState } from "react";
import CardInfoWrapper from "./CardInfoWrapper";
import CardInfo from "./CardInfo";
import CardInfoContainer from "./CardInfoContainer";
import { cardsInfo } from "../../db/cardsInfo";


interface Card {
  img: {
    path: string;
    text: string;
  };
  id: number;
  title: string;
  strong: string;
  subtitle: string;
  buttonLabel: string;
  buttonDisabled: boolean;
}

const CardInfoApp = (): JSX.Element => {  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cards, setCardInfo] = useState<Card[]>(cardsInfo.cards);
  return (
    <CardInfoContainer>
      {cards.map((card, id) => {
        return (
          <CardInfoWrapper key={id} orderTwo={card.buttonDisabled}>
            <CardInfo
              img={card.img}
              title={card.title}
              strong={card.strong}
              subtitle={card.subtitle}
              buttonLabel={card.buttonLabel}
              buttonDisabled={card.buttonDisabled}
            />
          </CardInfoWrapper>
        );
      })}
    </CardInfoContainer>
  );
};
export default CardInfoApp;
