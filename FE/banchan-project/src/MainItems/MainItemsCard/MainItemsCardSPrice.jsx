import * as S from "../MainItemsStyles";
import * as CS from "../../Styles/commonStyles";

const MainItemsCardSPrice = ({ sPrice }) => {
  return (
    <S.MainItemsCardSPriceWrapper>
      <CS.ColorFont.BLACK_L_BOLD>
        {sPrice.toLocaleString()}원
      </CS.ColorFont.BLACK_L_BOLD>
    </S.MainItemsCardSPriceWrapper>
  );
};

export default MainItemsCardSPrice;
