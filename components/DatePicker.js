import { useState } from 'react';
import Calendar from './Calendar';

export default function DatePicker() {
   const [selectedDate, setSelectedDate] = useState(new Date());
   const [selectedMonth, setSelectedMonth] = useState(selectedDate.getMonth());
   const [selectedYear, setSelectedYear] = useState(selectedDate.getFullYear());
   const [showCalendar, setShowCalendar] = useState(false);

   const handleDateChange = (event) => {
      setSelectedDate(new Date(event.target.value));
   };

   const handleMonthChange = (event) => {
      setSelectedMonth(parseInt(event.target.value));
   };

   const handleYearChange = (event) => {
      setSelectedYear(parseInt(event.target.value));
   };

   const handleButtonClick = () => {
      setShowCalendar(true);
   };

   return (
      <div className='div'>
         <label htmlFor="month">Выберете месяц:</label>
         <select className='select' id="month" value={selectedMonth} onChange={handleMonthChange}>
            <option value="0">Январь</option>
            <option value="1">Февраль</option>
            <option value="2">Март</option>
            <option value="3">Апрель</option>
            <option value="4">Май</option>
            <option value="5">Июнь</option>
            <option value="6">Июль</option>
            <option value="7">Август</option>
            <option value="8">Сентябрь</option>
            <option value="9">Октябрь</option>
            <option value="10">Ноябрь</option>
            <option value="11">Декабрь</option>
         </select>

         <label htmlFor="year">Выберете год:</label>
         <input className='input-number' type="number" id="year" value={selectedYear} onChange={handleYearChange} />

         <button className='btn' onClick={handleButtonClick}>Показать календарь</button>

         {showCalendar && <Calendar date={new Date(selectedYear, selectedMonth)} />}
      </div>
   );
}






