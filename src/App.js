import classes from "./App.module.css";
import CardInfoWrapper from "./components/Card-Info/CardInfoWrapper";
import CardsInfo from "./components/Card-Info/CardsInfo";
import CardInfoContainer from "./components/Card-Info/CardInfoContainer";
import { cardsInfo } from "./db/cardsInfo";

const App = () => {
  return (
    <CardInfoContainer>
      {cardsInfo.map((cardInfo) => {
        return (
          <CardInfoWrapper key={cardInfo.id}>
            <CardsInfo
              img={cardInfo.img}
              title={cardInfo.title}
              strong={cardInfo.strong}
              subtitle={cardInfo.subtitle}
              buttonLabel={cardInfo.buttonLabel}
              buttonDisabled={cardInfo.buttonDisabled}
              ></CardsInfo>
          </CardInfoWrapper>
        );
      })
      }

    </CardInfoContainer>
  );
};

export default App;
 