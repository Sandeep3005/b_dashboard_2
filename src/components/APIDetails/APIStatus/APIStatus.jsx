import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ReactTable from "react-table";
import Select from "react-select";
import styles from "./APIStatus.module.css";
import "react-table/react-table.css";

const data1 = [
  {
    apiName: "API 1",
    lastActive: "Now",
    status: "Active"
  },
  {
    apiName: "API 2",
    lastActive: "Now",
    status: "Active"
  },
  {
    apiName: "API 3",
    lastActive: "3 hours ago",
    status: "Down"
  },
  {
    apiName: "API 4",
    lastActive: "Now",
    status: "Active"
  },
  {
    apiName: "API 5",
    lastActive: "1 hour ago",
    status: "Down"
  },
  {
    apiName: "API 6",
    lastActive: "3 hours ago",
    status: "Down"
  }
];

export class APIStatus extends Component {
  constructor() {
    super();
    this.state = {
      data: data1,
      filtered: [],
      select2: undefined
    };
  }

  onFilteredChangeCustom = (value, accessor) => {
    console.log(
      "TCL: APIStatus -> onFilteredChangeCustom -> accessor",
      accessor
    );
    console.log("TCL: APIStatus -> onFilteredChangeCustom -> value", value);
    let filtered = this.state.filtered;
    console.log(
      "TCL: APIStatus -> onFilteredChangeCustom -> filtered",
      filtered
    );
    let insertNewFilter = 1;

    if (filtered.length) {
      filtered.forEach((filter, i) => {
        if (filter["id"] === accessor) {
          if (value === "" || !value.length) filtered.splice(i, 1);
          else filter["value"] = value;

          insertNewFilter = 0;
        }
      });
    }

    if (insertNewFilter) {
      filtered.push({ id: accessor, value: value });
      console.log(
        "TCL: APIStatus -> onFilteredChangeCustom -> accessor",
        accessor
      );
      console.log("TCL: APIStatus -> onFilteredChangeCustom -> value", value);
    }

    this.setState({ filtered: filtered, select2: "" });
    //alert(" We can check status again now if we want");
  };

  handleSubscribeRow = row => {
    console.log("TCL: APIStatus -> handleSubscribeRow -> row", row);
  };

  render() {
    const columns = [
      {
        Header: "API",
        accessor: "apiName" // String-based value accessors!
      },
      {
        Header: "Last Active",
        accessor: "lastActive",
        Cell: props => <span className="number">{props.value}</span> // Custom cell components!
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: props => (
          <span className="number">
            {props.value === "Active" ? (
              <div className={styles.active}>&nbsp;</div>
            ) : (
              <div className={styles.down} />
            )}
          </span>
        )
      },
      {
        Header: "",
        Cell: row => (
          <Fragment>
            <Button
              variant="outline-success"
              onClick={() => this.handleSubscribeRow(row.original)}
            >
              Subscribe
            </Button>
          </Fragment>
        )
      }
    ];
    return (
      <Container style={{ marginTop: "1em" }}>
        <Row>
          <Col md={12}>
            {/* <pre>{JSON.stringify(this.state.filtered, null, 2)}</pre> */}
          </Col>
        </Row>
        <Row>
          <Col md={4} style={{ marginBottom: "1em" }}>
            <Select
              style={{ width: "50%", marginBottom: "20px" }}
              onChange={entry => {
                console.log("TCL: APIStatus -> render -> entry", entry);
                this.setState({ select2: entry });
                this.onFilteredChangeCustom(entry.value, "apiName");
              }}
              value={this.state.select2}
              multi={true}
              options={this.state.data.map((o, i) => {
                console.log("TCL: APIStatus -> render -> i", i);
                console.log("TCL: APIStatus -> render -> o", o);

                return { id: i, value: o.apiName, label: o.apiName };
              })}
            />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <ReactTable
              data={data1}
              columns={columns}
              defaultPageSize={5}
              filterable
              filtered={this.state.filtered}
              onFilteredChange={(filtered, column, value) => {
                console.log("TCL: APIStatus -> render -> filtered", filtered);
                this.onFilteredChangeCustom(
                  value,
                  column.id || column.accessor
                );
              }}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default APIStatus;
