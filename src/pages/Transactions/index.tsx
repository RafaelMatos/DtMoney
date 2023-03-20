import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TramsactionsContainer,TransctionsTable, PriceHighlight } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TramsactionsContainer>
        <TransctionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
              <PriceHighlight variant="income">
                  R$ 12.000,00
                  </PriceHighlight>
              </td>
              <td>Venda</td>
              <td>20/03/2022</td>
            </tr>
            <tr>
              <td width="50%">Hambúrguer</td>
              <td>
                <PriceHighlight variant="outcome">
                  - R$ 59,00
                </PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>20/03/2022</td>
            </tr>
          </tbody>
        </TransctionsTable>
      </TramsactionsContainer>
      <div>Transações</div>
    </div>
  );
}
