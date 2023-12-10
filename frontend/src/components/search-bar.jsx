import { searchIcon } from '../assets/icons.jsx'

const SearchBar = ({ showSearchBar }) => (
  <div
    className={
      'absolute bg-white w-full left-0 top-full mt-0.5 border-b border-grey py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto md:opacity-100 md:pointer-events-auto ' +
      (showSearchBar
        ? 'opacity-100 pointer-events-auto'
        : 'opacity-0 pointer-events-none duration-100')
    }
  >
    <input
      type="text"
      placeholder="Search"
      className="w-full md:w-auto bg-grey p-2.5 pl-6 pr-[12%] md:pr-4 rounded-full placeholder:text-dark-grey md:pl-14"
    />
    <div className="absolute right-[8%] md:pointer-events-none md:left-3 top-1/2 -translate-y-1/2 text-dark-grey">
      {searchIcon}
    </div>
  </div>
)

export default SearchBar
