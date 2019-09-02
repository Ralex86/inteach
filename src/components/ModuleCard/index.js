import React from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";

import * as ModulesAction from "../../actions/modules";

import Icon from "../Icon";

import * as Colors from "../../style/colors";

type Card = {
  id: string,
  title: string
};
type CoursesType = {
  id: string,
  title: string,
  cards: Array<Card>
};
type ModuleType = {
  id: string,
  name: string,
  courses: Array<CoursesType>
};
type Props = {
  module: ModuleType
};

class ModuleCard extends React.Component<Props> {
  renderHeader = (name: string, count: numner) => {
    return (
      <Header>
        <Name>{name}</Name>
        <Courses>
          <LessonsCount>{`${count} leçons`}</LessonsCount>
        </Courses>
      </Header>
    );
  };

  renderFooter = (index: number) => {
    return (
      <Footer>
        <Index>{`#${index + 1}`}</Index>
        <Icon
          style={{ width: "16px", height: "16px" }}
          name="gear"
          onClick={() => console.log("configure")}
        />
        <Icon
          style={{ width: "16px", height: "16px" }}
          name="trash"
          onClick={this.props.deleteModule}
        />
      </Footer>
    );
  };

  render() {
    const { module, index } = this.props;
    const coursesCount = module.courses.length;

    return (
      <RootStyled>
        {this.renderHeader(module.name, coursesCount)}
        {this.renderFooter(index)}
      </RootStyled>
    );
  }
}

const LessonsCount = styled.div``;

const Index = styled.div`
  text-align: left;
  font-size: 1.5rem;
  color: ${Colors.gray};
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

const Courses = styled.div`
  max-width: 98px;
  padding: 2px;
  border-radius: 8px 8px;
  background-color: ${Colors.green};
  color: ${Colors.white};
  font-size: small;
  text-align: center;
`;

const Name = styled.div`
  font-size: large;
  margin-bottom: 4px;
  font-size: 1.12rem;
`;

const RootStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
  width: 200px;
  padding: 8px;
  margin: 8px;
  background-color: ${Colors.white};
  box-shadow: 0 1px 9px 1px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 2px 12px 2px rgba(0, 0, 0, 0.25);
  }
`;

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteModule: () => dispatch(ModulesAction.deleteModule(ownProps.module.id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ModuleCard);
