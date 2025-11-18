import { useEffect, useState } from 'react'
import { employeesData } from '../../mockData/EmployeeMockData'
import List from '../List/List'
import Search from '../Search/Search'

const Employees = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(employeesData);

  useEffect(() => {
    const result = employeesData.filter((emp) =>
      emp.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(result);
  }, [search]);


  return (
    <div className='container'>
      <h2>Employees</h2>
      <Search setSearch={setSearch} />
      <List data={filteredData} />
    </div>
  )
}

export default Employees