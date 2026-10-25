import { ceos, teachers, feedbacks, prices } from "../data"

// Keep the existing async interface while serving bundled content without a backend.
export const getCeo = async () => {
    const ceo = ceos.find(({ id }) => id === 1)
    if (!ceo) throw new Error("Founder information is missing from data.ts")
    return ceo
}

export const getTeachers = async () => teachers
export const getFeedbacks = async () => feedbacks
export const getPrices = async () => prices
