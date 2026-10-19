import { getBrandPhones, phoneData, type PhoneModel } from "@/lib/phone-data"
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

function bestPhonesArticle() {
  const top = (brand: "Apple" | "Samsung" | "Google", n: number) =>
    [...getBrandPhones(brand)].sort((a, b) => b.basePrice - a.basePrice).slice(0, n)
  const rows = (phones: PhoneModel[]) =>
    phones.map((p) => `<tr><td>${phoneLink(p)}</td><td>${inr(p.basePrice)}</td><td>${inr(yearOld(p))}</td></tr>`).join("")
  const table = (phones: PhoneModel[]) => `<div class="table-wrap"><table>
    <thead><tr><th>Model</th><th>Like new</th><th>Over 11 months, good condition</th></tr></thead>
    <tbody>${rows(phones)}</tbody></table></div>`
  const all = [...phoneData].sort((a, b) => b.basePrice - a.basePrice)
  const over20k = all.filter((p) => yearOld(p) >= 20000).length
  return `
    <p>Which phones are worth the most when you sell them? This list is built from the prices Contreat pays today for the
    ${all.length} models we list. "Like new" means less than 3 months old, with box and charger and no damage.
    The last column is what most people get: a phone older than 11 months in good condition, with box and charger.</p>

    <h2>iPhones that sell for the most</h2>
    ${table(top("Apple", 6))}
    <p>See the price of every model in the <a href="/blog/iphone-resale-value-india">iPhone resale price list</a>.</p>

    <h2>Samsung Galaxy phones that sell for the most</h2>
    ${table(top("Samsung", 5))}
    <p>Full list: <a href="/blog/samsung-galaxy-resale-value-india">Samsung Galaxy resale prices</a>.</p>

    <h2>Google Pixel phones that sell for the most</h2>
    ${table(top("Google", 5))}
    <p>Full list: <a href="/blog/google-pixel-resale-value-india">Google Pixel resale prices</a>.</p>

    <h2>What the list shows</h2>
    <ul>
      <li><strong>Newer flagships are worth the most.</strong> ${over20k} of the ${all.length} models we list still get ₹20,000 or more
      after a year in good condition.</li>
      <li><strong>Pro and Ultra models hold more rupees.</strong> They start higher, so the same percentage deductions leave more money.</li>
      <li><strong>Condition matters as much as the model.</strong> Cracked screen glass takes off 45%, which can make a flagship
      worth less than a cheaper phone in perfect condition.</li>
    </ul>

    <h2>Get the most for your phone</h2>
    <p>Sell before the next age step (see <a href="/blog/best-time-to-sell-your-iphone">the best time to sell</a>), keep the box,
    charger and bill, and <a href="/blog/what-to-do-before-selling-your-phone">reset the phone properly</a> before pickup.
    Every deduction is listed in <a href="/blog/how-old-phone-price-is-calculated">how your old phone's price is calculated</a>.</p>`
}

