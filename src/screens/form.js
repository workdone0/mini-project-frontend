import React, { Component } from 'react';

export class form extends Component {
    constructor(props){
        super(props)

        this.state ={

                reason:'Club Purposes'
        }
    }

    handleReasonChange =event => {
        this.setState({
            reason:event.target.value
        })
    }
    render() {
        return (
           <form>
               <div>
               <label>Reason:</label>
              <select value={this.state.reason} onChange={this.handleReasonChange}>
                  <option value="Club purposes">Club Purposes</option>
                  <option value="Seminars">Seminars</option>
                  <option value="Workshops">Workshops</option>
              </select>
              </div>

              <div>
               <label>time:</label>
              <select value={this.state.reason} onChange={this.handleReasonChange}>
                  <option value="">5:00-6:00 PM</option>
                  <option value="">6:00-7:00 PM</option>
                  <option value="W">7:00-8:00 PM</option>
              </select>
              </div>

              <div>
                  <button type="submit">Submit</button>
              </div>
           </form>
        )
    }
}

export default form

