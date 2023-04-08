export default function Calendar({ date }) {
   const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
   const startDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
   const weeks = Math.ceil((daysInMonth + startDay) / 7);

   const renderDays = () => {
      const rows = [];
      let cells = [];
      for (let day = 1; day <= daysInMonth; day++) {
         const currDate = new Date(date.getFullYear(), date.getMonth(), day);
         const dayOfWeek = currDate.getDay();
         const isWeekend = dayOfWeek === 6 || dayOfWeek === 0; // Сб и Вс

         // Добавляем класс для выходных дней
         const className = isWeekend ? 'weekend' : '';

         if (day === 1) {
            for (let i = 0; i < currDate.getDay() - 1; i++) {
               cells.push(<td key={`empty-${i}`}></td>);
            }
         }
         cells.push(<td key={day} className={className}>{day}</td>);
         if (currDate.getDay() === 0 || day === daysInMonth) {
            rows.push(<tr key={day}>{cells}</tr>);
            cells = [];
         }
      }
      return rows;
   };

   const renderWeeks = () => {
      const weeksArray = [];
      for (let i = 0; i < weeks; i++) {
         weeksArray.push(renderDays()[i]);
      }
      return (
         <div className="div">
            <table className="table">
               <thead>
                  <tr>
                     {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((weekday) => (
                        <th key={weekday}>{weekday}</th>
                     ))}
                  </tr>
               </thead>
               <tbody>{weeksArray}</tbody>
            </table>
         </div>
      );
   };

   return renderWeeks();
}




