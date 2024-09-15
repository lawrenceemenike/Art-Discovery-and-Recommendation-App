import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/artworksSlice';

function Sidebar() {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.artworks.filters);

  const handleFilterChange = (e) => {
    dispatch(setFilter({ [e.target.name]: e.target.value }));
  };

  return (
    <aside className="sidebar">
      <h2>Filters</h2>
      <form>
        <label>
          Type:
          <select name="type" value={filters.type} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="painting">Painting</option>
            <option value="sculpture">Sculpture</option>
            <option value="photography">Photography</option>
          </select>
        </label>
        <label>
          Period:
          <select name="period" value={filters.period} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="renaissance">Renaissance</option>
            <option value="modern">Modern</option>
            <option value="contemporary">Contemporary</option>
          </select>
        </label>
      </form>
      <h2>Recommendations</h2>
      <ul className="recommendations">
        {/* Recommendations will be populated here */}
      </ul>
    </aside>
  );
}

export default Sidebar;