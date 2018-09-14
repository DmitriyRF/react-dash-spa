const getCompaniesForSwitcher = state => {
  const companies = state.company.items.map(company => ({
    id: company.id,
    title: company.title
  }));
  return {
    companies,
    currentCompany: state.company.current
  };
};

const getCurrentCompanyObject = state => {
  return state.company.items.find(
    company => company.id === state.company.current
  );
};
const getCurrentCompany = state => {
  return state.company.current;
};

export { getCompaniesForSwitcher, getCurrentCompany, getCurrentCompanyObject };
