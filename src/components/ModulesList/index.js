// @flow
import * as React from "react";
import ModuleCard from "../ModuleCard";
import styled from "@emotion/styled";

type ReactElement = React.Element<*>;
type Card = {
  id: string,
  title: string
};
type Courses = {
  id: string,
  title: string,
  cards: Array<Card>
};
type Module = {
  id: string,
  name: string,
  courses: Array<Courses>
};
type Props = {
  modules: Array<Module>,
  isFetching: boolean
};

class ModulesList extends React.Component<Props> {
  renderList = (modules: Array<Module>): Array<ModuleCard> => {
    return modules.map((module: Module, index: number): ReactElement => (
      <ModuleCard index={index} key={module.id} module={module} />
    ));
  };

  render() {
    const { modules, isFetching } = this.props;

    if (isFetching) {
      return <div>loading...</div>;
    }

    return <RootStyled>{this.renderList(modules)}</RootStyled>;
  }
}

const RootStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default ModulesList;
