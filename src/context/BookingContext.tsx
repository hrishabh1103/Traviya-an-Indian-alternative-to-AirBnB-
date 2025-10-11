import React, { createContext, useContext, useState } from 'react';

interface BookingDetails {
  propertyId: string;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  totalPrice: number;
}

interface BookingContextType {
  bookingDetails: BookingDetails | null;
  setBookingDetails: (details: BookingDetails) => void;
  clearBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bookingDetails, setBookingDetailsState] = useState<BookingDetails | null>(null);

  const setBookingDetails = (details: BookingDetails) => {
    setBookingDetailsState(details);
  };

  const clearBooking = () => {
    setBookingDetailsState(null);
  };

  return (
    <BookingContext.Provider
      value={{
        bookingDetails,
        setBookingDetails,
        clearBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
