import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCompaniesForSwitcher } from './selectors';
import { fetchCompanies, setCompany } from './actions';


class CompanySwitcher extends Component {
  componentDidMount() {
    this.props.fetchCompanies();
  }

  render() {
    const { companies, currentCompany, onChangeCompany } = this.props;
    return (
      <select onChange={onChangeCompany} value={currentCompany}>
        {companies.map(company => (
          <option value={company.id} key={company.id}>
            {company.title}
          </option>
        ))}
      </select>
    );
  }
}
const mapStateToProps = state => getCompaniesForSwitcher(state);

const mapDispatchToProps = dispatch => ({
  onChangeCompany: event => dispatch(setCompany(+event.target.value)),
  fetchCompanies: () => dispatch(fetchCompanies())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanySwitcher);
