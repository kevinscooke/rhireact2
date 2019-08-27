import React, { Component } from 'react';
import { ReactiveBase,DataSearch,ResultCard } from '@appbaseio/reactivesearch';
import './App.css';
class App extends Component {
  render() {
    return (
      <ReactiveBase
        app="rhi"
        credentials="tDA9DBRL5:c4957533-2659-40df-ad8b-f1ba461a64b7"
      >
      <div className="navbar">
          <div className="logo">
            My Search Tool
          </div>
                    <DataSearch
                        componentId="mainSearch"
                        dataField={["part_number", "part_number.search",]}
                        queryFormat="and"
                        placeholder="Search here... (I've edited this)"
                        autosuggest={false}
                        className="datasearch"
                        innerClass={{
                          "input": "searchbox",
                          "list": "suggestionlist"
                        }}
                      />
      </div>
      <div className={"display"}>
          <div className={"leftSidebar"}>

          </div>
      </div>

      </ReactiveBase>
    );
  }
}
export default App;
