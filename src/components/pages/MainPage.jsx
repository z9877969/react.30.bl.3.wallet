import MainInfo from "../MainInfo/MainInfo";
import Button from "../_share/Button/Button";
import Section from "../_share/Section/Section";
import mainInfoData from "../../assets/mainInfoData.json";

const { balanceMainInfo, costsMainInfo, incomesMainInfo } = mainInfoData;

const MainPage = ({ handleOpenTransaction }) => {
  return (
    <Section>
      <h1>Журнал расходов</h1>
      <MainInfo
        btnTitle={"Add"}
        title="Расходы"
        dataMainInfo={costsMainInfo}
        transType="costs"
        handleOpenTransaction={handleOpenTransaction}
        />
      <MainInfo
        btnTitle={"Add"}
        title="Доходы"
        dataMainInfo={incomesMainInfo}
        transType="incomes"
        handleOpenTransaction={handleOpenTransaction}
      />
      <MainInfo
        btnTitle={"ShowBalance"}
        title="Баланс"
        dataMainInfo={balanceMainInfo}
      />
      <Button title="Все расходы" />
      <Button title="Все доходы" />
    </Section>
  );
};

export default MainPage;
