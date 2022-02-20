import React from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table'

class Report extends React.Component { 
  constructor(props) { 
      super(props); 
      this.state = { countActiveState: 0, countInactiveState: 0, };
  } 

  componentDidMount() {
  let countActive  = 0;
  let countInactive = 0;
  
  axios.get("<BASE_URL>/wp-json/wp/v2/plugins", {
    auth: {
      username: process.env.REACT_APP_USERNAME,
      password: process.env.REACT_APP_CLIENT_SECRET
    }
  })
  .then(res => {
      const plugins = res.data;
      for(let key in plugins) {
        if(plugins[key].status === "active") {
          countActive++;
          this.setState({countActiveState: countActive}); 
        }
        else{
          countInactive++;
          this.setState({countInactiveState: countInactive}); 
        }
    }
    })
    .catch(error => {
      alert("Something went wrong. Try again later.");
      console.log(error);
   })
  }

  render() { 
      return ( 
          <Table striped bordered hover >
              <thead>
                  <tr>
                  <th>Status</th>
                  <th>Plugin Amount</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                  <th>Active</th>
                  <td>{this.state.countActiveState}</td>
                  </tr>
                  <tr>
                  <th>Inactive</th>
                  <td>{this.state.countInactiveState}</td>
                  </tr>
              </tbody>
          </Table>
      ); 
  } 
} 

export default Report;
