import React from 'react';
import Table from 'react-bootstrap/Table'
import Spinner from 'react-bootstrap/Spinner'

function PluginTable(props) {
  if (props.plugins === null) {
    return <Spinner animation="border" />;
  }

  function renderHeader() {
    return (
      <tr>
        <th>Name</th>
        <th>Author</th>
        <th>Status</th>
        <th>Version</th>
      </tr>
    )
  }

  function renderBody(plugin) {
    return (
      <tr key={plugin.name}>
        <td>{plugin.name}</td>
        <td>{plugin.author}</td>
        <td>{plugin.status}</td>
        <td>{plugin.version}</td>
      </tr>
    );
  }

  return (
    <Table striped bordered hover>
      <thead>
        {renderHeader()}
      </thead>

      <tbody>
        {props.plugins.map((plugin) => renderBody(plugin))}
      </tbody>

    </Table>
  )

}

export default PluginTable

