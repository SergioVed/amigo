export const PATHS = {
    login: "/login",
    admin: "/admin"
} as const

export const ADMIN_PATHS = {
    teachers: "teachers",
    feedback: "feedback",
    price: "price",
    ceo: "ceo",
} as const

export const ADMIN_FULL_PATHS = {
  teachers: `${PATHS.admin}/${ADMIN_PATHS.teachers}`,
  feedback: `${PATHS.admin}/${ADMIN_PATHS.feedback}`,
  price: `${PATHS.admin}/${ADMIN_PATHS.price}`,
  ceo: `${PATHS.admin}/${ADMIN_PATHS.ceo}`,
} as const;