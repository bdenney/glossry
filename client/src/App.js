import React, {useState} from "react"
import ResourceForm from "./ResourceForm"
import Search from "./Search"
import ResourceList from "./ResourceList"

function App() {

  const [resourceList, setResourceList] = useState([])

  function onSearchResultsReceived(results) {
    setResourceList(results)
  }

  return (
    <div className="container">
      <header className="py-3 mb-3 border-bottom">
        <div className="container d-grid gap-3">
          <div className="row">
            <div className="col ">
              <img src={require("./images/logo.png")} />
            </div>
            <div className="col align-self-center" >
              <Search onSearch={onSearchResultsReceived} />
            </div>
          </div>
        </div>
      </header>
      <main className="row gx-5">
        <ResourceForm />
        <ResourceList resources={resourceList} />
      </main>
    </div>
  );
}

export default App;