const sellOnline = `
  <p>Selling your old phone online takes a few minutes: you get a price from your model and condition, and the buyer comes
  to you. Here is how it works on Contreat, and what to check on any site you use.</p>

  <h2>Step by step</h2>
  <ol>
    <li><strong>Find your model.</strong> Choose <a href="/brand/apple">iPhone</a>, <a href="/brand/samsung">Samsung Galaxy</a>,
    <a href="/brand/google">Google Pixel</a> or <a href="/brand/all-other-phones">any other brand</a>.</li>
    <li><strong>Pick storage and condition.</strong> Age, screen, body and anything that does not work. The price updates as you choose.</li>
    <li><strong>Send the form.</strong> Add your name and phone number.</li>
    <li><strong>We call you.</strong> We confirm the price and agree a pickup time.</li>
    <li><strong>Free pickup and payment.</strong> We check the phone at your door and pay you at pickup.</li>
  </ol>

  <h2>What decides the price</h2>
  <p>Every model has a top price for a phone that is less than 3 months old, with box and charger and no damage. Each problem
  takes off a fixed percentage:</p>
  <ul>
    <li>Age: 11% after 3 months, 18% after 6 months, 25% after 11 months.</li>
    <li>Screen: 3% for 1–2 scratches, 45% for cracked glass, 50% for lines, dots or no display.</li>
    <li>Missing box ${MISSING_BOX_PERCENT}%, missing charger ${MISSING_CHARGER_PERCENT}%.</li>
  </ul>
  <p>The full list is in <a href="/blog/how-old-phone-price-is-calculated">how your old phone's price is calculated</a>.
  For model prices see the <a href="/blog/iphone-resale-value-india">iPhone</a>,
  <a href="/blog/samsung-galaxy-resale-value-india">Samsung</a> and <a href="/blog/google-pixel-resale-value-india">Pixel</a> price lists.</p>

  <h2>Before you hand the phone over</h2>
  <ul>
    <li>Back up photos, chats and contacts.</li>
    <li>Sign out of your Apple ID or Google account so the next owner can use the phone.</li>
    <li>Remove your SIM and memory card, then factory reset.</li>
  </ul>
  <p>Our <a href="/blog/what-to-do-before-selling-your-phone">checklist before selling your phone</a> covers each step for iPhone and Android.</p>

  <h2>How to sell safely online</h2>
  <ul>
    <li><strong>Get the price before pickup.</strong> A buyer who will not say what they pay until they hold the phone can lower it at your door.</li>
    <li><strong>Know the deductions.</strong> If the price changes at pickup, ask which condition was different.</li>
    <li><strong>Never share OTPs or passwords.</strong> No buyer needs them.</li>
    <li><strong>Keep the bill.</strong> It proves the phone is yours and sets its age.</li>
  </ul>

  <p>Selling a damaged phone? See <a href="/blog/sell-broken-phone">what a broken phone is worth</a>.
  In Mumbai? See <a href="/blog/sell-old-phone-mumbai">selling your old phone in Mumbai</a>.</p>`

const buybackOptions = `
  <p>There are four common ways to sell a used phone in India. Each one trades price against time and risk.</p>

  <div class="table-wrap"><table>
    <thead><tr><th>Option</th><th>Price</th><th>Time and effort</th><th>Risk</th></tr></thead>
    <tbody>
      <tr><td>Online buyback (like Contreat)</td><td>Fixed price from your model and condition</td><td>A few minutes online, free pickup</td><td>Low: price agreed before pickup</td></tr>
      <tr><td>Exchange offer on a new phone</td><td>Paid as a discount, only if you buy a new phone from the same seller</td><td>Low</td><td>Value can drop if the phone fails the check at delivery</td></tr>
      <tr><td>Selling to a stranger (OLX, Facebook Marketplace)</td><td>Can be higher</td><td>Listing, calls, bargaining and meetings</td><td>Higher: fake payments and no-shows</td></tr>
      <tr><td>Local mobile shop</td><td>Depends on bargaining</td><td>Visiting shops</td><td>Medium: price set at the counter</td></tr>
    </tbody>
  </table></div>

  <h2>When online buyback makes sense</h2>
  <p>Choose buyback when you want cash quickly without bargaining or meeting strangers, or when the phone is damaged:
  most private buyers avoid damaged phones, but buyback sites still pay for them
  (see <a href="/blog/sell-broken-phone">what a broken phone is worth</a>).</p>

  <h2>How mobile buyback works on Contreat</h2>
  <ol>
    <li>Open your model and choose storage and condition. The price is calculated from a
    <a href="/blog/how-old-phone-price-is-calculated">published list of deductions</a>.</li>
    <li>Send the form. We call you to confirm the price and a pickup time.</li>
    <li>We check the phone at your door and pay you at pickup.</li>
  </ol>

  <h2>Compare before you sell</h2>
  <p>Check your model's price in the <a href="/blog/iphone-resale-value-india">iPhone</a>,
  <a href="/blog/samsung-galaxy-resale-value-india">Samsung Galaxy</a> or <a href="/blog/google-pixel-resale-value-india">Google Pixel</a>
  price list, then compare it with exchange offers and other buyers. Whoever you choose,
  <a href="/blog/what-to-do-before-selling-your-phone">back up and reset the phone</a> first.</p>

  <p>Get your quote: <a href="/brand/apple">iPhone</a>, <a href="/brand/samsung">Samsung</a>, <a href="/brand/google">Pixel</a>
  or <a href="/brand/all-other-phones">any other phone</a>.</p>`

