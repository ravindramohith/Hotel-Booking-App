import {
    CHECK_BOOKING_RESET,
    CHECK_BOOKING_FAILURE,
    CHECK_BOOKING_REQUEST,
    CHECK_BOOKING_SUCCESS,
    BOOKED_DATES_SUCCESS,
    BOOKED_DATES_FAILURE,
    MY_BOOKINGS_FAILURE,
    MY_BOOKINGS_SUCCESS,
    GET_BOOKING_FAILURE,
    GET_BOOKING_SUCCESS,
    CLEAR_ERRORS
} from "../constants/bookingConstants";

export const checkBookingReducer = (state = { available: null }, action) => {
    switch (action.type) {
        case CHECK_BOOKING_REQUEST:
            return {
                ...state,
                loading: true
            };
        case CHECK_BOOKING_SUCCESS:
            return {
                available: action.payload,
                loading: false
            };
        case CHECK_BOOKING_FAILURE:
            return {
                loading: false,
                error: action.payload
            }

        case CHECK_BOOKING_RESET:
            return {
                loading: false,
                available: null
            }
        case CLEAR_ERRORS:
            return { error: null, ...state }
        default:
            return { ...state }
    }
}

export const bookedDatesReducer = (state = { dates: [] }, action) => {
    switch (action.type) {
        case BOOKED_DATES_SUCCESS:
            return {
                dates: action.payload.bookedDates,
                loading: false
            };
        case BOOKED_DATES_FAILURE:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return { error: null, ...state }
        default:
            return { ...state }
    }
}

export const myBookingsReducer = (state = { myBookings: [] }, action) => {
    switch (action.type) {
        case MY_BOOKINGS_SUCCESS:
            return {
                myBookings: action.payload.myBookings,
                loading: false
            };
        case MY_BOOKINGS_FAILURE:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return { error: null, ...state }
        default:
            return { ...state }
    }
}

export const getBookingReducer = (state = { booking: {} }, action) => {
    switch (action.type) {
        case GET_BOOKING_SUCCESS:
            return {
                booking: action.payload.booking,
                loading: false
            };
        case GET_BOOKING_FAILURE:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return { error: null, ...state }
        default:
            return { ...state }
    }
}
