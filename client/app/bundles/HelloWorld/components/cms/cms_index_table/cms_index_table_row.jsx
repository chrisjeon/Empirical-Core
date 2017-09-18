import _ from 'underscore'
import React from 'react'


export default React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired
  },

  edit: function () {
    this.props.actions.edit(this.props.data.resource);
  },

  delete: function () {
    var confirm = window.confirm('are you sure you want to delete ' + this.props.data.resource[this.identifier()] + '?');
    if (confirm) {
      this.props.actions.delete(this.props.data.resource);
    }
  },

  identifier: function () {
    return this.props.data.identifier || 'name'
  },

  render: function () {
    var edit_and_delete;
    edit_and_delete = _.reduce(['edit', 'delete'], function (acc, ele) {
      if (this.props.actions[ele]) {
        var el = <div key={ele} className='col-xs-6' onClick={this[ele]}>{ele}</div>
        return _.chain(acc).push(el).value();
      } else {
        return acc
      }
    }, [], this);

    return (
      <tr>
        <td>
          {this.props.data.resource[this.identifier()]}
        </td>
        <td>
          <div className='row'>
            {edit_and_delete}
          </div>
        </td>
      </tr>
    );
  }
})
