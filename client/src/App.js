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
    <div>
      <header>
        <h1>Glossry</h1>
        <Search onSearch={onSearchResultsReceived} />
      </header>
      <main>
        <ResourceForm />
        <ResourceList resources={resourceList} />
      </main>
    </div>
  );
}

export default App;
