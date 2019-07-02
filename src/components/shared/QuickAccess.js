import React from 'react';
import '../../App.css';
import $ from 'jquery';
import MenuData from '../../config/menu-data';
import { withRouter } from 'react-router-dom';

class QuickAccess extends React.Component {
  state = {
    name: '',
    value: ''
  };
  componentDidMount() {
    var a = this.props.match.path;
    console.log(a);
    let check = a.split('/')[1];
    console.log(a.split('/')[2]);

    for (let x in MenuData) {
      if (check == x) {
        this.setState({ name: MenuData[x]['name'] });
        this.setState({ value: MenuData[x]['value'] });
      }
    }
    $(function() {
      $('#vertical-menu').smartmenus();
    });
  }

  render() {
    if (this.state.value) {
      var data = this.state.value.map(each => {
        return (
          <li>
            <a href="#">
              {each} <span className="sub-arrow" />
            </a>{' '}
          </li>
        );
      });
    }
    return (
      <nav id="vertical-nav">
        <ul id="vertical-menu" className="sm sm-vertical sm-blue">
          <li>
            <a href="#">{this.state.name}</a>
          </li>
          <br />
          <br />

          {data}
        </ul>
      </nav>
    );
  }
}

export default withRouter(QuickAccess);
