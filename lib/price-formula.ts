// Condition-based quote, same model CashSecond uses:
// price = basePrice x (100 - sum of deduction %) / 100, rounded down to the nearest ₹5.
// Deductions add up (they don't stack). A missing box or charger is a deduction.

export interface Deduction {
  id: string
  label: string
  percent: number
}

export interface DeductionGroup {
  id: string
  title: string
  hint: string
  single?: boolean // pick at most one (age)
  options: Deduction[]
}

export const deductionGroups: DeductionGroup[] = [
  {
    id: "age",
    title: "How old is your phone?",
    hint: "From the date on the original bill.",
    single: true,
    options: [
      { id: "age_0_3", label: "0-3 months", percent: 0 },
      { id: "age_3_6", label: "3-6 months", percent: 11 },
      { id: "age_6_11", label: "6-11 months", percent: 18 },
      { id: "age_11_plus", label: "More than 11 months", percent: 25 },
    ],
  },
  {
    id: "screen",
    title: "Screen condition",
    hint: "Select all that apply. Leave empty if the screen is perfect.",
    options: [
      { id: "scratch_screen_1_2", label: "1-2 scratches", percent: 3 },
      { id: "scratch_screen_3_4", label: "3-4 scratches", percent: 6.5 },
      { id: "multiple_scratches_screen", label: "Many scratches", percent: 10 },
      { id: "glass_cracked", label: "Glass cracked", percent: 45 },
      { id: "loose_screen", label: "Loose screen", percent: 10 },
      { id: "touch_not_working", label: "Touch not working", percent: 18 },
      { id: "back_glass_broken", label: "Back glass broken", percent: 14 },
      { id: "dots_on_display", label: "Dots on display", percent: 50 },
      { id: "lines_on_display", label: "Lines on display", percent: 50 },
      { id: "color_fade", label: "Colour fade", percent: 50 },
      { id: "flickering", label: "Flickering", percent: 50 },
      { id: "no_display", label: "No display", percent: 50 },
    ],
  },
  {
    id: "body",
    title: "Body condition",
    hint: "Back panel and edges. Leave empty if there are no marks.",
    options: [
      { id: "scratch_body_1_2", label: "1-2 scratches", percent: 1 },
      { id: "scratch_body_3_4", label: "3-4 scratches", percent: 5.5 },
      { id: "multiple_scratches_body", label: "Many scratches", percent: 10 },
      { id: "dents_1_or_2", label: "1-2 dents", percent: 2 },
      { id: "multiple_dents", label: "Many dents", percent: 13 },
      { id: "body_curved", label: "Body bent", percent: 13 },
    ],
  },
  {
    id: "faults",
    title: "Anything not working?",
    hint: "Select all that apply. Leave empty if everything works.",
    options: [
      { id: "front_camera_not_working", label: "Front camera", percent: 8 },
      { id: "back_camera_not_working", label: "Back camera", percent: 10 },
      { id: "camera_glass_broken", label: "Camera glass broken", percent: 3 },
      { id: "face_id_not_working", label: "Face ID", percent: 18 },
      { id: "finger_print_not_working", label: "Fingerprint", percent: 10 },
      { id: "wifi_issues", label: "Wi-Fi", percent: 18 },
      { id: "bluetooth_issue", label: "Bluetooth", percent: 10 },
      { id: "audio_ic_problem", label: "Audio IC", percent: 18 },
      { id: "speaker_not_working", label: "Speaker", percent: 6 },
      { id: "sensor_issues", label: "Sensors", percent: 7 },
      { id: "charging_port_issue", label: "Charging port", percent: 6 },
      { id: "battery_faulty", label: "Battery faulty", percent: 6 },
      { id: "power_button_issue", label: "Power button", percent: 6 },
      { id: "volume", label: "Volume buttons", percent: 5 },
      { id: "vibrator", label: "Vibration", percent: 6 },
      { id: "headphone_jackissue", label: "Headphone jack", percent: 5 },
    ],
  },
]

export const MISSING_BOX_PERCENT = 3
export const MISSING_CHARGER_PERCENT = 4

const allOptions = deductionGroups.flatMap((g) => g.options)

export interface QuoteInput {
  selected: string[] // deduction option ids
  hasBox: boolean
  hasCharger: boolean
}

export function totalDeductionPercent({ selected, hasBox, hasCharger }: QuoteInput) {
  let total = allOptions.filter((o) => selected.includes(o.id)).reduce((sum, o) => sum + o.percent, 0)
  if (!hasBox) total += MISSING_BOX_PERCENT
  if (!hasCharger) total += MISSING_CHARGER_PERCENT
  return Math.min(total, 100)
}

export function quotePrice(basePrice: number, input: QuoteInput) {
  const price = (basePrice * (100 - totalDeductionPercent(input))) / 100
  return Math.max(0, Math.floor(price / 5) * 5)
}

export function describeCondition(input: QuoteInput) {
  const parts = deductionGroups.flatMap((g) =>
    g.options.filter((o) => input.selected.includes(o.id)).map((o) => `${g.id}: ${o.label} (-${o.percent}%)`),
  )
  if (!input.hasBox) parts.push(`No box (-${MISSING_BOX_PERCENT}%)`)
  if (!input.hasCharger) parts.push(`No charger (-${MISSING_CHARGER_PERCENT}%)`)
  return parts.length ? parts.join(", ") : "No issues"
}
