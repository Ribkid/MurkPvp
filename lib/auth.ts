// Simple authentication mechanism that doesn't rely on Supabase Auth

// Predefined admin users with their specific passwords
const ADMIN_USERS = [
  {
    email: "ribkid@murkcraft.com",
    password: "Liamribs1",
    role: "admin",
  },
  {
    email: "acalrhys@gmail.com",
    password: "Liamribs1",
    role: "admin",
  },
]

export function isValidAdminUser(email: string): boolean {
  return ADMIN_USERS.some((user) => user.email.toLowerCase() === email.toLowerCase())
}

export function validateCredentials(email: string, password: string): boolean {
  // Check if email and password match one of the admin users
  return ADMIN_USERS.some((user) => user.email.toLowerCase() === email.toLowerCase() && user.password === password)
}

export function setAuthSession(email: string): void {
  // Store authentication in localStorage
  localStorage.setItem("adminAuth", "true")
  localStorage.setItem("adminEmail", email)
  localStorage.setItem("authTimestamp", Date.now().toString())
}

export function clearAuthSession(): void {
  localStorage.removeItem("adminAuth")
  localStorage.removeItem("adminEmail")
  localStorage.removeItem("authTimestamp")
}

export function checkAuthSession(): boolean {
  const isAuth = localStorage.getItem("adminAuth") === "true"
  const timestamp = localStorage.getItem("authTimestamp")

  // Session expires after 24 hours
  if (isAuth && timestamp) {
    const expiryTime = 24 * 60 * 60 * 1000 // 24 hours in milliseconds
    const now = Date.now()
    const sessionTime = Number.parseInt(timestamp, 10)

    if (now - sessionTime > expiryTime) {
      clearAuthSession()
      return false
    }
    return true
  }

  return false
}

export function getAdminRole(email: string): string | null {
  const user = ADMIN_USERS.find((user) => user.email.toLowerCase() === email.toLowerCase())
  return user ? user.role : null
}
