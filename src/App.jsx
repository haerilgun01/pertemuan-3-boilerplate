import './App.css'
import UsersController from './todos/UsersController'
import formatUser from './todos/FormatUser'
import FindByName from './todos/FindByName'
import filterByMajor from './todos/FilterByMajor'


function App() {
  return (
    <>
      <UsersController />
      <FormatUser/>
      <FindByName />
      <FilterByMajor/>
    </>
  )
}

export default App
