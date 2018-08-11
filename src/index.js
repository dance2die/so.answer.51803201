import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";
import * as _ from "lodash";

// Import React Table
import ReactTable from "react-table";
import "./custom-react-table.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }

  loadMore = () => {
    let updatedData = _.cloneDeep(this.state.data);
    updatedData.push(...makeData());
    this.setState({
      data: updatedData
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <div className="some-fixed-page-header">SOME PAGE HEADER</div>

        <ReactTable
          data={data}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "First Name",
                  accessor: "firstName"
                },
                {
                  Header: "Last Name",
                  id: "lastName",
                  accessor: d => d.lastName
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Age",
                  accessor: "age"
                },
                {
                  Header: "Status",
                  accessor: "status"
                }
              ]
            },
            {
              Header: "Stats",
              columns: [
                {
                  Header: "Visits",
                  accessor: "visits"
                }
              ]
            }
          ]}
          defaultPageSize={100}
          showPagination={false}
          className="-striped -highlight"
          style={{
            height: "50vh"
          }}
        />
        <br />
        <button type="button" onClick={this.loadMore}>
          Load more
        </button>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
