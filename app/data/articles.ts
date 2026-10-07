export type ArticleStatus = 'coming-soon' | 'published';

export type MerchantStatus = 'unverified' | 'shortlisted' | 'verified';

export interface ProductPlaceholder {
  id: string;
  title: string;
  category: string;
  priceRange: string;
  merchantStatus: MerchantStatus;
  description?: string;
  ctaLabel?: string;
  href?: string;
  enabled?: boolean;
}

export interface ArticleImage {
  /** Path relative to /public, e.g. '/images/off-grid/hero.jpeg' */
  src: string;
  /** Short descriptive caption shown below the image */
  caption?: string;
  alt: string;
}

export type BodyBlock = string | ArticleImage;

export interface Article {
  slug: string;
  categorySlug: string;
  title: string;
  summary: string;
  status: ArticleStatus;
  readTime?: string;
  lastUpdated?: string;
  /** Hero image shown below the article title */
  heroImage?: ArticleImage;
  /** Long-form body — mix of paragraph strings and ArticleImage objects */
  body?: BodyBlock[];
  productIdeas?: ProductPlaceholder[];
}

export function isImageBlock(block: BodyBlock): block is ArticleImage {
  return typeof block === 'object' && 'src' in block;
}

const articles: Article[] = [
  // ─── Original four ───────────────────────────────────────────────────────────
  {
    slug: 'off-grid-gadgets-worth-comparing',
    categorySlug: 'off-grid',
    title: 'Off-grid Gadgets Worth Comparing',
    summary:
      'The three numbers that actually matter when comparing portable power, water filters, and lighting — and why the marketing figures are almost always the wrong ones to use.',
    status: 'published',
    readTime: '8 min read',
    lastUpdated: '2026-10-06',
    heroImage: {
      src: '/images/off-grid/hero.jpeg',
      alt: 'Off-grid solar and power equipment on a homestead',
      caption: 'The right off-grid kit is invisible when it works. The wrong kit is expensive when it fails.',
    },
    body: [
      'Every off-grid gear page compares price. Almost none compare the three numbers that decide whether a tool works for your setup: real output under your load, cycle life at your discharge depth, and how the product behaves in your specific climate. Get those right and the price comparison sorts itself.',
      'Portable power stations: the headline watt-hour number is measured at room temperature with a slow, controlled discharge. Your actual usable capacity in a van in January, running an inverter at 60% load, is 20–30% lower. Ask for the capacity retention spec at 0°C and the inverter efficiency curve under load. A 500Wh unit with honest cold-weather specs will outperform a 700Wh unit that only lists peak capacity.',
      'Battery cycle life is the number most buyers ignore until year two. A unit rated for 1,000 cycles to 80% capacity will hold most of its usefulness for three to four years of daily use. A unit rated for 300 cycles hits the same degradation in under a year of daily cycling. The cycle count is on the spec sheet — check it before the price.',
      'Gravity water filters: the 1,500-gallon rated lifespan sounds useful until you notice the flow rate drops off well before that point in real use, and the rating assumes clean water with low turbidity. If your source is a creek or a shallow well, halve the rated lifespan and budget for cartridge replacements twice as often. Cartridge availability matters more than the unit price — check the manufacturer stocks replacements before buying the filter.',
      'Rechargeable area lighting is the easiest category to buy correctly. The only number that matters is the lumen output at 50% runtime, not the peak figure. Most cheap lights hit their rated lumens for twenty minutes then drop. A light with a flat lumen curve and an IP65 rating covers 95% of real-world use cases and costs less than the premium brands.',
      "We're building verified comparison tables for each category as we confirm real specs and current pricing. Product links go live once we've confirmed stock and an affiliate relationship exists.",
    ],
    productIdeas: [
      {
        id: 'portable-power-station',
        title: 'Portable Power Station (Mid-capacity)',
        category: 'Energy storage',
        priceRange: '$300 – $900',
        merchantStatus: 'shortlisted',
        description: 'Compare battery chemistry, cycle life, and cold-weather capacity — not the headline Wh.',
        ctaLabel: 'Price check',
        enabled: false,
      },
      {
        id: 'water-filtration-kit',
        title: 'Gravity Water Filtration Kit',
        category: 'Water systems',
        priceRange: '$80 – $250',
        merchantStatus: 'unverified',
        description: 'Check cartridge replacement cost per year and whether stock is available locally.',
        ctaLabel: 'Merchant pending',
        enabled: false,
      },
      {
        id: 'rechargeable-area-light',
        title: 'Rechargeable Area Light',
        category: 'Lighting',
        priceRange: '$25 – $120',
        merchantStatus: 'verified',
        description: 'Flat lumen curve over time beats peak brightness every time. Check the IP rating.',
        ctaLabel: 'See tested options',
        enabled: false,
      },
    ],
  },
  {
    slug: 'solar-setups-for-a-small-home',
    categorySlug: 'off-grid',
    title: 'Solar Setups for a Small Home',
    summary:
      'A starter guide to sizing panels, batteries, and inverter capacity for everyday needs.',
    status: 'coming-soon',
    readTime: '7 min read',
  },
  {
    slug: 'off-grid-home-checklist',
    categorySlug: 'off-grid',
    title: 'The Off-grid Home Checklist',
    summary: 'A decision checklist for shelter, power, water, communications, and backup plans.',
    status: 'coming-soon',
    readTime: '6 min read',
  },
  {
    slug: 'tiny-home-technologies-that-make-small-spaces-work',
    categorySlug: 'tiny-homes',
    title: '12 Tiny-Home Technologies That Make Small Spaces Work',
    summary:
      'The systems and fittings that let a small footprint function like a full-size home — and the ones that sound good in product listings but fail in practice.',
    status: 'published',
    readTime: '9 min read',
    lastUpdated: '2026-10-06',
    body: [
      "A tiny home stops feeling small when the systems are chosen for the footprint instead of shrunk down from a full-size house. The mistake most people make is buying compact versions of the same appliances they had before. The builds that actually work pick a smaller number of tools and choose each one to do two jobs.",
      'Climate control first, because it determines every other design decision. A correctly sized mini-split heat pump — sized to the actual square footage and insulation R-value, not the brand\'s "up to X sq ft" claim — will outperform a window unit plus a space heater at a fraction of the power draw. In a well-insulated 300 sq ft build, a 6,000 BTU unit is usually enough. Go bigger and you get short cycling, which is worse for comfort than running a slightly undersized unit.',
      'The kitchen is where most tiny home builds waste space. A 60cm induction cooktop and a 45cm under-counter oven give you full cooking capability in the space a gas range and its safety clearances would consume. Induction also removes the ventilation problem — no combustion products means no code requirement for a commercial-grade hood, which is a significant cost and space saving.',
      'Combination washer-dryer units are the right call for a fixed tiny home with access to drainage. The heat-pump versions use about 1kWh per cycle versus 3–4kWh for a vented dryer, which matters if you\'re on solar or paying close attention to running costs. The main tradeoff is cycle time — plan for three to four hours for a wash-and-dry cycle.',
      'Storage is a system, not a gap to fill afterward. Hydraulic lift beds, stair-integrated drawers, and fold-flat dining furniture are not novelties — in a 200–300 sq ft home they are the difference between a space that functions and one that feels chaotic. Budget for these as structural decisions during the design phase, not as furniture purchases after the fact.',
      "We're verifying real-world durability and pricing on each category below before linking to specific products. Merchant links go live once availability and affiliate relationships are confirmed.",
    ],
    productIdeas: [
      {
        id: 'mini-split-heat-pump',
        title: 'Compact Mini-Split Heat Pump',
        category: 'Climate control',
        priceRange: '$600 – $1,800',
        merchantStatus: 'unverified',
        description: 'Size against actual sq footage and insulation R-value — not the claimed coverage.',
        ctaLabel: 'Merchant pending',
        enabled: false,
      },
      {
        id: 'induction-cooktop',
        title: 'Two-Burner Induction Cooktop (60cm)',
        category: 'Kitchen',
        priceRange: '$120 – $350',
        merchantStatus: 'shortlisted',
        description: 'Check wattage draw against your circuit and confirm pan compatibility.',
        ctaLabel: 'Price check',
        enabled: false,
      },
      {
        id: 'hydraulic-lift-bed',
        title: 'Hydraulic Lift-Storage Bed Frame',
        category: 'Storage furniture',
        priceRange: '$400 – $1,200',
        merchantStatus: 'unverified',
        description: 'Check lift capacity rating — most are rated for specific mattress weight ranges.',
        ctaLabel: 'Merchant pending',
        enabled: false,
      },
    ],
  },
  {
    slug: 'quiet-smart-home-upgrades-worth-trying',
    categorySlug: 'smart-home',
    title: '7 Quiet Smart-Home Upgrades Worth Trying',
    summary:
      'Small automation that lowers a bill or removes a daily chore — without adding another app, another subscription, or another device that needs babysitting.',
    status: 'published',
    readTime: '7 min read',
    lastUpdated: '2026-10-06',
    body: [
      "The smart-home upgrades worth having are the ones you forget about within a week. That's the test: if you're still interacting with it daily, managing it, or troubleshooting it, it's not a smart home upgrade — it's a new hobby. The short list below passes that test.",
      'A smart thermostat with real occupancy sensing — not just a schedule — pays for itself through the heating and cooling bill alone. Measurable payback within one heating season is typical in a home with any significant climate load. The one thing to confirm before buying: local scheduling that still works if the internet drops. Several major brands require cloud connectivity for their core features, which makes them useless during outages and dependent on the manufacturer staying in business.',
      'Energy-monitoring smart plugs on three to five high-draw devices are the cheapest upgrade on this list and the one with the clearest evidence. Plug one into the kettle, the dryer, and a device you suspect is drawing power on standby. The numbers are usually surprising — and surprising in a way that changes behaviour without requiring willpower.',
      'A video doorbell with on-device or local NAS storage avoids the recurring subscription that most cloud-only models require. The subscription fee over three years often exceeds the cost of the hardware. Local storage solves the actual problem — knowing who is at the door — without the ongoing cost.',
      'Leak detectors under sinks, behind the washing machine, and near the water heater are inexpensive and have a very high signal-to-noise ratio. They go off when there is actually water, not motion or light changes, which makes them one of the few smart-home sensors with almost no false-positive problem. The cost of one avoided leak repair pays for a whole house worth of sensors.',
      "We're testing each category for reliability and total cost of ownership before recommending specific models. Subscription fees are included in the TCO calculation.",
    ],
    productIdeas: [
      {
        id: 'smart-thermostat',
        title: 'Occupancy-Sensing Smart Thermostat',
        category: 'Climate control',
        priceRange: '$130 – $280',
        merchantStatus: 'shortlisted',
        description: 'Confirm local scheduling works without internet before buying.',
        ctaLabel: 'Price check',
        enabled: false,
      },
      {
        id: 'energy-monitoring-plug',
        title: 'Energy-Monitoring Smart Plug (3-pack)',
        category: 'Energy monitoring',
        priceRange: '$35 – $70',
        merchantStatus: 'verified',
        description: 'Best entry point — low cost and the feedback loop actually changes behaviour.',
        ctaLabel: 'See tested options',
        enabled: false,
      },
      {
        id: 'video-doorbell-local-storage',
        title: 'Video Doorbell (Local Storage)',
        category: 'Home security',
        priceRange: '$100 – $220',
        merchantStatus: 'unverified',
        description: 'Check subscription requirements carefully — many advertised prices exclude storage fees.',
        ctaLabel: 'Merchant pending',
        enabled: false,
      },
    ],
  },
  {
    slug: 'smart-pet-tech-worth-the-money',
    categorySlug: 'pet-wellness',
    title: 'Smart Pet Tech Worth the Money',
    summary:
      'A grounded look at GPS trackers, automatic feeders, and air purifiers — with the questions you need to ask before you add a subscription to your monthly expenses.',
    status: 'published',
    readTime: '7 min read',
    lastUpdated: '2026-10-06',
    heroImage: {
      src: '/images/pet-wellness/hero.jpeg',
      alt: 'Cat resting in a calm, well-designed home environment',
      caption: 'Good pet tech solves a specific daily problem. Everything else is a subscription wrapped around a sensor.',
    },
    body: [
      "Pet tech has the same problem as general smart-home gadgets: a lot of it is a monthly fee wrapped around a sensor, and the sensor only does something useful in a minority of the situations you paid for it. The products below are worth considering because they solve a specific, frequent problem — and in at least two categories, you can confirm whether they'll work for your situation before you buy.",
      "GPS trackers: battery life under continuous live-tracking is the number that matters, not standby time. Most manufacturers lead with standby figures that assume the tracker pings every ten minutes. If your dog is prone to bolting and you want real-time location, you're in continuous mode — and in continuous mode, most trackers need charging every eight to twelve hours. That's not useful for a dog that's been missing since this morning. Check the live-tracking battery spec specifically, and confirm the safe-zone alert works without a paid subscription tier.",
      'Automatic feeders: portion accuracy drifts over time on belt and auger mechanisms, particularly with smaller kibble sizes or moist food. A feeder rated to dispense 40g will typically be accurate to ±5g when new and ±15g after six months of daily use on cheaper units. For a cat on a calorie-restricted diet, 15g of error is meaningful. Look for a mechanism with a published accuracy tolerance and a hopper designed for the specific texture of food you use.',
      'Air purifiers for pet homes differ from general models primarily in filter media tuned for dander particle size (2.5–10 microns) and pet odour compounds. The filtration spec matters, but the filter replacement cost per year often matters more than the unit price. A purifier with $80 replacement filters that need changing every three months costs $320 per year to run — more than many budget units cost to buy.',
      "We're verifying real battery life, portion accuracy, and annual filter costs across each category before linking to specific products. Nothing below is a paid placement.",
    ],
    productIdeas: [
      {
        id: 'gps-pet-tracker',
        title: 'GPS Pet Tracker (No Required Subscription)',
        category: 'Safety & tracking',
        priceRange: '$40 – $100',
        merchantStatus: 'unverified',
        description: 'Check the live-tracking battery life specifically — not the standby figure.',
        ctaLabel: 'Merchant pending',
        enabled: false,
      },
      {
        id: 'automatic-pet-feeder',
        title: 'Automatic Pet Feeder (Portion-Accurate)',
        category: 'Feeding',
        priceRange: '$60 – $180',
        merchantStatus: 'shortlisted',
        description: 'Ask for the portion accuracy tolerance over six months, not just when new.',
        ctaLabel: 'Price check',
        enabled: false,
      },
      {
        id: 'pet-air-purifier',
        title: 'Pet-Specific Air Purifier',
        category: 'Air quality',
        priceRange: '$120 – $350',
        merchantStatus: 'unverified',
        description: 'Calculate filter replacement cost per year before comparing unit prices.',
        ctaLabel: 'Merchant pending',
        enabled: false,
      },
    ],
  },

  // ─── v30 Off-Grid ─────────────────────────────────────────────────────────────
  {
    slug: 'bushcraft-timber-frame-shelter-off-grid-basecamp',
    categorySlug: 'off-grid',
    title: 'Bushcraft Timber Frame Shelter: Off-Grid Basecamp Guide',
    summary:
      'How to select timber, cut the joints that matter, and raise a hand-built A-frame that holds through a full season without a tarp.',
    status: 'published',
    readTime: '9 min read',
    lastUpdated: '2026-10-06',
    heroImage: {
      src: '/images/off-grid/bushcraft-timber-frame.jpg',
      alt: 'Hand-cut Douglas fir A-frame timber shelter with EcoFlow power station on a timber shelf',
      caption: 'A 4m Douglas fir A-frame on a stone-and-timber sill — joinery tight enough to leave the tarp packed.',
    },
    body: [
      "A timber frame shelter earns its keep or fails at the joints. Everything else — span, pitch, material choice — is secondary to whether the rafter feet are cut correctly and whether the ridge is in compression. A frame held together with hope and long screws will move, loosen, and leak within one hard storm season.",
      'Douglas fir is the right timber for hand-cut frames in most of the Pacific Northwest and northern Rockies. Straight grain, moderate hardness, and availability in the 150mm × 150mm section that keeps joinery manageable. The rule for structural members: never use green timber. Green fir will shrink 4–6% across the grain as it dries, which loosens mortise-and-tenon joints and splits pole-framed connections. Buy kiln-dried or air-dry your own stock for at least six months before cutting joints.',
      "The birds-mouth is the joint that decides the rafter. Cut the seat depth to exactly one-third of the rafter's total depth — not more. A seat cut deeper than one-third removes too much material directly above the bearing point and creates a stress concentration that can split the rafter under snow load. The plumb cut at the ridge should fit tight with no shimming and no rocking when held in place. If it rocks, recut.",
      { src: '/images/off-grid/bushcraft-timber-frame.jpg', alt: 'Timber frame rafter tails and birds-mouth joint detail on a hand-built shelter', caption: 'Rafter tails cut with a traditional birds-mouth joint. The seat depth is one-third of rafter depth — no more.' },
      'For a semi-permanent basecamp, set the sill on a stone pad elevated at least 150mm above the surrounding ground. This single decision prevents the rot that ends most timber frames within five years. Flat river granite and short cedar offcuts under the corner posts work perfectly — no concrete needed, and the posts stay serviceable and inspectable for decades.',
      'Power at a basecamp is a modest load if you plan it correctly. A reading light at 5W, a 12V water pump at 60W peak, and phone charging at 15W rarely pull more than 0.5kWh per day combined. A 1kWh power station charged by a single 100W panel on the south-facing rafter covers that load even through three consecutive overcast days.',
    ],
    productIdeas: [
      {
        id: 'portable-power-basecamp',
        title: 'Portable Power Station (Basecamp)',
        category: 'Energy storage',
        priceRange: '$500 – $1,200',
        merchantStatus: 'shortlisted',
        description: 'Size against your real daily draw — basecamp loads are usually under 0.5kWh/day.',
        ctaLabel: 'Price check',
        enabled: false,
      },
      {
        id: 'compact-solar-panel-rafter',
        title: 'Compact Folding Solar Panel (100–200W)',
        category: 'Solar',
        priceRange: '$120 – $350',
        merchantStatus: 'unverified',
        description: 'Check real output under partial cloud — peak wattage is a clear-sky fiction.',
        ctaLabel: 'Merchant pending',
        enabled: false,
      },
    ],
  },
  {
    slug: 'underground-rainwater-cistern-off-grid-water',
    categorySlug: 'off-grid',
    title: 'Underground Rainwater Cistern: Off-Grid Water System Guide',
    summary:
      'How to size, bury, and plumb a rainwater cistern that delivers reliable household pressure — with the collection math, filter spec, and pump wiring that most guides skip.',
    status: 'published',
    readTime: '8 min read',
    lastUpdated: '2026-10-06',
    heroImage: {
      src: '/images/off-grid/rainwater-cistern.jpg',
      alt: 'Underground rainwater cistern system with first-flush diverter and UV filter on a New Zealand hillside property',
      caption: 'A 10,000L precast concrete cistern buried below frost line, fed from a steel roof via first-flush diverters.',
    },
    body: [
      "A buried cistern is the most reliable water supply a homestead can have, once it's sized correctly and the collection surface is clean. The key word is sized. A cistern that's too small runs dry in the dry season. A cistern that's sized to match roof area and local rainfall pattern stays full from October through May and draws down slowly enough to be useful through a three-month dry spell.",
      'The sizing formula: roof area in square metres × average monthly rainfall in mm × 0.85 (real-world collection efficiency) = litres collected per month. Your storage volume should cover demand through the longest typical dry spell, plus 20%. For a two-person household using 200L per day, a 90-day dry spell requires 18,000L of storage minimum — before the 20% buffer.',
      'Precast concrete cisterns last decades without maintenance, resist UV, and do not leach. The limiting factor is delivery — precast units arrive on flatbeds and go in the ground with a crane. Plan site access before you choose the cistern location, not after. The alternative, a buried polyethylene tank, is lighter and easier to install but degrades faster in soils with high UV exposure at the access hatch.',
      { src: '/images/off-grid/rainwater-cistern.jpg', alt: 'Rainwater cistern installation with inspection hatch and vent pipe visible above grade', caption: 'The inspection hatch and vent pipe above grade. The system sits between raised vegetable beds — the excavation footprint earned its keep twice.' },
      'First-flush diverters are not optional on any drinking supply. The first 25 litres off a dry roof carries bird droppings, oxidised metal from the roofing, leaf debris, and airborne particulates. A correctly sized diverter shunts this to ground before the cistern inlet opens. Size the diverter chamber to 1L per 25m² of roof area as a minimum.',
      'A 12V DC pump powered by a 200Wh power station runs the house pressure without grid dependency and draws far less than a mains pump. Set a float valve at the tank outlet to control overflow to a downhill swale. Once it is running correctly, the whole system needs annual inspection and filter cartridge replacement — nothing else.',
    ],
    productIdeas: [
      {
        id: '12v-water-pump',
        title: '12V DC Pressure Water Pump',
        category: 'Water systems',
        priceRange: '$60 – $180',
        merchantStatus: 'unverified',
        description: 'Match pressure rating and flow rate to your pipe diameter and head height.',
        ctaLabel: 'Merchant pending',
        enabled: false,
      },
      {
        id: 'first-flush-diverter',
        title: 'First-Flush Diverter Kit',
        category: 'Water systems',
        priceRange: '$45 – $120',
        merchantStatus: 'shortlisted',
        description: 'Size the chamber to 1L per 25m² of roof area — undersizing defeats the point.',
        ctaLabel: 'Price check',
        enabled: false,
      },
    ],
  },
  {
    slug: 'shipping-container-pool-deck-off-grid-backyard',
    categorySlug: 'off-grid',
    title: 'Shipping Container Pool: Off-Grid Backyard Build Guide',
    summary:
      'How to convert a 40-foot high-cube into a pool — the cut opening reinforcement, liner selection, and solar pump setup that make or break the build.',
    status: 'published',
    readTime: '10 min read',
    lastUpdated: '2026-10-06',
    heroImage: {
      src: '/images/off-grid/container-pool-deck.jpg',
      alt: 'Shipping container pool partially in-ground with ipe timber deck and solar-powered pump, New Mexico property',
      caption: 'A 40-foot high-cube, partially in-ground on a New Mexico property. Ipe deck, charcoal exterior, solar-charged pump.',
    },
    body: [
      'A decommissioned shipping container is structurally viable as a pool shell because the corrugated steel walls and corner castings are engineered to stack six fully loaded units at sea. The structure is massively overbuilt for a static in-ground installation. The problem is not structural capacity — it is how you cut it without destroying the structure.',
      'Shipping containers get their rigidity from the corrugated side panels acting as stressed skin. Cut an opening without framing it first and the container will rack — twist out of square — within one hot-cold thermal cycle. The correct sequence: weld a full-perimeter 100mm × 100mm RHS steel frame inside the planned opening before the first cut. This creates a new load path around the void. Cut only after the frame is welded solid.',
      { src: '/images/off-grid/container-pool-deck.jpg', alt: 'Container pool deck with ipe timber, native agave and gravel landscaping replacing turf on three sides', caption: 'Native agave and gravel replace turf on three sides. The corrugated exterior is left raw with a single charcoal coat.' },
      "Interior coating is not the place to economise. Paint peels in submersed applications within one season — the expansion and contraction of steel combined with constant water contact defeats any paint system. Spray-applied polyurea lining (2–3mm thick) is the most durable option and bonds directly to the steel surface. A fitted vinyl liner anchored at the container lip is more affordable and DIY-viable but requires careful installation to avoid gaps at the corners.",
      'Partial in-ground placement — floor 600mm below grade on the long sides, cut opening side at deck level — solves the heat problem and reduces the visual footprint. Surrounding soil moderates the water temperature by 3–5°C compared to an above-ground installation, which matters both for comfort and for keeping the liner from degrading in direct sun.',
      'An EcoFlow Delta Pro 2 inside the container in a ventilated compartment, charged from a panel on the container roof, handles the circulation pump (typically 100–250W), LED strip lighting under the deck lip, and an outdoor shower heated by a separate solar thermal panel. The whole system runs independently of the grid.',
    ],
    productIdeas: [
      {
        id: 'pool-circulation-pump',
        title: 'Low-Watt Pool Circulation Pump',
        category: 'Water systems',
        priceRange: '$150 – $400',
        merchantStatus: 'unverified',
        description: 'Size to container volume and match wattage to your power station capacity.',
        ctaLabel: 'Merchant pending',
        enabled: false,
      },
      {
        id: 'ipe-decking-timber',
        title: 'Ipe Hardwood Decking Timber',
        category: 'Decking',
        priceRange: '$80 – $180 per sqm',
        merchantStatus: 'unverified',
        description: 'Confirm moisture content below 19% and FSC certification before ordering.',
        ctaLabel: 'Merchant pending',
        enabled: false,
      },
    ],
  },
  {
    slug: 'rammed-earth-passive-solar-studio-off-grid',
    categorySlug: 'off-grid',
    title: 'Rammed Earth Passive Solar Studio: Off-Grid Build Guide',
    summary:
      'How a 600mm rammed earth wall and a calculated roof overhang work together to eliminate air conditioning in a dry climate — and what the payback numbers actually look like.',
    status: 'published',
    readTime: '9 min read',
    lastUpdated: '2026-10-06',
    heroImage: {
      src: '/images/off-grid/rammed-earth-studio.jpg',
      alt: 'Rammed earth passive solar studio with clerestory glazing and EcoFlow solar system, New Mexico high desert',
      caption: 'A 600mm rammed earth studio in the New Mexico high desert. No air conditioning, no gas. Measured heating bill payback: seven years.',
    },
    body: [
      'A rammed earth wall is not a material preference — it is a thermal strategy with specific design rules. The wall absorbs heat during the day and releases it 8–12 hours later, which smooths out the temperature swings that mechanical systems exist to manage. In a climate with a diurnal temperature range above 15°C, the physics work reliably. In a humid maritime climate with a small diurnal range, they do not.',
      'Wall thickness is the key variable. At 400mm, you get some thermal lag — enough to feel different from a light-frame wall, not enough to carry the building through a cold night without supplemental heat. At 500–600mm, you get 8–10 hours of lag, which means the wall is still releasing daytime heat at midnight. Above 700mm, the marginal gain per extra millimetre decreases sharply and the formwork cost stops paying back.',
      { src: '/images/off-grid/rammed-earth-studio.jpg', alt: 'Rammed earth studio exterior with polished concrete floor and clay plaster interior walls visible through south glazing', caption: 'The studio floor is polished concrete over sand and gravel sub-base — a second thermal layer at almost no extra cost.' },
      'Clerestory glazing on the north wall (or south wall in the northern hemisphere) brings soft diffused light deep into the plan without the solar gain that direct-sun glass produces in summer. A 400mm roof overhang, calculated to the local latitude\'s midsummer sun angle, shades the glass completely at noon on the longest day while admitting full winter sun when the angle drops. This is a fixed geometry calculation — it is not an approximation, and it is the difference between passive cooling and passive heating being in conflict.',
      'Roof-mounted solar on a passive-designed studio is genuinely efficient because the base load is so low. A correctly insulated passive studio in the US Southwest typically uses under 2kWh per day for lighting and a laptop. A modest roof array charges a 2kWh battery bank from a half-day of winter sun. The building\'s thermal envelope does the heavy lifting; the battery handles the rest.',
      'The seven-year payback claim is real for dry climates with high construction costs for conventional HVAC. It assumes the rammed earth premium over light-frame construction is $80–120/m² of wall, and the avoided HVAC energy cost is $400–600 per year for a 50m² studio in a high-heat-gain climate.',
    ],
    productIdeas: [
      {
        id: 'rammed-earth-formwork',
        title: 'Adjustable Steel Rammed Earth Formwork',
        category: 'Construction',
        priceRange: '$800 – $2,500',
        merchantStatus: 'unverified',
        description: 'Verify panel width matches your planned wall thickness before ordering.',
        ctaLabel: 'Merchant pending',
        enabled: false,
      },
      {
        id: 'solar-power-station-studio',
        title: 'Solar Power Station (Studio Load)',
        category: 'Energy storage',
        priceRange: '$600 – $1,500',
        merchantStatus: 'shortlisted',
        description: 'Measure actual daily draw before sizing — passive buildings use far less than assumed.',
        ctaLabel: 'Price check',
        enabled: false,
      },
    ],
  },
  {
    slug: 'micro-hydro-creek-power-off-grid-energy',
    categorySlug: 'off-grid',
    title: 'Micro Hydro Creek Power: Off-Grid Energy System Guide',
    summary:
      'How to calculate head and flow, choose a turbine, and design an intake that does not destroy itself in the first wet season.',
    status: 'published',
    readTime: '8 min read',
    lastUpdated: '2026-10-06',
    heroImage: {
      src: '/images/off-grid/micro-hydro-creek.jpg',
      alt: 'Micro hydro creek power system with penstock pipe and Pelton turbine in a timber generator shed, Vermont maple farm',
      caption: 'A 2-inch penstock running 80 vertical feet feeds a 500W Pelton turbine. The battery bank runs the farm year-round.',
    },
    body: [
      'A small year-round creek is the most reliable power source on a rural property. Solar drops in winter and on overcast days. Wind requires elevation and open ground. A creek with 10 metres of vertical head and 2 litres per second of flow produces roughly 100W continuously — 2.4kWh per day, every day, regardless of cloud cover or season. If the flow and head numbers are there, micro hydro is almost always the most cost-effective off-grid energy source available.',
      "Head is what determines output, not flow. Head is the vertical distance between the intake and the turbine. The basic calculation: head in metres × flow in litres per second × 5.6 = approximate output in watts for a Pelton turbine running at 75% efficiency. Calculate this before you buy anything. A creek with 25 metres of head and 1 L/s produces 140W. The same creek with 5 metres of head and 5 L/s produces 140W — but the low-head version needs a completely different (and more expensive) turbine type.",
      { src: '/images/off-grid/micro-hydro-creek.jpg', alt: 'Micro hydro creek intake rock box and penstock pipe running to generator shed', caption: 'The rock-box intake slows water enough for sediment to drop out before it enters the penstock. Without it, fine grit erodes the turbine nozzle within a season.' },
      'The intake is where most DIY micro hydro systems fail. A rock-box intake — a small stone-lined pool at the diversion point — slows the incoming water enough for sediment to settle before entering the penstock pipe. Without it, fine grit at creek velocity is abrasive. It will erode a brass turbine nozzle to an unusable opening within one high-flow season and require a replacement that costs more than the intake would have.',
      'Penstock pipe sizing: use PN10 or higher pressure-rated HDPE for any head above 30 metres. Under-specified pipe fails at the couplings under operating pressure — not immediately, but after thermal cycling and surge events. Pipe diameter determines friction loss; for a 2-inch penstock under 80 feet of head with 1 L/s flow, friction loss is acceptable. Add more flow or more head and re-run the numbers.',
      'A good battery management controller — one with clear status display and configurable load-shedding — makes the difference between a system that runs unattended for weeks and one that requires daily checks. Micro hydro charges slowly and continuously; the battery management strategy is different from solar, and not all charge controllers handle continuous low-current input as well as they handle solar profiles.',
    ],
    productIdeas: [
      {
        id: 'pelton-turbine',
        title: 'Pelton Turbine (100–500W)',
        category: 'Hydro power',
        priceRange: '$400 – $1,800',
        merchantStatus: 'unverified',
        description: 'Match nozzle size to your calculated flow rate — oversized nozzles waste head pressure.',
        ctaLabel: 'Merchant pending',
        enabled: false,
      },
      {
        id: 'hdpe-penstock-pipe',
        title: 'HDPE Penstock Pipe (2–4 inch)',
        category: 'Hydro power',
        priceRange: '$3 – $12 per metre',
        merchantStatus: 'unverified',
        description: 'PN10 minimum — undersized pressure rating fails at couplings under surge conditions.',
        ctaLabel: 'Merchant pending',
        enabled: false,
      },
    ],
  },

  // ─── v30 Halloween ────────────────────────────────────────────────────────────
  {
    slug: 'smoked-glass-cloche-halloween-centrepiece',
    categorySlug: 'halloween',
    title: 'Smoked Glass Cloche Centrepiece: Modern Halloween Table',
    summary:
      'Three cloches, three dried botanicals, and under-lighting — how to build a Halloween centrepiece that holds for the full month without wilting or looking dated.',
    status: 'published',
    readTime: '6 min read',
    lastUpdated: '2026-10-06',
    heroImage: {
      src: '/images/halloween/smoked-glass-cloche.jpg',
      alt: 'Three smoked glass cloches in descending heights with dried botanical specimens and warm LED underlighting on a dining table',
      caption: 'Three cloches, descending heights, single dried specimen inside each. Battery LED puck lights underneath at 2700K.',
    },
    body: [
      "The reason most Halloween table centrepieces look cheap is not the budget — it's the material logic. Mixing a foam skull, a plastic cauldron, a synthetic spider web, and an orange candle gives you Halloween imagery without a material story. The result looks assembled rather than considered. A single material story — smoked glass, dried botanicals, warm light — reads as considered, costs less, and lasts the whole month.",
      'Smoked glass works for Halloween because it obscures without hiding. A dried honesty stem or a skeletal umbelifer inside a smoked cloche is visible as a silhouette, which is more suggestive than a fully visible specimen and more interesting than an opaque container. The glass does the interpretive work. Nothing needs to be manufactured to look spooky.',
      { src: '/images/halloween/smoked-glass-cloche.jpg', alt: 'Close detail of smoked glass cloche with dried botanical stem and warm amber LED underlighting', caption: 'The LED disc sits directly under the cloche base. 2700K colour temperature — cooler light kills the amber warmth immediately.' },
      'Height variation is what makes the grouping read as collected rather than purchased as a set. The tallest cloche should be roughly twice the height of the shortest. Place it off-centre toward one end, set the smallest at the opposite end, and let the middle height sit between. Do not space them evenly. Uneven spacing reads as deliberate; even spacing reads as a display.',
      'The palette that holds this through October and into November: aged brass, deep charcoal, warm ivory, dusty sage. These four tones work in daylight and lamplight. They do not lock the piece into Halloween-only territory, which means it can sit on the table from mid-October through to the first week of November without looking like it missed its removal date.',
    ],
    productIdeas: [
      {
        id: 'smoked-glass-cloches',
        title: 'Smoked Glass Cloches (Mixed Heights)',
        category: 'Table styling',
        priceRange: '$45 – $120',
        merchantStatus: 'shortlisted',
        description: 'Confirm the base diameter — LED puck lights need at least 5cm clearance underneath.',
        ctaLabel: 'Price check',
        enabled: false,
      },
      {
        id: 'warm-led-puck-lights',
        title: 'Battery LED Puck Lights (Warm White 2700K)',
        category: 'Lighting',
        priceRange: '$18 – $45',
        merchantStatus: 'unverified',
        description: 'Check the colour temperature spec — cool daylight (5000K+) kills the amber effect.',
        ctaLabel: 'Merchant pending',
        enabled: false,
      },
    ],
  },
  {
    slug: 'dried-wheat-sheaf-front-door-wreath-autumn-halloween',
    categorySlug: 'halloween',
    title: 'Dried Wheat Sheaf Wreath: Autumn Front Door Guide',
    summary:
      'How to bind a flat-backed wheat sheaf wreath that works from September through November — with the binding sequence, ribbon width, and hanging height that make the difference.',
    status: 'published',
    readTime: '6 min read',
    lastUpdated: '2026-10-06',
    heroImage: {
      src: '/images/halloween/wheat-sheaf-wreath.jpg',
      alt: 'Dried wheat sheaf front door wreath with burgundy dahlia accent and wide linen ribbon on a charcoal door',
      caption: 'Wheat sheaf, burgundy dahlia accent at the crown, wide linen bow at the lower binding. Eye height on the charcoal door.',
    },
    body: [
      "A wheat sheaf wreath works for six weeks because it anchors in harvest rather than Halloween. The imagery is botanical and seasonal, not costumed, which means it doesn't expire on November 1st the way most Halloween decorations do. That six-week window is worth building for properly.",
      'Build the sheaf as a flat-backed form, not a circular wreath. A flat back hangs flush, reads as a considered object rather than a store-bought ring, and is structurally simpler to bind tightly. Use natural jute twine at three points: low on the stems, mid-shaft, and just below the ears. Each binding needs to be tight enough that no individual stem can shift when the door opens and closes. Loose stems rattle and pull out within a week.',
      { src: '/images/halloween/wheat-sheaf-wreath.jpg', alt: 'Dried wheat sheaf wreath detail showing jute binding points and wheat ear structure', caption: 'Three binding points in jute. Each one tight enough that no stem shifts when the door moves.' },
      'The floral accent goes at the crown, after binding. Two or three stems of dried burgundy dahlias pressed into the upper wheat ears, or a small bundle of dried pampas, is the right amount. More than that and the eye goes to the flowers rather than the wheat. The wheat should be the primary material from street distance.',
      'Ribbon width matters more than ribbon type. Anything under 60mm looks apologetic against the visual weight of a full sheaf. At 80mm or wider, a simple bow at the lower binding point balances the mass of the ears at the top and completes the vertical composition. Linen or cotton only — polyester catches light differently and photographs badly.',
      'Hang it at eye height. The construction of a well-made sheaf wreath — ear shape, jute binding, stem ends — registers at 1–2 metres. At door-top height it disappears into a blurred texture. Eye height also photographs correctly in natural light from street level.',
    ],
    productIdeas: [
      {
        id: 'dried-wheat-sheaf-bundle',
        title: 'Dried Wheat Sheaf Bundle',
        category: 'Seasonal decor',
        priceRange: '$15 – $45',
        merchantStatus: 'unverified',
        description: 'Buy enough for two attempts — the first binding teaches you how much you need.',
        ctaLabel: 'Merchant pending',
        enabled: false,
      },
      {
        id: 'wide-linen-ribbon',
        title: 'Wide Natural Linen Ribbon (80mm+)',
        category: 'Styling materials',
        priceRange: '$8 – $22',
        merchantStatus: 'unverified',
        description: 'Linen or cotton only — polyester catches light differently and reads immediately as cheap.',
        ctaLabel: 'Merchant pending',
        enabled: false,
      },
    ],
  },
  {
    slug: 'dark-velvet-pumpkin-cluster-luxury-halloween-entry-table',
    categorySlug: 'halloween',
    title: 'Dark Velvet Pumpkin Cluster: Luxury Halloween Entry Table',
    summary:
      'Seven pumpkins, one candlestick, an empty marble surface — how colour consistency and vertical hierarchy turn a cluster into a considered display.',
    status: 'published',
    readTime: '5 min read',
    lastUpdated: '2026-10-07',
    heroImage: {
      src: '/images/halloween/velvet-pumpkin-entry-table.jpg',
      alt: 'Dark velvet pumpkins in black, deep plum and midnight navy clustered on a marble entry table with a tall black candlestick',
      caption: 'Seven velvet pumpkins — black, deep plum, midnight navy — grouped by size. One tall matte-black candlestick. Nothing else on the table.',
    },
    body: [
      'Velvet pumpkins cluster well because the surface texture reads as collected rather than manufactured. The decision that determines whether the display looks intentional or accidental is colour — specifically, whether you stay inside a single tonal family or mix across warm and cool.',
      'Black, deep plum, and midnight navy all read as near-black at two metres. That visual weight at distance makes the group look dense and deliberate. Closer up, each pumpkin has its own character. Introduce an ochre stem or an orange-toned burgundy and the tight dark palette breaks immediately — the warm note pulls the eye and the whole grouping looks like it was assembled from leftovers.',
      { src: '/images/halloween/velvet-pumpkin-entry-table.jpg', alt: 'Detail of velvet pumpkin grouping showing size graduation and colour consistency in dark tones', caption: 'Three large at the back, two medium in the middle, two small at the front. No gaps — let them touch.' },
      'Seven is the right number for a standard 120cm entry table. Group by size: three large at the back, two medium in the middle, two small at the front. Let them touch — gaps read as hesitation. A tall matte-black candlestick at the back-left provides the vertical anchor that stops the cluster from sitting flat.',
      'The rest of the table stays empty. The empty marble surface is as much a part of the composition as the objects on it — it provides the negative space that makes the cluster read as placed rather than piled. A tray, a runner, or a second candle breaks the intent immediately.',
    ],
    productIdeas: [
      {
        id: 'velvet-pumpkins-dark',
        title: 'Velvet Pumpkins (Dark Tones, Set of 7)',
        category: 'Seasonal decor',
        priceRange: '$55 – $140',
        merchantStatus: 'shortlisted',
        description: 'Order all from one maker — dye lots vary significantly between suppliers.',
        ctaLabel: 'Price check',
        enabled: false,
      },
      {
        id: 'tall-black-candlestick',
        title: 'Tall Black Candlestick (400mm+)',
        category: 'Table styling',
        priceRange: '$25 – $70',
        merchantStatus: 'unverified',
        description: 'Matte finish only — gloss black competes with the velvet texture.',
        ctaLabel: 'Merchant pending',
        enabled: false,
      },
    ],
  },

  // ─── v30 Pet Wellness ─────────────────────────────────────────────────────────
  {
    slug: 'maine-coon-indoor-luxury-glass-cabin-guide',
    categorySlug: 'pet-wellness',
    title: 'Maine Coon at Home: Breed Guide for Glass and Open Spaces',
    summary:
      "What the Maine Coon's size, coat, and temperament actually mean for how you set up your home — and why the breed thrives in exactly the kind of spaces most cats find unsettling.",
    status: 'published',
    readTime: '7 min read',
    lastUpdated: '2026-10-06',
    heroImage: {
      src: '/images/pet-wellness/maine-coon-glass-cabin.jpg',
      alt: 'Large silver-tabby Maine Coon sitting on a wide timber window ledge in a glass-walled woodland cabin at dawn',
      caption: 'A silver-tabby Maine Coon on a wide timber ledge at dawn. The ruff and ear furnishings catch backlight from the birch treeline.',
    },
    body: [
      'The Maine Coon is the largest domestic cat breed in regular ownership. Adult females typically reach 5–8kg; males commonly land at 7–12kg, with outliers above that. At that scale the breed occupies a room differently — not in a demanding way, but in a physically present one. A Maine Coon on a window ledge is a statement piece.',
      "The double-layer coat is engineered for cold exposure. The dense undercoat insulates; the silky guard hairs shed water and most surface debris; the ear furnishings and paw tufts are specific adaptations for deep snow. In a heated interior, that coat needs weekly combing at minimum — more during the spring moult in March and April. The areas that mat first are the ruff, the elbows, and the base of the tail where the layers compress under body weight. A slicker brush doesn't reach the undercoat. Use a wide-tooth rake followed by a fine steel comb.",
      { src: '/images/pet-wellness/maine-coon-glass-cabin.jpg', alt: 'Maine Coon coat detail showing ruff, ear furnishings and paw tufts backlit by morning light through glass cabin wall', caption: 'The ear furnishings and paw tufts catch backlight. The ruff needs weekly combing — it mats at the base where it compresses against the chest.' },
      'Maine Coons are unusually comfortable with wide-open views and glass walls. Most domestic cat breeds read large transparent surfaces as a threat or an anomaly and will avoid sitting directly in front of them. Maine Coons consistently choose the most exposed vantage point in a room — the highest ledge facing the largest window — and remain there for hours. A glass-walled cabin is not an unfamiliar environment for the breed. It is exactly where they choose to be.',
      'For indoor enrichment, the breed needs vertical space more than floor area. A floor-to-ceiling cat tree or a wall-mounted shelf system at two or three heights satisfies their instinct to monitor from elevation without requiring outdoor access. The structural requirement is real: a 10kg cat hitting a platform at speed puts significant dynamic load through the base. Most lightweight fabric-covered trees fail within one season of serious use. Solid timber uprights with weighted bases or wall-anchoring are the only long-term options.',
    ],
    productIdeas: [
      {
        id: 'large-breed-cat-tree',
        title: 'Solid-Frame Cat Tree (Large Breed)',
        category: 'Cat furniture',
        priceRange: '$150 – $450',
        merchantStatus: 'shortlisted',
        description: 'Confirm base weight and wall-anchor option — a 10kg cat at speed will tip a lightweight frame.',
        ctaLabel: 'Price check',
        enabled: false,
      },
      {
        id: 'deshedding-grooming-tool',
        title: 'De-Shedding Grooming Rake (Long Hair)',
        category: 'Grooming',
        priceRange: '$25 – $65',
        merchantStatus: 'unverified',
        description: "Maine Coon coats need a wide rake then a fine steel comb — a slicker brush doesn't reach the undercoat.",
        ctaLabel: 'Merchant pending',
        enabled: false,
      },
    ],
  },
];

export function getArticles(): Article[] {
  return articles;
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articles.filter((article) => article.categorySlug === categorySlug);
}
