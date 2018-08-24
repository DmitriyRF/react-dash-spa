/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Sidebar.css';

import * as companyActions from '../../store/company/actions';
import * as companySelectors from '../../store/company/reducer';

class Sidebar extends Component {
  componentDidMount() {
    this.props.dispatch(companyActions.fetchCompanies());
  }

  changeCompany(event) {
    this.props.dispatch(companyActions.setCompany(+event.target.value));
  }

  render() {
    const { companies, currentCompany } = this.props;
    return (
      <div className="sidebar">
        <div className="menu">
          <select
            value={currentCompany}
            onChange={this.changeCompany.bind(this)}
          >
            {companies.map(company => (
              <option value={company.id} key={company.id}>
                {company.title}
              </option>
            ))}
          </select>
          <br />
          <Link to="/employees"> Employees</Link>
          <Link to="/projects"> Projects</Link>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const companies = companySelectors.getCompaniesForSelect(state);
  const currentCompany = companySelectors.getCurrentCompany(state);
  return {
    companies,
    currentCompany
  };
}

export default connect(mapStateToProps)(Sidebar);