const byId = (id: string) => phoneData.find((p) => p.id === id)!

function compareTable(phones: PhoneModel[]) {
  const ages: [string, string | undefined][] = [
    ["Under 3 months", undefined],
    ["3–6 months", "age_3_6"],
    ["6–11 months", "age_6_11"],
    ["Over 11 months", "age_11_plus"],
  ]
  const head = phones.map((p) => `<th>${phoneLink(p)}</th>`).join("")
  const body = ages
    .map(
      ([label, id]) =>
        `<tr><td>${label}</td>${phones
          .map((p) => `<td>${inr(quotePrice(p.basePrice, { selected: id ? [id] : [], hasBox: true, hasCharger: true }))}</td>`)
          .join("")}</tr>`,
    )
    .join("")
  return `<div class="table-wrap"><table>
    <thead><tr><th>Phone age, good condition</th>${head}</tr></thead>
    <tbody>${body}</tbody></table></div>
    <p>Prices Contreat pays today for a phone with box and charger and no damage. Open a model for an exact quote.</p>`
}

function iphone16ProVsS25Ultra() {
  const ip = byId("used-iphone-16-pro")
  const s = byId("used-galaxy-s25-ultra")
  return `
    <p>The iPhone 16 Pro and the Galaxy S25 Ultra are the two flagships people compare most. Here is how they differ, and how
    much each one is worth when you sell it.</p>

    <h2>Key differences</h2>
    <div class="table-wrap"><table>
      <thead><tr><th></th><th>iPhone 16 Pro</th><th>Galaxy S25 Ultra</th></tr></thead>
      <tbody>
        <tr><td>Chip</td><td>Apple A18 Pro</td><td>Snapdragon 8 Elite for Galaxy</td></tr>
        <tr><td>Screen</td><td>6.3 inches</td><td>6.9 inches</td></tr>
        <tr><td>Main camera</td><td>48 MP, 5x telephoto</td><td>200 MP, 5x and 3x telephoto</td></tr>
        <tr><td>Stylus</td><td>No</td><td>Built-in S Pen</td></tr>
        <tr><td>Storage we buy</td><td>${ip.specs.storage.join(", ")}</td><td>${s.specs.storage.join(", ")}</td></tr>
      </tbody>
    </table></div>

    <h2>Resale value</h2>
    ${compareTable([ip, s])}

    <h2>Which should you sell?</h2>
    <p>If you are switching from one to the other, compare today's price of your phone with the cost of the new one.
    Both lose value in the same steps as they age (11% after 3 months, 18% after 6 months, 25% after 11 months), so selling
    before the next step keeps more money. See <a href="/blog/best-time-to-sell-your-iphone">the best time to sell</a>.</p>

    <p>More prices: <a href="/blog/iphone-resale-value-india">every iPhone</a> and
    <a href="/blog/samsung-galaxy-resale-value-india">every Samsung Galaxy</a>.</p>`
}

function s24UltraArticle() {
  const s24 = byId("used-galaxy-s24-ultra")
  const s23 = byId("used-galaxy-s23-ultra")
  const s25 = byId("used-galaxy-s25-ultra")
  return `
    <p>The Galaxy S24 Ultra launched in January 2024 and is still one of the most popular Samsung phones to buy used.
    Here are its main features and what it is worth today.</p>

    <h2>Main features</h2>
    <ul>
      <li><strong>Chip:</strong> Snapdragon 8 Gen 3 for Galaxy, with 12 GB RAM.</li>
      <li><strong>Screen:</strong> 6.8-inch flat display behind Corning Gorilla Armor glass, which cuts reflections.</li>
      <li><strong>Frame:</strong> titanium, the first Samsung phone with one.</li>
      <li><strong>Cameras:</strong> 200 MP main, 12 MP ultra-wide, 10 MP 3x and 50 MP 5x telephoto.</li>
      <li><strong>S Pen:</strong> built in, stored inside the phone.</li>
      <li><strong>Galaxy AI:</strong> Live Translate, Circle to Search and photo editing tools.</li>
      <li><strong>Updates:</strong> Samsung promises 7 years of Android and security updates.</li>
    </ul>

    <h2>What a used S24 Ultra is worth</h2>
    ${compareTable([s23, s24, s25])}

    <h2>Before you sell</h2>
    <p>Remove the phone from your Samsung and Google accounts and reset it (see our
    <a href="/blog/what-to-do-before-selling-your-phone">checklist before selling</a>). Put the S Pen back in the phone:
    it is part of the device. See every model in the <a href="/blog/samsung-galaxy-resale-value-india">Samsung Galaxy price list</a>.</p>`
}

