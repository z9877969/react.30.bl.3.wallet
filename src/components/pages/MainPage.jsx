import { Link } from "react-router-dom";
import MainInfo from "../MainInfo/MainInfo";
import Button from "../_share/Button/Button";
import Section from "../_share/Section/Section";
import mainInfoData from "../../assets/mainInfoData.json";

const { balanceMainInfo, costsMainInfo, incomesMainInfo } = mainInfoData;

const btnStyle = {
  textDecoration: "none",
  display: "block",
  height: "40px",
  with: "180px",
  color: "white",
  backgroundColor: "grey",
};

const MainPage = () => {
  return (
    <Section>
      <h1>Журнал расходов</h1>
      <MainInfo
        btnTitle={"Add"}
        title="Расходы"
        dataMainInfo={costsMainInfo}
        transType="costs"
      />
      <MainInfo
        btnTitle={"Add"}
        title="Доходы"
        dataMainInfo={incomesMainInfo}
        transType="incomes"
      />
      <MainInfo
        btnTitle={"ShowBalance"}
        title="Баланс"
        dataMainInfo={balanceMainInfo}
      />

      <Link style={btnStyle} to="/period/costs">
        Все расходы
      </Link>
      <Link style={btnStyle} to="/period/incomes">
        Все доходы
      </Link>
    </Section>
  );
};

export default MainPage;
