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
      <header className="row gx-5">
        <h1>Glossry</h1>
        <Search onSearch={onSearchResultsReceived} />
      </header>
      <main className="row gx-5">
        <ResourceForm />
        <ResourceList resources={resourceList} />
      </main>
    </div>
  );
}

export default App;
