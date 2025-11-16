"use client";

import { useState } from "react";

const PRICE_PER_NIGHT = 2499;

export default function Calendar() {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [hoverDate, setHoverDate] = useState<Date | null>(null);
  const [selectingCheckOut, setSelectingCheckOut] = useState(false);

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const diffTime = checkOut.getTime() - checkIn.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const nights = calculateNights();
  const totalPrice = nights * PRICE_PER_NIGHT;
  const serviceFee = Math.round(totalPrice * 0.1);
  const grandTotal = totalPrice + serviceFee;

  const handleDateClick = (date: Date) => {
    if (!checkIn || (checkIn && checkOut)) {
      // Set check-in date
      setCheckIn(date);
      setCheckOut(null);
      setSelectingCheckOut(true);
    } else if (selectingCheckOut && date > checkIn) {
      // Set check-out date
      setCheckOut(date);
      setSelectingCheckOut(false);
    } else if (selectingCheckOut && date <= checkIn) {
      // Reset if date is before check-in
      setCheckIn(date);
      setCheckOut(null);
    }
  };

  const isDateInRange = (date: Date) => {
    if (!checkIn) return false;
    if (checkOut) {
      return date > checkIn && date < checkOut;
    }
    if (hoverDate && selectingCheckOut && hoverDate > checkIn) {
      return date > checkIn && date < hoverDate;
    }
    return false;
  };

  const isCheckIn = (date: Date) => {
    return checkIn && date.toDateString() === checkIn.toDateString();
  };

  const isCheckOut = (date: Date) => {
    return checkOut && date.toDateString() === checkOut.toDateString();
  };

  const generateCalendarDays = () => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= lastDay.getDate(); day++) {
      days.push(new Date(currentYear, currentMonth, day));
    }
    
    return days;
  };

  const days = generateCalendarDays();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const getPreviewNights = () => {
    if (!checkIn || !hoverDate || !selectingCheckOut || hoverDate <= checkIn) return 0;
    const diffTime = hoverDate.getTime() - checkIn.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const previewNights = getPreviewNights();
  const previewTotal = previewNights * PRICE_PER_NIGHT;

  return (
    <div className="space-y-4">
      {/* Date Display */}
      <div className="border border-gray-300 rounded-lg overflow-hidden">
        <div className="grid grid-cols-2">
          <div className="border-r border-gray-300 p-2 sm:p-3">
            <label className="block text-xs font-semibold text-black mb-1">
              CHECK-IN
            </label>
            <div className="text-xs sm:text-sm text-black">
              {checkIn ? checkIn.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Add date'}
            </div>
          </div>
          <div className="p-2 sm:p-3">
            <label className="block text-xs font-semibold text-black mb-1">
              CHECK-OUT
            </label>
            <div className="text-xs sm:text-sm text-black">
              {checkOut ? checkOut.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Add date'}
            </div>
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div className="border border-gray-200 rounded-lg p-2 sm:p-4">
        <div className="text-center text-sm sm:text-base font-semibold mb-3 sm:mb-4 text-black">
          {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </div>

        {/* Weekday headers */}
        <div className="grid grid-cols-7 gap-0.5 sm:gap-1 mb-2">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
            <div key={day} className="text-xs font-semibold text-gray-600 text-center p-1 sm:p-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar days */}
        <div className="grid grid-cols-7 gap-0.5 sm:gap-1">
          {days.map((date, index) => {
            if (!date) {
              return <div key={`empty-${index}`} className="p-1 sm:p-2" />;
            }
            const isPast = date < today;
            const inRange = isDateInRange(date);
            const isStart = isCheckIn(date);
            const isEnd = isCheckOut(date);
            return (
              <button
                key={index}
                disabled={isPast}
                onClick={() => !isPast && handleDateClick(date)}
                onMouseEnter={() => setHoverDate(date)}
                onMouseLeave={() => setHoverDate(null)}
                className={`
                  p-1 sm:p-2 text-xs sm:text-sm relative min-h-[32px] sm:min-h-[36px]
                  ${isPast ? 'text-gray-300 cursor-not-allowed' : 'text-black cursor-pointer hover:border hover:border-black'}
                  ${inRange ? 'bg-gray-100' : ''}
                  ${isStart || isEnd ? 'bg-black text-white font-semibold rounded-full' : 'rounded-full'}
                  ${!isPast && !isStart && !isEnd ? 'hover:bg-gray-50' : ''}
                `}
              >
                {date.getDate()}
              </button>
            );
          })}
        </div>
      </div>

      {/* Preview or Price Breakdown */}
      {(nights > 0 || (selectingCheckOut && previewNights > 0)) && (
        <div className="space-y-3 pt-4 border-t border-gray-200">
          <h4 className="text-sm sm:text-base font-semibold text-black">Price Details</h4>

          <div className="space-y-2">
            <div className="flex justify-between text-xs sm:text-sm text-black">
              <span>₹{PRICE_PER_NIGHT} × {nights || previewNights} {(nights || previewNights) === 1 ? 'night' : 'nights'}</span>
              <span>₹{(nights ? totalPrice : previewTotal).toLocaleString()}</span>
            </div>
            {nights > 0 && (
              <>
                <div className="flex justify-between text-xs sm:text-sm text-black">
                  <span>Service fee</span>
                  <span>₹{serviceFee.toLocaleString()}</span>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <div className="flex justify-between text-sm sm:text-base font-bold text-black">
                    <span>Total (including GST)</span>
                    <span>₹{grandTotal.toLocaleString()}</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Info Message */}
      {nights === 0 && !selectingCheckOut && (
        <div className="pt-4">
          <p className="text-xs sm:text-sm text-black text-center">
            Select dates to see pricing
          </p>
        </div>
      )}
    </div>
  );
}
