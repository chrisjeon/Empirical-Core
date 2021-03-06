import React from 'react';

export default React.createClass({

  render() {
    return (
      <div className="admin-dashboard-top">
        <div className="representative">
          <div className="flex-row rep-info">
            <img src="https://assets.quill.org/images/headshots/thumb-becca.jpg" alt="becca thumb" />
            <div>
              <h4 className="representative-header">Your Personal Representative</h4>
              <h3>Becca Garrison</h3>
              <p>{"As your Quill representative, I'm here to help!"}</p>
              <div className="representative-contact">
                <p>646-442-1095</p>
                <p>
                  <a className="green-link" href="mailto:becca@quill.org">becca@quill.org</a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  },

});
