import React from 'react';
import { connect } from 'react-redux';
import Table from '@/components/common/Table';
import tableColumnsName from './tableColumnsConfig';
import { getProjects, InitProjects } from './action';

class Projects extends React.Component {
  componentDidMount() {
    this.props.InitProjects();
  }

  render() {
    const filteredData = this.props.projects.filter(
      project => project.companyId === this.props.currentCompany
    );
    return (
      <div>
        Projects
        <Table columns={Object.values(tableColumnsName)} data={filteredData} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => getProjects(state);

const mapDispatchToProps = (dispatch, ownProps) => ({
  InitProjects: () => dispatch(InitProjects())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);
