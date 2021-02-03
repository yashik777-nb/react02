import React from "react";
import IssuesAPI from "../../data/IssuesAPI";
import IssuesList from "../IssuesComponent/IssuesList/IssuesList";

export default class AllIssuesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: [],
    };
  }

  render() {
    return <IssuesList issues={this.state.issues} />;
  }

  componentDidMount() {
    this.setState({ issues: IssuesAPI.getAllIssues() });
  }
}