function iphone15Vs16() {
  const a = byId("used-iphone-15")
  const b = byId("used-iphone-16")
  const a11 = yearOld(a)
  return `
    <p>Thinking of moving from an iPhone 15 to an iPhone 16? Here is what changes, and how much selling your iPhone 15 brings
    down the cost.</p>

    <h2>What the iPhone 16 adds</h2>
    <div class="table-wrap"><table>
      <thead><tr><th></th><th>iPhone 15</th><th>iPhone 16</th></tr></thead>
      <tbody>
        <tr><td>Chip</td><td>A16 Bionic</td><td>A18</td></tr>
        <tr><td>Apple Intelligence</td><td>Not supported</td><td>Supported</td></tr>
        <tr><td>Buttons</td><td>Ring/silent switch</td><td>Action button and Camera Control</td></tr>
        <tr><td>Cameras</td><td>48 MP main, 12 MP ultra-wide</td><td>48 MP main, 12 MP ultra-wide with macro, spatial video</td></tr>
        <tr><td>Screen</td><td>6.1 inches</td><td>6.1 inches</td></tr>
      </tbody>
    </table></div>

    <h2>Resale value of both</h2>
    ${compareTable([a, b])}

    <h2>Is the upgrade worth it?</h2>
    <p>The biggest reasons to upgrade are Apple Intelligence and the faster chip. An iPhone 15 older than 11 months in good
    condition sells for about <strong>${inr(a11)}</strong> on Contreat, which you can put towards the new phone.
    If your iPhone 15 works well and you don't need Apple Intelligence, keeping it is also reasonable: it loses value slowly
    after the first year.</p>

    <p>See <a href="/blog/iphone-resale-value-india">every iPhone's resale price</a> and
    <a href="/blog/best-time-to-sell-your-iphone">the best time to sell your iPhone</a>.</p>`
}

function pixel9ProArticle() {
  const p9 = byId("used-pixel-9-pro")
  const p10 = byId("used-pixel-10-pro")
  const p8 = byId("used-pixel-8-pro")
  return `
    <p>The Pixel 9 Pro is Google's 2024 compact flagship. Here is what it does well, and what it is worth if you sell it today.</p>

    <h2>What stands out</h2>
    <ul>
      <li><strong>Size:</strong> a 6.3-inch screen, smaller than the Pixel 9 Pro XL, with the same cameras.</li>
      <li><strong>Chip and memory:</strong> Google Tensor G4 with 16 GB RAM.</li>
      <li><strong>Cameras:</strong> 50 MP main, 48 MP ultra-wide and 48 MP 5x telephoto, plus a 42 MP selfie camera.</li>
      <li><strong>AI photo tools:</strong> Magic Editor, Best Take and Add Me.</li>
      <li><strong>Updates:</strong> Google promises 7 years of Android and security updates.</li>
    </ul>

    <h2>Resale value compared with other Pixel Pros</h2>
    ${compareTable([p8, p9, p10])}

    <h2>Keep it or sell it?</h2>
    <p>With 7 years of updates, the Pixel 9 Pro stays usable for a long time. Sell it if you want a newer model: the price falls
    in steps as the phone gets older, so selling before the next step keeps more money. See the full
    <a href="/blog/google-pixel-resale-value-india">Google Pixel price list</a>.</p>`
}

