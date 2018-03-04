import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import User from './User/User'

export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
  const expenseWord1 = expenseCount === 1
    ? `Es wird`
    : `Es werden`;
  const expenseWord2 = expenseCount === 1
    ? `Ausgabe`
    : `Ausgaben`;
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');

  return (
    <div className="page-header">
      <div className="content-container">
        <div className="page-header__first-row">
          <h1 className="page-header__title">
            {expenseWord1} <span>
              {expenseCount}
            </span> {expenseWord2} angezeigt - <span>
              {formattedExpensesTotal}
            </span>
          </h1>
          {/* <User/> */}
        </div>
        <div className="page-header__actions">
          <Link to="/create" className="btn btn--add">Ausgabe hinzufügen</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {expenseCount: visibleExpenses.length, expensesTotal: selectExpensesTotal(visibleExpenses)};
};

export default connect(mapStateToProps)(ExpensesSummary);
