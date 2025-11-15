"use client";

import { useState } from "react";

const PRICE_PER_NIGHT = 2499;

export default function Calendar() {
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;

    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays > 0 ? diffDays : 0;
  };

  const nights = calculateNights();
  const totalPrice = nights * PRICE_PER_NIGHT;
  const serviceFee = Math.round(totalPrice * 0.1);
  const grandTotal = totalPrice + serviceFee;

  // Get today's date in YYYY-MM-DD format for min attribute
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="space-y-4">
      {/* Date Inputs */}
      <div className="border border-gray-300 rounded-lg overflow-hidden">
        <div className="grid grid-cols-2">
          <div className="border-r border-gray-300 p-3">
            <label className="block text-xs font-semibold text-gray-900 mb-1">
              CHECK-IN
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              min={today}
              className="w-full text-sm text-gray-700 outline-none cursor-pointer"
            />
          </div>
          <div className="p-3">
            <label className="block text-xs font-semibold text-gray-900 mb-1">
              CHECK-OUT
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              min={checkIn || today}
              className="w-full text-sm text-gray-700 outline-none cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Pricing Breakdown */}
      {nights > 0 && (
        <div className="space-y-3 pt-4 border-t border-gray-200">
          <h4 className="font-semibold text-gray-900">Price Details</h4>

          <div className="space-y-2">
            <div className="flex justify-between text-gray-700">
              <span>₹{PRICE_PER_NIGHT} × {nights} {nights === 1 ? 'night' : 'nights'}</span>
              <span>₹{totalPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Service fee</span>
              <span>₹{serviceFee.toLocaleString()}</span>
            </div>
          </div>

          <div className="pt-3 border-t border-gray-200">
            <div className="flex justify-between font-bold text-gray-900">
              <span>Total</span>
              <span>₹{grandTotal.toLocaleString()}</span>
            </div>
          </div>
        </div>
      )}

      {/* Info Message */}
      <div className="pt-4">
        <p className="text-sm text-gray-500 text-center">
          {nights > 0
            ? `Total for ${nights} ${nights === 1 ? 'night' : 'nights'}: ₹${grandTotal.toLocaleString()}`
            : "Select dates to see pricing"}
        </p>
      </div>

      {/* Note */}
      <div className="pt-2">
        <p className="text-xs text-gray-400 text-center">
          This is a demo. No actual booking will be made.
        </p>
      </div>
    </div>
  );
}
