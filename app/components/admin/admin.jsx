import React from 'react'
import { Link } from 'react-router'
import activeComponent from 'react-router-active-component'

const TabLink = activeComponent('li')

export default React.createClass({
  render: function () {
    return (
      <section className="section is-fullheight minus-nav">
        <div className="container">
          <div className="example">
            <div className="tabs">
              <ul>
                <TabLink to={"admin/concepts"} activeClassName="is-active">Concepts</TabLink>
                <TabLink to={"admin/questions"} activeClassName="is-active">Questions</TabLink>
                <TabLink to={"admin/lessons"} activeClassName="is-active">Lessons</TabLink>
              </ul>
            </div>
          </div>
          {this.props.children}

        </div>
      </section>
    )
  }
})