const foldables = `
  <p>Foldable phones like the Samsung Galaxy Z Fold and Z Flip have more parts that can wear out than a normal phone.
  Check these before you sell, because the buyer will.</p>

  <h2>What to check on a foldable</h2>
  <ul>
    <li><strong>Inner screen:</strong> look for dead pixels, lines, or peeling of the factory screen protector. Do not peel it off yourself.</li>
    <li><strong>Crease:</strong> a visible crease is normal; cracks or bubbles along it are not.</li>
    <li><strong>Hinge:</strong> it should open and close smoothly, hold its position, and close flat without a gap.</li>
    <li><strong>Outer (cover) screen:</strong> check for scratches and cracks, like any phone.</li>
    <li><strong>Both screens' touch:</strong> draw across the whole screen to find dead spots.</li>
  </ul>

  <h2>How to sell your Fold or Flip to Contreat</h2>
  <p>Use the <a href="/brand/all-other-phones">other phones form</a>: enter the model, storage and condition, including any
  problem with the inner screen or hinge. We call you with a price and pick the phone up from your home for free.</p>

  <h2>Before you sell</h2>
  <p>Remove the phone from your Samsung and Google accounts and reset it. Our
  <a href="/blog/what-to-do-before-selling-your-phone">checklist before selling</a> covers each step. Selling a Galaxy S model instead?
  See the <a href="/blog/samsung-galaxy-resale-value-india">Samsung Galaxy price list</a>.</p>`

const imeiGuide = `
  <p>The IMEI is a 15-digit number that identifies your phone. Buyers ask for it to check the phone is not reported stolen
  or blacklisted. Here is how to find it and check it in India.</p>

  <h2>How to find your IMEI number</h2>
  <ul>
    <li><strong>Any phone:</strong> open the dialler and type <strong>*#06#</strong>. The IMEI appears on screen.</li>
    <li><strong>iPhone:</strong> Settings → General → About, then scroll to IMEI.</li>
    <li><strong>Samsung and other Android phones:</strong> Settings → About phone → IMEI (on some phones under Status).</li>
    <li><strong>Box and bill:</strong> the IMEI is printed on the label on the box and usually on the purchase bill.</li>
  </ul>
  <p>Dual-SIM phones have two IMEI numbers, one for each SIM slot. Check that the number on the phone matches the box and bill.</p>

  <h2>How to check an IMEI in India</h2>
  <p>The Department of Telecommunications runs the <strong>Sanchar Saathi</strong> portal (sancharsaathi.gov.in). Its
  "Know Your Mobile" service shows whether an IMEI is valid, and whether it is blacklisted, reported stolen or already in use.
  You can also send an SMS: <strong>KYM &lt;15-digit IMEI&gt;</strong> to <strong>14422</strong>.</p>

  <h2>Why it matters when you sell</h2>
  <ul>
    <li>A phone whose IMEI is blocked cannot be used on Indian networks, so no honest buyer will take it.</li>
    <li>If you blocked your own phone after losing it and later found it, unblock it on Sanchar Saathi before selling.</li>
    <li>Keep the bill: it links the IMEI to you and shows the phone's age, which sets the price
    (see <a href="/blog/how-old-phone-price-is-calculated">how the price is calculated</a>).</li>
  </ul>

  <h2>Never share these instead</h2>
  <p>A buyer needs the IMEI, never your OTPs, passwords or Apple ID / Google account details. Sign out of your accounts before
  selling with our <a href="/blog/what-to-do-before-selling-your-phone">checklist before selling your phone</a>.</p>

  <p>Ready to sell? Get your price for an <a href="/brand/apple">iPhone</a>, <a href="/brand/samsung">Samsung</a>,
  <a href="/brand/google">Pixel</a> or <a href="/brand/all-other-phones">any other phone</a>.</p>`

