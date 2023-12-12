import { searchIcon } from '../assets/icons.jsx'

const SearchBar = () => (
  <div
    className="searchbar"
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '8px',
      backgroundColor: 'rgba(250, 250, 250, 1)',
      height: '39px',
      borderRadius: '18px',
      width: '220px',
      justifyContent: 'center',
    }}
  >
    {searchIcon}
    <input
      style={{
        width: '75%',
        height: '70%',
        border: 'none',
        outline: 'transparent',
        backgroundColor: 'transparent',
      }}
      type="text"
      placeholder="Search"
    />
  </div>
)

export default SearchBar
