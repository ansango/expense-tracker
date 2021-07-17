
const ExpensesFilter = ({ onChangeFilter, selected }) => {
  const dropdownChangeHandler = (event) => {
    onChangeFilter(event.target.value);
  };

  return (
    <div className="px-4">
      <div className="flex w-full items-center justify-between my-4">
        <label className="font-bold mb-2">Filter by year</label>
        <select class="py-2 bg-red-200 dark:bg-gray-800 border-0 px-12 rounded-lg font-bold"  value={selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
