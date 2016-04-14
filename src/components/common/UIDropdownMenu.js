import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import {Carousel, CarouselItem} from 'react-bootstrap';
import DocumentTitle from 'react-document-title';

import { LoginLink } from 'react-stormpath';

import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';

var ModalBtnStyle = {
    paddingLeft: '0%',
    paddingLeft: '0%',
    //backgroundColor: 'red',
    width: '50%'
};

export default class UIDropdownMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 2};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <DropDownMenu autoWidth={false} style={ModalBtnStyle} value={this.state.value} onChange={this.handleChange}>
        <MenuItem value={1} primaryText="Never" />
        <MenuItem value={2} primaryText="Every Night" />
        <MenuItem value={3} primaryText="Weeknights" />
        <MenuItem value={4} primaryText="Weekends" />
        <MenuItem value={5} primaryText="Weekly" />
      </DropDownMenu>
    );
  }
}
