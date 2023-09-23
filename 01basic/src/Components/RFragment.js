import React from "react";
  
// Simple rendering with fragment syntax
class RFragment extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h2>Hello</h2>
  
                <p>How you doin'?</p>
            </React.Fragment>
        );
    }
}
  
export default RFragment;