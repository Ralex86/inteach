// @flow
import React from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";

import * as ModulesAction from "../../actions/modules";

import ModulesList from "../../components/ModulesList";

type Modules = any;

type OwnProps = {};

type Props = OwnProps & {
  modules: Array<Modules>,
  isFetchingModules: boolean,
  getModules: Function
};

class ModuleScene extends React.Component<Props> {
  componentDidMount() {
    this.props.getModules();
  }
  render() {
    const { modules, isFetchingModules } = this.props;
    return (
      <RootStyled>
        <ModulesList modules={modules} isFetching={isFetchingModules} />
      </RootStyled>
    );
  }
}

const RootStyled = styled.div`
  display: flex;
`;

const mapStateToProps = state => {
  const { modules } = state;
  return {
    modules: modules.modules,
    isFetchingModules: modules.isFetchingModules
  };
};

const mapDispatchToProps = {
  getModules: ModulesAction.getModules
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModuleScene);
