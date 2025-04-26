import { supabase } from "@/lib/supabase"

export async function syncLocalReports() {
  try {
    // Check if we have any locally stored reports
    const storedReports = localStorage.getItem("bugReports")
    if (!storedReports) return

    const reports = JSON.parse(storedReports)
    if (!reports || !reports.length) return

    // Check if Supabase is available
    if (!supabase) return

    // Try to sync each report
    const syncedReports = []

    for (const report of reports) {
      try {
        const { error } = await supabase.from("bug_reports").insert(report)

        if (!error) {
          // Report synced successfully
          syncedReports.push(report.id)
        }
      } catch (error) {
        console.error("Failed to sync report:", error)
      }
    }

    // Remove synced reports from local storage
    if (syncedReports.length > 0) {
      const remainingReports = reports.filter((report: any) => !syncedReports.includes(report.id))
      localStorage.setItem("bugReports", JSON.stringify(remainingReports))
    }

    return syncedReports.length
  } catch (error) {
    console.error("Error syncing local reports:", error)
    return 0
  }
}
