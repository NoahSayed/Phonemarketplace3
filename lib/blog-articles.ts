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
    <p>This guide lists the price Contreat pays today for all the ${label} we buy, from the ${oldest.name} to the ${top.name}.
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


function brokenPhoneArticle() {
  const ex = getBrandPhones("Apple").find((p) => p.id === "used-iphone-13") ?? getBrandPhones("Apple")[0]
  const cracked = quotePrice(ex.basePrice, { selected: ["age_11_plus", "glass_cracked"], hasBox: true, hasCharger: true })
  const display = quotePrice(ex.basePrice, { selected: ["age_11_plus", "no_display"], hasBox: true, hasCharger: true })
  const pct = (id: string) => deductionGroups.flatMap((g) => g.options).find((o) => o.id === id)?.percent
  return `
    <p>A cracked or faulty phone still has value. Contreat buys damaged phones: each problem takes a fixed percentage off
    the model's price, so you know what you will get before pickup.</p>

    <h2>How much is a broken phone worth?</h2>
    <div class="table-wrap"><table>
      <thead><tr><th>Problem</th><th>Price lowered by</th></tr></thead>
      <tbody>
        <tr><td>Screen glass cracked</td><td>${pct("glass_cracked")}%</td></tr>
        <tr><td>Lines, dots, colour fade, flickering or no display</td><td>${pct("no_display")}%</td></tr>
        <tr><td>Touch not working</td><td>${pct("touch_not_working")}%</td></tr>
        <tr><td>Back glass broken</td><td>${pct("back_glass_broken")}%</td></tr>
        <tr><td>Face ID not working</td><td>${pct("face_id_not_working")}%</td></tr>
        <tr><td>Wi-Fi or audio IC problem</td><td>${pct("wifi_issues")}%</td></tr>
        <tr><td>Back camera not working</td><td>${pct("back_camera_not_working")}%</td></tr>
        <tr><td>Charging port, speaker or faulty battery</td><td>${pct("charging_port_issue")}%</td></tr>
      </tbody>
    </table></div>

    <h2>Example: iPhone 13 with a cracked screen</h2>
    <p>The ${phoneLink(ex)} has a top price of ${inr(ex.basePrice)}. One that is over 11 months old with cracked screen glass
    (25% + 45%) gets <strong>${inr(cracked)}</strong>. With no display at all (25% + 50%) it gets <strong>${inr(display)}</strong>.</p>

    <h2>Should you repair before selling?</h2>
    <p>Usually not. Compare the repair cost with the deduction: on a phone with a high top price, a screen repair can add more
    than it costs, but on older models the repair often costs more than the price difference. Get a free quote for both
    conditions on your model's page and compare them with the repair price before you decide.</p>

    <h2>Before you sell a broken phone</h2>
    <p>If the screen still works, back up and reset it with our <a href="/blog/what-to-do-before-selling-your-phone">checklist</a>.
    If you cannot use the screen, sign out of the phone from another device: on iPhone, remove it from Find My at icloud.com;
    on Android, remove it from your Google account at myaccount.google.com.</p>

    <p>Get your price: <a href="/brand/apple">iPhone</a>, <a href="/brand/samsung">Samsung</a>, <a href="/brand/google">Pixel</a>
    or <a href="/brand/all-other-phones">any other phone</a>. See <a href="/blog/how-old-phone-price-is-calculated">every deduction</a>.</p>`
}

function bestTimeArticle() {
  const ex = getBrandPhones("Apple").find((p) => p.id === "used-iphone-16") ?? getBrandPhones("Apple")[0]
  const at = (id?: string) => quotePrice(ex.basePrice, { selected: id ? [id] : [], hasBox: true, hasCharger: true })
  return `
    <p>The price of a used phone drops as it gets older. On Contreat the drop happens in steps, so a few weeks can change
    your price a lot.</p>

    <h2>The age steps</h2>
    <div class="table-wrap"><table>
      <thead><tr><th>Phone age (from the bill)</th><th>Price lowered by</th><th>${ex.name} example</th></tr></thead>
      <tbody>
        <tr><td>0–3 months</td><td>0%</td><td>${inr(at())}</td></tr>
        <tr><td>3–6 months</td><td>11%</td><td>${inr(at("age_3_6"))}</td></tr>
        <tr><td>6–11 months</td><td>18%</td><td>${inr(at("age_6_11"))}</td></tr>
        <tr><td>More than 11 months</td><td>25%</td><td>${inr(at("age_11_plus"))}</td></tr>
      </tbody>
    </table></div>
    <p>Prices for a ${phoneLink(ex)} in good condition with box and charger.</p>

    <h2>When to sell</h2>
    <ul>
      <li><strong>Just before a step.</strong> If your phone is 5 months old, selling before 6 months keeps 7% more of the price.</li>
      <li><strong>Before the new iPhone launches.</strong> Apple usually announces new iPhones in September. When a newer model is out,
      the top price of older models is often lowered, so selling in August usually beats selling in October.</li>
      <li><strong>Before damage happens.</strong> A cracked screen takes off 45%, far more than any age step.</li>
    </ul>

    <h2>Check your price now</h2>
    <p>See the full <a href="/blog/iphone-resale-value-india">iPhone resale price list</a> or get a quote for
    <a href="/brand/apple">your iPhone</a>, <a href="/brand/samsung">Samsung</a> or <a href="/brand/google">Pixel</a>.</p>`
}

export const blogArticles: Record<
  string,
  { title: string; date: string; author: string; category: string; readTime: string; content: string }
> = {
  "sell-broken-phone": {
    title: "Sell a Broken Phone: What a Cracked or Faulty Phone Is Worth",
    date: "2026-10-19",
    author: "Contreat Team",
    category: "Selling Tips",
    readTime: "4 min read",
    content: brokenPhoneArticle(),
  },
  "best-time-to-sell-your-iphone": {
    title: "Best Time to Sell Your iPhone (and Get the Most for It)",
    date: "2026-10-19",
    author: "Contreat Team",
    category: "Selling Tips",
    readTime: "3 min read",
    content: bestTimeArticle(),
  },
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
