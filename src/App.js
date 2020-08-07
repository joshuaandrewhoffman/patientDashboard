import React from 'react';
import { ReactTabulator } from 'react-tabulator';
import { Header, Container, Dimmer, Loader } from 'semantic-ui-react'
import HeaderMenu from './HeaderMenu';
import columns from './Table/Constants';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import 'react-tabulator/lib/styles.css';
import 'react-tabulator/lib/css/semantic-ui/tabulator_semantic-ui.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    // Get the medical record data and populate our state with it
    fetch('http://localhost:3000/records')
      .then(response => response.json())
      .then(data => this.setState({ data, loading: false }));
  }

  ref = null;

  render() {
    return this.state.loading ? (<Loader active />) : (
      <div className="App">
        <HeaderMenu />
        <Container fluid className='main-container'>
          <Header textAlign='left' as='h1'>Patient Pre-visit Screening Dashboard</Header>
          <Header textAlign='left' as='h3'>Escalated Patients</Header>
          <ReactTabulator
            ref={ref => (this.ref = ref)}
            columns={columns}
            data={this.state.data}
            options={{
              pagination: "local",
              paginationSize: 5
            }}
            data-custom-attr="test-custom-attribute"
            className="custom-css-class"

          />
        </Container>
      </div>
    );
  }
}

export default App;
