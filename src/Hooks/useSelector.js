
import { useContext } from "react"
import { SelectContext } from "../context/SelectContext"

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error("useTheme() must be used inside a ThemeProvider")
  }

  return context
}