const findModelGuide = `
  <p>To get the right price for your phone you need its exact model. iPhone 15 and iPhone 15 Plus, or Galaxy S24 and S24+,
  look alike but sell for different prices. Here is how to check.</p>

  <h2>iPhone</h2>
  <p>Open <strong>Settings → General → About</strong>. <strong>Model Name</strong> shows the name, for example iPhone 15 Pro.
  The <strong>Model Number</strong> starts with M or A; tap it to switch to the A number, which identifies the exact model.
  Storage is shown as <strong>Capacity</strong> on the same screen.</p>

  <h2>Samsung Galaxy</h2>
  <p>Open <strong>Settings → About phone</strong>. You will see the name (for example Galaxy S24 Ultra) and the model number,
  which starts with SM-. Storage is under <strong>Settings → Battery and device care → Storage</strong>
  (on older phones, Settings → Device care → Storage).</p>

  <h2>Google Pixel</h2>
  <p>Open <strong>Settings → About phone</strong>. The model name is shown under <strong>Device name</strong> or
  <strong>Model</strong>. Storage is under <strong>Settings → Storage</strong>.</p>

  <h2>Other Android phones</h2>
  <p>Most phones show the model under <strong>Settings → About phone</strong>. If the phone does not turn on, check the label
  on the original box or the purchase bill.</p>

  <h2>Find your price</h2>
  <p>Once you know the model, open it on Contreat and pick the storage you saw:</p>
  <ul>
    <li><a href="/brand/apple">All iPhones we buy</a> (<a href="/blog/iphone-resale-value-india">price list</a>)</li>
    <li><a href="/brand/samsung">All Samsung Galaxy phones</a> (<a href="/blog/samsung-galaxy-resale-value-india">price list</a>)</li>
    <li><a href="/brand/google">All Google Pixel phones</a> (<a href="/blog/google-pixel-resale-value-india">price list</a>)</li>
    <li><a href="/brand/all-other-phones">Any other phone</a></li>
  </ul>
  <p>Check your phone's battery too: see <a href="/blog/check-battery-health-before-selling">how to check battery health</a>.</p>`

export const blogArticles: Record<
  string,
  { title: string; date: string; author: string; category: string; readTime: string; content: string }
> = {
  "how-to-check-imei-number": {
    title: "How to Check Your Phone's IMEI Number (and Verify It in India)",
    date: "2026-10-19",
    author: "Contreat Team",
    category: "Selling Tips",
    readTime: "3 min read",
    content: imeiGuide,
  },
  "how-to-find-your-phone-model": {
    title: "How to Find Your Phone Model and Storage Size",
    date: "2026-10-19",
    author: "Contreat Team",
    category: "Selling Tips",
    readTime: "3 min read",
    content: findModelGuide,
  },
  "iphone-16-pro-vs-samsung-s25-ultra": {
    title: "iPhone 16 Pro vs Galaxy S25 Ultra: Specs and Resale Value",
    date: "2026-10-19",
    author: "Contreat Team",
    category: "Comparisons",
    readTime: "4 min read",
    content: iphone16ProVsS25Ultra(),
  },
  "samsung-galaxy-s24-ultra-features": {
    title: "Galaxy S24 Ultra: Features and Resale Value in 2026",
    date: "2026-10-19",
    author: "Contreat Team",
    category: "Reviews",
    readTime: "4 min read",
    content: s24UltraArticle(),
  },
  "iphone-15-vs-iphone-16-comparison": {
    title: "iPhone 15 vs iPhone 16: Should You Upgrade?",
    date: "2026-10-19",
    author: "Contreat Team",
    category: "Comparisons",
    readTime: "4 min read",
    content: iphone15Vs16(),
  },
  "google-pixel-9-pro-review": {
    title: "Google Pixel 9 Pro in 2026: Features and Resale Value",
    date: "2026-10-19",
    author: "Contreat Team",
    category: "Reviews",
    readTime: "4 min read",
    content: pixel9ProArticle(),
  },
  "samsung-galaxy-z-fold-6-features": {
    title: "Selling a Galaxy Z Fold or Flip: What to Check First",
    date: "2026-10-19",
    author: "Contreat Team",
    category: "Selling Tips",
    readTime: "4 min read",
    content: foldables,
  },
  "best-phones-to-sell": {
    title: "Best Phones to Sell in 2026: Models That Hold Their Value",
    date: "2026-10-19",
    author: "Contreat Team",
    category: "Price Guides",
    readTime: "4 min read",
    content: bestPhonesArticle(),
  },
  "sell-old-phone-online-india": {
    title: "How to Sell Your Old Phone Online in India (2026 Guide)",
    date: "2026-10-19",
    author: "Contreat Team",
    category: "Selling Tips",
    readTime: "4 min read",
    content: sellOnline,
  },
  "mobile-buyback-india-guide": {
    title: "Mobile Buyback in India: Ways to Sell Your Used Phone Compared",
    date: "2026-10-19",
    author: "Contreat Team",
    category: "Selling Tips",
    readTime: "4 min read",
    content: buybackOptions,
  },
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
