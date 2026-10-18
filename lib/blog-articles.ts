import { getBrandPhones, type PhoneModel } from "@/lib/phone-data"
import { deductionGroups, MISSING_BOX_PERCENT, MISSING_CHARGER_PERCENT, quotePrice } from "@/lib/price-formula"

// Blog posts written for search: price guides built from the live phone data and
// price formula (so they stay accurate), plus practical selling guides.

const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`
const phoneLink = (p: PhoneModel) => `<a href="/phone/${p.id}">${p.name}</a>`
const yearOld = (p: PhoneModel) => quotePrice(p.basePrice, { selected: ["age_11_plus"], hasBox: true, hasCharger: true })

function priceTable(phones: PhoneModel[]) {
  const rows = phones
    .map(
      (p) =>
        `<tr><td>${phoneLink(p)}</td><td>${inr(p.basePrice)}</td><td>${inr(yearOld(p))}</td><td>${p.specs.storage.join(", ")}</td></tr>`,
    )
    .join("")
  return `<div class="table-wrap"><table>
    <thead><tr><th>Model</th><th>Like new (under 3 months)</th><th>Over 11 months, good condition</th><th>Storage we buy</th></tr></thead>
    <tbody>${rows}</tbody></table></div>`
}

function resaleArticle(brand: "Apple" | "Samsung" | "Google", label: string, brandPath: string) {
  const phones = getBrandPhones(brand)
  const top = phones[0]
  const oldest = phones[phones.length - 1]
  return `
    <p>This guide lists the price Contreat pays today for every ${label} we buy, from the ${oldest.name} to the ${top.name}.
    The first column is the top price for a phone that is less than 3 months old, has its box and charger and has no damage.
    The second column is what most people get: a phone older than 11 months in good condition, with box and charger.</p>

    <h2>${label} resale prices in India</h2>
    ${priceTable(phones)}
    <p>Click a model to open its page and get an exact quote for your phone's age and condition.</p>

    <h2>How the price is worked out</h2>
    <p>We start from the model's top price and take off a percentage for each thing that lowers the value. Deductions add up:
    a phone older than 11 months (25%) with a few screen scratches (3%) gets 72% of the top price.
    A missing box takes off ${MISSING_BOX_PERCENT}% and a missing charger ${MISSING_CHARGER_PERCENT}%.
    See <a href="/blog/how-old-phone-price-is-calculated">how your old phone's price is calculated</a> for every deduction.</p>

    <h2>How to get the most for your ${label.replace(/s$/, "")}</h2>
    <ul>
      <li><strong>Sell sooner.</strong> Age is the biggest deduction: 11% after 3 months, 18% after 6 months and 25% after 11 months.</li>
      <li><strong>Keep the box and charger.</strong> Together they are worth ${MISSING_BOX_PERCENT + MISSING_CHARGER_PERCENT}% of the price.</li>
      <li><strong>Use a screen guard and case.</strong> Cracked screen glass alone takes off 45%.</li>
      <li><strong>Keep the bill.</strong> The phone's age is read from the date on the original bill.</li>
    </ul>

    <h2>How to sell</h2>
    <p>Open your model's page, choose storage and condition, and send the form. We call you to confirm the price,
    pick the phone up from your home for free and pay you at pickup. Not sure which model you have? See
    <a href="/brand/${brandPath}">all ${label} we buy</a>.</p>`
}

function deductionsArticle() {
  const sections = deductionGroups
    .map((g) => {
      const items = g.options
        .filter((o) => o.percent > 0)
        .map((o) => `<li>${o.label}: <strong>${o.percent}%</strong></li>`)
        .join("")
      return `<h3>${g.title}</h3><ul>${items}</ul>`
    })
    .join("")
  const example = getBrandPhones("Apple").find((p) => p.id === "used-iphone-13") ?? getBrandPhones("Apple")[0]
  const ex = quotePrice(example.basePrice, { selected: ["age_11_plus", "scratch_screen_1_2"], hasBox: true, hasCharger: false })
  return `
    <p>Every quote on Contreat comes from one simple formula: <strong>price = top price × (100 − total deductions) ÷ 100</strong>,
    rounded down to the nearest ₹5. Each model has a top price for a phone under 3 months old with box, charger and no damage.
    Each problem takes off a fixed percentage, and the percentages add up.</p>

    <h2>Example</h2>
    <p>The ${phoneLink(example)} has a top price of ${inr(example.basePrice)}. Say yours is over 11 months old (25%),
    has 1–2 screen scratches (3%) and you lost the charger (${MISSING_CHARGER_PERCENT}%). The total deduction is
    ${25 + 3 + MISSING_CHARGER_PERCENT}%, so the quote is <strong>${inr(ex)}</strong>.</p>

    <h2>Every deduction</h2>
    ${sections}
    <h3>Accessories</h3>
    <ul><li>No original box: <strong>${MISSING_BOX_PERCENT}%</strong></li><li>No original charger: <strong>${MISSING_CHARGER_PERCENT}%</strong></li></ul>

    <h2>Why it works this way</h2>
    <p>A fixed list means two people with the same phone in the same condition get the same price. There is no bargaining
    at the door: if the phone matches the condition you selected, the quote on the phone's page is the price you get.</p>
    <p>Find your phone: <a href="/brand/apple">iPhone</a>, <a href="/brand/samsung">Samsung Galaxy</a>,
    <a href="/brand/google">Google Pixel</a> or <a href="/brand/all-other-phones">any other brand</a>.</p>`
}

const beforeYouSell = `
  <p>Before you hand over an old phone, do these steps in order. They protect your photos, chats and accounts,
  and a phone that is still locked to your account cannot be bought.</p>

  <h2>1. Back up your data</h2>
  <ul>
    <li><strong>iPhone:</strong> Settings → [your name] → iCloud → iCloud Backup → Back Up Now. Or back up to a computer with Finder or iTunes.</li>
    <li><strong>Android:</strong> Settings → Google → Backup (on some phones: Settings → System → Backup) → Back up now. Photos back up through Google Photos.</li>
    <li><strong>WhatsApp:</strong> WhatsApp → Settings → Chats → Chat backup → Back up. WhatsApp chats are not part of the phone backup on Android.</li>
  </ul>

  <h2>2. Move your SIM, eSIM and bank apps</h2>
  <p>Take out the SIM card and memory card. If you use an eSIM, transfer it to the new phone or ask your operator to move it.
  Set up UPI and banking apps on the new phone first, because they are tied to your SIM.</p>

  <h2>3. Sign out and turn off the lock</h2>
  <ul>
    <li><strong>iPhone:</strong> Settings → [your name] → Sign Out. This also turns off Find My iPhone and Activation Lock. Unpair your Apple Watch first.</li>
    <li><strong>Android:</strong> Settings → Accounts (or Passwords & accounts) → remove your Google account. Samsung phones: also remove your Samsung account. If you skip this, Factory Reset Protection locks the phone to your account after the reset.</li>
  </ul>

  <h2>4. Factory reset</h2>
  <ul>
    <li><strong>iPhone:</strong> Settings → General → Transfer or Reset iPhone → Erase All Content and Settings.</li>
    <li><strong>Android:</strong> Settings → System → Reset options → Erase all data (factory reset). On Samsung: Settings → General management → Reset → Factory data reset.</li>
  </ul>

  <h2>5. Find the box, charger and bill</h2>
  <p>On Contreat the original box is worth ${MISSING_BOX_PERCENT}% of the price and the charger ${MISSING_CHARGER_PERCENT}%.
  The bill shows the purchase date, which sets the age deduction.</p>

  <h2>Ready?</h2>
  <p>Get your price: <a href="/brand/apple">sell iPhone</a>, <a href="/brand/samsung">sell Samsung</a>,
  <a href="/brand/google">sell Pixel</a> or <a href="/brand/all-other-phones">sell any other phone</a>.</p>`

const batteryHealth = `
  <p>Battery health is one of the first things a buyer checks. Here is how to see it on your phone, and how it affects the price.</p>

  <h2>iPhone</h2>
  <p>Go to <strong>Settings → Battery → Battery Health &amp; Charging</strong> (on older iOS versions: Settings → Battery → Battery Health).
  <strong>Maximum Capacity</strong> is the battery's capacity compared with when it was new. Apple considers a battery worn when it falls below 80%.
  On iPhone 15 and later, the same screen also shows the cycle count.</p>

  <h2>Samsung Galaxy</h2>
  <p>Open the <strong>Samsung Members</strong> app → Support → Phone diagnostics → Battery status. It shows whether the battery is "Normal" or needs replacing.</p>

  <h2>Google Pixel</h2>
  <p>On recent Pixel phones go to <strong>Settings → Battery → Battery health</strong>. Older Pixels do not show a health figure;
  a battery that drains quickly or shuts down early is a sign it is worn.</p>

  <h2>Does battery health change the price?</h2>
  <p>On Contreat, a battery that is faulty (swollen, shutting down, not holding charge) takes off 6% of the price.
  Normal ageing of the battery is already covered by the age deduction, so you do not need to replace a healthy battery before selling.
  Replacing it just to sell usually costs more than it adds.</p>
  <p>See every deduction in <a href="/blog/how-old-phone-price-is-calculated">how your old phone's price is calculated</a>,
  or get a quote: <a href="/brand/apple">iPhone</a>, <a href="/brand/samsung">Samsung</a>, <a href="/brand/google">Pixel</a>.</p>`

const mumbai = `
  <p>Contreat is based in Mumbai. You can sell your old phone without leaving home: get a price online, and we come to you.</p>

  <h2>How it works</h2>
  <ol>
    <li><strong>Get your price.</strong> Open your model (<a href="/brand/apple">iPhone</a>, <a href="/brand/samsung">Samsung</a>,
    <a href="/brand/google">Pixel</a> or <a href="/brand/all-other-phones">any other brand</a>), choose storage and condition, and send the form.</li>
    <li><strong>We call you.</strong> We confirm the price and agree a pickup time.</li>
    <li><strong>Free pickup.</strong> We check the phone at your door.</li>
    <li><strong>Get paid.</strong> You are paid at pickup.</li>
  </ol>

  <h2>What we buy</h2>
  <p>We buy ${getBrandPhones("Apple").length} iPhone models, ${getBrandPhones("Samsung").length} Samsung Galaxy models and
  ${getBrandPhones("Google").length} Google Pixel models listed on the site, and phones of every other brand through the
  <a href="/brand/all-other-phones">other phones form</a>. Damaged phones are fine: the price is lower, but we still buy them.</p>

  <h2>Why sell online instead of at a local shop?</h2>
  <ul>
    <li>The price is fixed before we meet, from a <a href="/blog/how-old-phone-price-is-calculated">published list of deductions</a>.</li>
    <li>No travelling between shops and no bargaining.</li>
    <li>You can compare our price before you decide.</li>
  </ul>

  <h2>Before pickup</h2>
  <p>Back up your data, sign out of your Apple or Google account and reset the phone. Our
  <a href="/blog/what-to-do-before-selling-your-phone">checklist before selling your phone</a> covers each step.</p>`

export const blogArticles: Record<
  string,
  { title: string; date: string; author: string; category: string; readTime: string; content: string }
> = {
  "iphone-resale-value-india": {
    title: "iPhone Resale Value in India 2026: Price for Every Model",
    date: "2026-10-19",
    author: "Contreat Team",
    category: "Price Guides",
    readTime: "5 min read",
    content: resaleArticle("Apple", "iPhones", "apple"),
  },
  "samsung-galaxy-resale-value-india": {
    title: "Samsung Galaxy Resale Value in India 2026: Price for Every Model",
    date: "2026-10-19",
    author: "Contreat Team",
    category: "Price Guides",
    readTime: "4 min read",
    content: resaleArticle("Samsung", "Samsung Galaxy phones", "samsung"),
  },
  "google-pixel-resale-value-india": {
    title: "Google Pixel Resale Value in India 2026: Price for Every Model",
    date: "2026-10-19",
    author: "Contreat Team",
    category: "Price Guides",
    readTime: "4 min read",
    content: resaleArticle("Google", "Google Pixel phones", "google"),
  },
  "how-old-phone-price-is-calculated": {
    title: "How Your Old Phone's Price Is Calculated (Every Deduction)",
    date: "2026-10-19",
    author: "Contreat Team",
    category: "Selling Tips",
    readTime: "4 min read",
    content: deductionsArticle(),
  },
  "what-to-do-before-selling-your-phone": {
    title: "What to Do Before Selling Your Phone: Backup, Sign Out, Reset",
    date: "2026-10-19",
    author: "Contreat Team",
    category: "Selling Tips",
    readTime: "5 min read",
    content: beforeYouSell,
  },
  "check-battery-health-before-selling": {
    title: "How to Check Battery Health Before Selling Your Phone",
    date: "2026-10-19",
    author: "Contreat Team",
    category: "Selling Tips",
    readTime: "3 min read",
    content: batteryHealth,
  },
  "sell-old-phone-mumbai": {
    title: "Sell Old Phone in Mumbai: Online Quote and Free Pickup",
    date: "2026-10-19",
    author: "Contreat Team",
    category: "Selling Tips",
    readTime: "3 min read",
    content: mumbai,
  },
}
