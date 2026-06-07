const groups = {
  A: ["Mexico", "South Africa", "South Korea", "Czechia"],
  B: ["Canada", "Switzerland", "Qatar", "Bosnia and Herzegovina"],
  C: ["Brazil", "Morocco", "Haiti", "Scotland"],
  D: ["United States", "Paraguay", "Australia", "Türkiye"],
  E: ["Germany", "Curaçao", "Ivory Coast", "Ecuador"],
  F: ["Netherlands", "Japan", "Tunisia", "Sweden"],
  G: ["Belgium", "Egypt", "Iran", "New Zealand"],
  H: ["Spain", "Cape Verde", "Saudi Arabia", "Uruguay"],
  I: ["France", "Senegal", "Norway", "Iraq"],
  J: ["Argentina", "Algeria", "Austria", "Jordan"],
  K: ["Portugal", "Uzbekistan", "Colombia", "DR Congo"],
  L: ["England", "Croatia", "Ghana", "Panama"]
};

const zh = {
  "Mexico": "墨西哥",
  "South Africa": "南非",
  "South Korea": "韩国",
  "Czechia": "捷克",
  "Canada": "加拿大",
  "Switzerland": "瑞士",
  "Qatar": "卡塔尔",
  "Bosnia and Herzegovina": "波黑",
  "Brazil": "巴西",
  "Morocco": "摩洛哥",
  "Haiti": "海地",
  "Scotland": "苏格兰",
  "United States": "美国",
  "USA": "美国",
  "Paraguay": "巴拉圭",
  "Australia": "澳大利亚",
  "Türkiye": "土耳其",
  "Germany": "德国",
  "Curaçao": "库拉索",
  "Ivory Coast": "科特迪瓦",
  "Ecuador": "厄瓜多尔",
  "Netherlands": "荷兰",
  "Japan": "日本",
  "Tunisia": "突尼斯",
  "Sweden": "瑞典",
  "Belgium": "比利时",
  "Egypt": "埃及",
  "Iran": "伊朗",
  "New Zealand": "新西兰",
  "Spain": "西班牙",
  "Cape Verde": "佛得角",
  "Saudi Arabia": "沙特阿拉伯",
  "Uruguay": "乌拉圭",
  "France": "法国",
  "Senegal": "塞内加尔",
  "Norway": "挪威",
  "Iraq": "伊拉克",
  "Argentina": "阿根廷",
  "Algeria": "阿尔及利亚",
  "Austria": "奥地利",
  "Jordan": "约旦",
  "Portugal": "葡萄牙",
  "Uzbekistan": "乌兹别克斯坦",
  "Colombia": "哥伦比亚",
  "DR Congo": "民主刚果",
  "England": "英格兰",
  "Croatia": "克罗地亚",
  "Ghana": "加纳",
  "Panama": "巴拿马"
};

const venueZh = {
  "Mexico City Stadium (Estadio Azteca)": "墨西哥城体育场（阿兹特克）",
  "Guadalajara Stadium (Estadio Akron), Zapopan": "瓜达拉哈拉体育场（阿克伦），萨波潘",
  "Toronto Stadium (BMO Field)": "多伦多体育场（BMO球场）",
  "Los Angeles Stadium (SoFi)": "洛杉矶体育场（SoFi）",
  "San Francisco Bay Area Stadium (Levi's)": "旧金山湾区体育场（李维斯）",
  "New York New Jersey Stadium (MetLife)": "纽约/新泽西体育场（大都会人寿）",
  "Boston Stadium (Gillette)": "波士顿体育场（吉列）",
  "BC Place, Vancouver": "温哥华 BC Place 体育场",
  "Houston Stadium (NRG)": "休斯敦体育场（NRG）",
  "Dallas Stadium (AT&T)": "达拉斯体育场（AT&T）",
  "Philadelphia Stadium (Lincoln Financial)": "费城体育场（林肯金融球场）",
  "Monterrey Stadium (Estadio BBVA), Guadalupe": "蒙特雷体育场（BBVA），瓜达卢佩",
  "Atlanta Stadium (Mercedes-Benz)": "亚特兰大体育场（梅赛德斯-奔驰）",
  "Seattle Stadium (Lumen Field)": "西雅图体育场（流明球场）",
  "Miami Stadium (Hard Rock)": "迈阿密体育场（硬石）",
  "Kansas City Stadium (Arrowhead)": "堪萨斯城体育场（箭头）",
  "New York New Jersey Stadium (MetLife), East Rutherford": "纽约/新泽西体育场（大都会人寿），东卢瑟福"
};

const rawMatches = [
  ["M1", "Group", "A", "Jun 11", "3:00 PM", "Mexico", "South Africa", "Mexico City Stadium (Estadio Azteca)"],
  ["M2", "Group", "A", "Jun 11", "10:00 PM", "South Korea", "Czechia", "Guadalajara Stadium (Estadio Akron), Zapopan"],
  ["M3", "Group", "B", "Jun 12", "3:00 PM", "Canada", "Bosnia and Herzegovina", "Toronto Stadium (BMO Field)"],
  ["M4", "Group", "D", "Jun 12", "9:00 PM", "USA", "Paraguay", "Los Angeles Stadium (SoFi)"],
  ["M5", "Group", "B", "Jun 13", "3:00 PM", "Qatar", "Switzerland", "San Francisco Bay Area Stadium (Levi's)"],
  ["M6", "Group", "C", "Jun 13", "6:00 PM", "Brazil", "Morocco", "New York New Jersey Stadium (MetLife)"],
  ["M7", "Group", "C", "Jun 13", "9:00 PM", "Haiti", "Scotland", "Boston Stadium (Gillette)"],
  ["M8", "Group", "D", "Jun 14", "12:00 AM", "Australia", "Türkiye", "BC Place, Vancouver"],
  ["M9", "Group", "E", "Jun 14", "1:00 PM", "Germany", "Curaçao", "Houston Stadium (NRG)"],
  ["M10", "Group", "F", "Jun 14", "4:00 PM", "Netherlands", "Japan", "Dallas Stadium (AT&T)"],
  ["M11", "Group", "E", "Jun 14", "7:00 PM", "Ivory Coast", "Ecuador", "Philadelphia Stadium (Lincoln Financial)"],
  ["M12", "Group", "F", "Jun 14", "10:00 PM", "Sweden", "Tunisia", "Monterrey Stadium (Estadio BBVA), Guadalupe"],
  ["M13", "Group", "H", "Jun 15", "12:00 PM", "Spain", "Cape Verde", "Atlanta Stadium (Mercedes-Benz)"],
  ["M14", "Group", "G", "Jun 15", "3:00 PM", "Belgium", "Egypt", "Seattle Stadium (Lumen Field)"],
  ["M15", "Group", "H", "Jun 15", "6:00 PM", "Saudi Arabia", "Uruguay", "Miami Stadium (Hard Rock)"],
  ["M16", "Group", "G", "Jun 15", "9:00 PM", "Iran", "New Zealand", "Los Angeles Stadium (SoFi)"],
  ["M17", "Group", "I", "Jun 16", "3:00 PM", "France", "Senegal", "New York New Jersey Stadium (MetLife)"],
  ["M18", "Group", "I", "Jun 16", "6:00 PM", "Iraq", "Norway", "Boston Stadium (Gillette)"],
  ["M19", "Group", "J", "Jun 16", "9:00 PM", "Argentina", "Algeria", "Kansas City Stadium (Arrowhead)"],
  ["M20", "Group", "J", "Jun 17", "12:00 AM", "Austria", "Jordan", "San Francisco Bay Area Stadium (Levi's)"],
  ["M21", "Group", "K", "Jun 17", "1:00 PM", "Portugal", "DR Congo", "Houston Stadium (NRG)"],
  ["M22", "Group", "L", "Jun 17", "4:00 PM", "England", "Croatia", "Dallas Stadium (AT&T)"],
  ["M23", "Group", "L", "Jun 17", "7:00 PM", "Ghana", "Panama", "Toronto Stadium (BMO Field)"],
  ["M24", "Group", "K", "Jun 17", "10:00 PM", "Uzbekistan", "Colombia", "Mexico City Stadium (Estadio Azteca)"],
  ["M25", "Group", "A", "Jun 18", "12:00 PM", "Czechia", "South Africa", "Atlanta Stadium (Mercedes-Benz)"],
  ["M26", "Group", "B", "Jun 18", "3:00 PM", "Switzerland", "Bosnia and Herzegovina", "Los Angeles Stadium (SoFi)"],
  ["M27", "Group", "B", "Jun 18", "6:00 PM", "Canada", "Qatar", "BC Place, Vancouver"],
  ["M28", "Group", "A", "Jun 18", "9:00 PM", "Mexico", "South Korea", "Guadalajara Stadium (Estadio Akron), Zapopan"],
  ["M29", "Group", "D", "Jun 19", "12:00 AM", "Türkiye", "Paraguay", "San Francisco Bay Area Stadium (Levi's)"],
  ["M30", "Group", "D", "Jun 19", "3:00 PM", "USA", "Australia", "Seattle Stadium (Lumen Field)"],
  ["M31", "Group", "C", "Jun 19", "6:00 PM", "Scotland", "Morocco", "Boston Stadium (Gillette)"],
  ["M32", "Group", "C", "Jun 19", "8:30 PM", "Brazil", "Haiti", "Philadelphia Stadium (Lincoln Financial)"],
  ["M33", "Group", "F", "Jun 20", "1:00 PM", "Netherlands", "Sweden", "Houston Stadium (NRG)"],
  ["M34", "Group", "E", "Jun 20", "4:00 PM", "Germany", "Ivory Coast", "Toronto Stadium (BMO Field)"],
  ["M35", "Group", "E", "Jun 20", "8:00 PM", "Ecuador", "Curaçao", "Kansas City Stadium (Arrowhead)"],
  ["M36", "Group", "F", "Jun 21", "12:00 AM", "Tunisia", "Japan", "Monterrey Stadium (Estadio BBVA), Guadalupe"],
  ["M37", "Group", "H", "Jun 21", "12:00 PM", "Spain", "Saudi Arabia", "Atlanta Stadium (Mercedes-Benz)"],
  ["M38", "Group", "G", "Jun 21", "3:00 PM", "Belgium", "Iran", "Los Angeles Stadium (SoFi)"],
  ["M39", "Group", "H", "Jun 21", "6:00 PM", "Uruguay", "Cape Verde", "Miami Stadium (Hard Rock)"],
  ["M40", "Group", "G", "Jun 21", "9:00 PM", "New Zealand", "Egypt", "BC Place, Vancouver"],
  ["M41", "Group", "J", "Jun 22", "1:00 PM", "Argentina", "Austria", "Dallas Stadium (AT&T)"],
  ["M42", "Group", "I", "Jun 22", "5:00 PM", "France", "Iraq", "Philadelphia Stadium (Lincoln Financial)"],
  ["M43", "Group", "I", "Jun 22", "8:00 PM", "Norway", "Senegal", "New York New Jersey Stadium (MetLife)"],
  ["M44", "Group", "J", "Jun 22", "11:00 PM", "Jordan", "Algeria", "San Francisco Bay Area Stadium (Levi's)"],
  ["M45", "Group", "K", "Jun 23", "1:00 PM", "Portugal", "Uzbekistan", "Houston Stadium (NRG)"],
  ["M46", "Group", "L", "Jun 23", "4:00 PM", "England", "Ghana", "Boston Stadium (Gillette)"],
  ["M47", "Group", "L", "Jun 23", "7:00 PM", "Panama", "Croatia", "Toronto Stadium (BMO Field)"],
  ["M48", "Group", "K", "Jun 23", "10:00 PM", "Colombia", "DR Congo", "Guadalajara Stadium (Estadio Akron), Zapopan"],
  ["M49", "Group", "B", "Jun 24", "3:00 PM", "Switzerland", "Canada", "BC Place, Vancouver"],
  ["M50", "Group", "B", "Jun 24", "3:00 PM", "Bosnia and Herzegovina", "Qatar", "Seattle Stadium (Lumen Field)"],
  ["M51", "Group", "C", "Jun 24", "6:00 PM", "Scotland", "Brazil", "Miami Stadium (Hard Rock)"],
  ["M52", "Group", "C", "Jun 24", "6:00 PM", "Morocco", "Haiti", "Atlanta Stadium (Mercedes-Benz)"],
  ["M53", "Group", "A", "Jun 24", "9:00 PM", "Czechia", "Mexico", "Mexico City Stadium (Estadio Azteca)"],
  ["M54", "Group", "A", "Jun 24", "9:00 PM", "South Africa", "South Korea", "Monterrey Stadium (Estadio BBVA), Guadalupe"],
  ["M55", "Group", "E", "Jun 25", "4:00 PM", "Curaçao", "Ivory Coast", "Philadelphia Stadium (Lincoln Financial)"],
  ["M56", "Group", "E", "Jun 25", "4:00 PM", "Ecuador", "Germany", "New York New Jersey Stadium (MetLife)"],
  ["M57", "Group", "F", "Jun 25", "7:00 PM", "Japan", "Sweden", "Dallas Stadium (AT&T)"],
  ["M58", "Group", "F", "Jun 25", "7:00 PM", "Tunisia", "Netherlands", "Kansas City Stadium (Arrowhead)"],
  ["M59", "Group", "D", "Jun 25", "10:00 PM", "Türkiye", "USA", "Los Angeles Stadium (SoFi)"],
  ["M60", "Group", "D", "Jun 25", "10:00 PM", "Paraguay", "Australia", "San Francisco Bay Area Stadium (Levi's)"],
  ["M61", "Group", "I", "Jun 26", "3:00 PM", "Norway", "France", "Boston Stadium (Gillette)"],
  ["M62", "Group", "I", "Jun 26", "3:00 PM", "Senegal", "Iraq", "Toronto Stadium (BMO Field)"],
  ["M63", "Group", "H", "Jun 26", "8:00 PM", "Cape Verde", "Saudi Arabia", "Houston Stadium (NRG)"],
  ["M64", "Group", "H", "Jun 26", "8:00 PM", "Uruguay", "Spain", "Guadalajara Stadium (Estadio Akron), Zapopan"],
  ["M65", "Group", "G", "Jun 26", "11:00 PM", "Egypt", "Iran", "Seattle Stadium (Lumen Field)"],
  ["M66", "Group", "G", "Jun 26", "11:00 PM", "New Zealand", "Belgium", "BC Place, Vancouver"],
  ["M67", "Group", "L", "Jun 27", "5:00 PM", "Panama", "England", "New York New Jersey Stadium (MetLife)"],
  ["M68", "Group", "L", "Jun 27", "5:00 PM", "Croatia", "Ghana", "Philadelphia Stadium (Lincoln Financial)"],
  ["M69", "Group", "K", "Jun 27", "7:30 PM", "Colombia", "Portugal", "Miami Stadium (Hard Rock)"],
  ["M70", "Group", "K", "Jun 27", "7:30 PM", "DR Congo", "Uzbekistan", "Atlanta Stadium (Mercedes-Benz)"],
  ["M71", "Group", "J", "Jun 27", "10:00 PM", "Algeria", "Austria", "Kansas City Stadium (Arrowhead)"],
  ["M72", "Group", "J", "Jun 27", "10:00 PM", "Jordan", "Argentina", "Dallas Stadium (AT&T)"],
  ["M73", "Round of 32", "", "Jun 28", "3:00 PM", "2nd Group A", "2nd Group B", "Los Angeles Stadium (SoFi)"],
  ["M76", "Round of 32", "", "Jun 29", "1:00 PM", "1st Group C", "2nd Group F", "Houston Stadium (NRG)"],
  ["M74", "Round of 32", "", "Jun 29", "4:30 PM", "1st Group E", "Best 3rd (A/B/C/D/F)", "Boston Stadium (Gillette)"],
  ["M75", "Round of 32", "", "Jun 29", "9:00 PM", "1st Group F", "2nd Group C", "Monterrey Stadium (Estadio BBVA), Guadalupe"],
  ["M78", "Round of 32", "", "Jun 30", "1:00 PM", "2nd Group E", "2nd Group I", "Dallas Stadium (AT&T)"],
  ["M77", "Round of 32", "", "Jun 30", "5:00 PM", "1st Group I", "Best 3rd (C/D/F/G/H)", "New York New Jersey Stadium (MetLife)"],
  ["M79", "Round of 32", "", "Jun 30", "9:00 PM", "1st Group A", "Best 3rd (C/E/F/H/I)", "Mexico City Stadium (Estadio Azteca)"],
  ["M80", "Round of 32", "", "Jul 1", "12:00 PM", "1st Group L", "Best 3rd (E/H/I/J/K)", "Atlanta Stadium (Mercedes-Benz)"],
  ["M82", "Round of 32", "", "Jul 1", "4:00 PM", "1st Group G", "Best 3rd (A/E/H/I/J)", "Seattle Stadium (Lumen Field)"],
  ["M81", "Round of 32", "", "Jul 1", "8:00 PM", "1st Group D", "Best 3rd (B/E/F/I/J)", "San Francisco Bay Area Stadium (Levi's)"],
  ["M84", "Round of 32", "", "Jul 2", "3:00 PM", "1st Group H", "2nd Group J", "Los Angeles Stadium (SoFi)"],
  ["M83", "Round of 32", "", "Jul 2", "7:00 PM", "2nd Group K", "2nd Group L", "Toronto Stadium (BMO Field)"],
  ["M85", "Round of 32", "", "Jul 2", "11:00 PM", "1st Group B", "Best 3rd (E/F/G/I/J)", "BC Place, Vancouver"],
  ["M88", "Round of 32", "", "Jul 3", "2:00 PM", "2nd Group D", "2nd Group G", "Dallas Stadium (AT&T)"],
  ["M86", "Round of 32", "", "Jul 3", "6:00 PM", "1st Group J", "2nd Group H", "Miami Stadium (Hard Rock)"],
  ["M87", "Round of 32", "", "Jul 3", "9:30 PM", "1st Group K", "Best 3rd (D/E/I/J/L)", "Kansas City Stadium (Arrowhead)"],
  ["M90", "Round of 16", "", "Jul 4", "1:00 PM", "Winner M73", "Winner M75", "Houston Stadium (NRG)"],
  ["M89", "Round of 16", "", "Jul 4", "5:00 PM", "Winner M74", "Winner M77", "Philadelphia Stadium (Lincoln Financial)"],
  ["M91", "Round of 16", "", "Jul 5", "4:00 PM", "Winner M76", "Winner M78", "New York New Jersey Stadium (MetLife)"],
  ["M92", "Round of 16", "", "Jul 5", "8:00 PM", "Winner M79", "Winner M80", "Mexico City Stadium (Estadio Azteca)"],
  ["M93", "Round of 16", "", "Jul 6", "3:00 PM", "Winner M83", "Winner M84", "Dallas Stadium (AT&T)"],
  ["M94", "Round of 16", "", "Jul 6", "8:00 PM", "Winner M81", "Winner M82", "Seattle Stadium (Lumen Field)"],
  ["M95", "Round of 16", "", "Jul 7", "12:00 PM", "Winner M86", "Winner M88", "Atlanta Stadium (Mercedes-Benz)"],
  ["M96", "Round of 16", "", "Jul 7", "4:00 PM", "Winner M85", "Winner M87", "BC Place, Vancouver"],
  ["M97", "Quarterfinal", "", "Jul 9", "4:00 PM", "Winner M89", "Winner M90", "Boston Stadium (Gillette)"],
  ["M98", "Quarterfinal", "", "Jul 10", "3:00 PM", "Winner M93", "Winner M94", "Los Angeles Stadium (SoFi)"],
  ["M99", "Quarterfinal", "", "Jul 11", "5:00 PM", "Winner M91", "Winner M92", "Miami Stadium (Hard Rock)"],
  ["M100", "Quarterfinal", "", "Jul 11", "9:00 PM", "Winner M95", "Winner M96", "Kansas City Stadium (Arrowhead)"],
  ["M101", "Semifinal", "", "Jul 14", "3:00 PM", "Winner M97", "Winner M98", "Dallas Stadium (AT&T)"],
  ["M102", "Semifinal", "", "Jul 15", "3:00 PM", "Winner M99", "Winner M100", "Atlanta Stadium (Mercedes-Benz)"],
  ["M103", "Third Place", "", "Jul 18", "5:00 PM", "Loser M101", "Loser M102", "Miami Stadium (Hard Rock)"],
  ["M104", "Final", "", "Jul 19", "3:00 PM", "Winner M101", "Winner M102", "New York New Jersey Stadium (MetLife), East Rutherford"]
];

const stageNames = {
  "All": "全部",
  "Group": "小组赛",
  "Round of 32": "32强",
  "Round of 16": "16强",
  "Quarterfinal": "1/4决赛",
  "Semifinal": "半决赛",
  "Third Place": "三四名",
  "Final": "决赛"
};

const monthMap = { Jun: 5, Jul: 6 };
const weekday = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
let state = { view: "schedule", stage: "All", group: "All", search: "" };
let favorites = new Set(JSON.parse(localStorage.getItem("wc26Favorites") || "[]"));
let modelStore = JSON.parse(localStorage.getItem("wc26Models") || "{}");
let activeMatchId = null;
let deferredPrompt = null;
const params = new URLSearchParams(location.search);
if (params.get("view")) state.view = params.get("view");
if (params.get("stage")) state.stage = params.get("stage");
if (params.get("group")) state.group = params.get("group");
if (params.get("search")) state.search = params.get("search");
if (params.get("fav")) params.get("fav").split(",").filter(Boolean).forEach((id) => favorites.add(id));
if (params.get("demo")) {
  modelStore.M1 = {
    homeXg: 1.55,
    awayXg: 0.82,
    goalLine: 2.25,
    homeOdds: 1.72,
    drawOdds: 3.65,
    awayOdds: 5.20,
    overOdds: 1.92,
    underOdds: 1.88
  };
}

const matches = rawMatches
  .map(toMatch)
  .sort((a, b) => a.utc - b.utc || Number(a.id.replace("M", "")) - Number(b.id.replace("M", "")));

function toMatch(row) {
  const [id, stage, group, dateEt, timeEt, home, away, venue] = row;
  const utc = parseEastern(dateEt, timeEt);
  return {
    id,
    stage,
    group,
    dateEt,
    timeEt,
    home,
    away,
    venue,
    venueCn: venueZh[venue] || venue,
    utc,
    searchText: `${id} ${stage} ${group} ${home} ${away} ${zhName(home)} ${zhName(away)} ${venue} ${venueZh[venue] || ""}`.toLowerCase()
  };
}

function parseEastern(dateEt, timeEt) {
  const [mon, dayText] = dateEt.split(" ");
  const day = Number(dayText);
  const [hm, meridiem] = timeEt.split(" ");
  let [hour, minute] = hm.split(":").map(Number);
  if (meridiem === "PM" && hour !== 12) hour += 12;
  if (meridiem === "AM" && hour === 12) hour = 0;
  return new Date(Date.UTC(2026, monthMap[mon], day, hour + 4, minute));
}

function zhName(name) {
  if (zh[name]) return zh[name];
  return name
    .replace("1st Group", "小组第1")
    .replace("2nd Group", "小组第2")
    .replace("Best 3rd", "最佳第3")
    .replace("Winner", "胜者")
    .replace("Loser", "负者");
}

function formatBj(date) {
  const parts = new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).formatToParts(date);
  const pick = (type) => parts.find((part) => part.type === type)?.value || "";
  const bj = new Date(date.toLocaleString("en-US", { timeZone: "Asia/Shanghai" }));
  return `${pick("month")}月${pick("day")}日 ${weekday[bj.getDay()]} ${pick("hour")}:${pick("minute")}`;
}

function formatBjKey(date) {
  const parts = new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    month: "numeric",
    day: "numeric",
    weekday: "short"
  }).formatToParts(date);
  const pick = (type) => parts.find((part) => part.type === type)?.value || "";
  return `${pick("month")}月${pick("day")}日 ${pick("weekday")}`;
}

function stageLabel(match) {
  if (match.stage === "Group") return `${match.group}组 小组赛`;
  return stageNames[match.stage] || match.stage;
}

function formatEt(match) {
  const [mon, day] = match.dateEt.split(" ");
  const [hm, meridiem] = match.timeEt.split(" ");
  let [hour, minute] = hm.split(":").map(Number);
  if (meridiem === "PM" && hour !== 12) hour += 12;
  if (meridiem === "AM" && hour === 12) hour = 0;
  return `美国东部：${mon === "Jun" ? "6" : "7"}月${day}日 ${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

function filteredMatches(source = matches) {
  return source.filter((match) => {
    if (state.stage !== "All" && match.stage !== state.stage) return false;
    if (state.group !== "All" && match.group !== state.group) return false;
    if (state.search && !match.searchText.includes(state.search.toLowerCase())) return false;
    return true;
  });
}

function renderFilters() {
  const stageFilters = document.querySelector("#stageFilters");
  const groupFilters = document.querySelector("#groupFilters");
  stageFilters.innerHTML = ["All", "Group", "Round of 32", "Round of 16", "Quarterfinal", "Semifinal", "Final"]
    .map((stage) => chip(stageNames[stage], state.stage === stage, `data-stage="${stage}"`))
    .join("");
  groupFilters.innerHTML = ["All", ...Object.keys(groups)]
    .map((group) => chip(group === "All" ? "全部小组" : `${group}组`, state.group === group, `data-group="${group}"`))
    .join("");
}

function chip(label, active, attrs) {
  return `<button class="filter-chip ${active ? "active" : ""}" ${attrs} type="button">${label}</button>`;
}

function renderMatches() {
  const list = document.querySelector("#matchesList");
  const result = filteredMatches();
  document.querySelector("#matchCount").textContent = `${result.length} 场`;
  list.innerHTML = renderMatchList(result);
}

function renderMatchList(items) {
  if (!items.length) return `<div class="empty-state">没有找到匹配的比赛</div>`;
  let lastKey = "";
  return items.map((match) => {
    const key = formatBjKey(match.utc);
    const divider = key !== lastKey ? `<div class="date-divider">${key}</div>` : "";
    lastKey = key;
    return divider + matchCard(match);
  }).join("");
}

function matchCard(match) {
  const isFav = favorites.has(match.id);
  return `
    <article class="match-card" data-open="${match.id}">
      <div class="match-top">
        <span class="stage-label">${stageLabel(match)}</span>
        <span class="match-number">${match.id}</span>
      </div>
      <div class="team-row">
        <div class="teams">
          <strong>${zhName(match.home)}</strong>
          <strong>${zhName(match.away)}</strong>
        </div>
        <span class="versus">VS</span>
        <div class="time-box">
          <span class="bj-time">${formatBj(match.utc)}</span>
          <span class="et-time">${formatEt(match)}</span>
        </div>
      </div>
      <div class="match-bottom">
        <span class="venue">${match.venueCn}</span>
        <button class="favorite-button ${isFav ? "active" : ""}" data-fav="${match.id}" type="button" aria-label="关注比赛">${isFav ? "已" : "加"}</button>
      </div>
    </article>
  `;
}

function renderGroups() {
  document.querySelector("#groupsGrid").innerHTML = Object.entries(groups).map(([group, teams]) => `
    <article class="group-card">
      <div class="group-head">
        <strong>${group}组</strong>
        <span>${teams.length}队</span>
      </div>
      <div class="team-list">
        ${teams.map((team, index) => `
          <div class="team-item">
            <span>${zhName(team)}</span>
            <span>${index + 1}档位 / ${team}</span>
          </div>
        `).join("")}
      </div>
    </article>
  `).join("");
}

function renderFavorites() {
  const items = matches.filter((match) => favorites.has(match.id));
  document.querySelector("#favoriteCount").textContent = `${items.length} 场`;
  document.querySelector("#favoritesList").innerHTML = renderMatchList(filteredMatches(items));
}

function setView(view) {
  state.view = view;
  document.querySelectorAll(".segment").forEach((button) => button.classList.toggle("active", button.dataset.view === view));
  document.querySelectorAll(".view").forEach((section) => section.classList.remove("active"));
  document.querySelector(`#${view}View`).classList.add("active");
  render();
}

function render() {
  renderFilters();
  renderMatches();
  renderFavorites();
  if (!document.querySelector("#groupsGrid").children.length) renderGroups();
}

function toggleFavorite(id) {
  if (favorites.has(id)) favorites.delete(id);
  else favorites.add(id);
  localStorage.setItem("wc26Favorites", JSON.stringify([...favorites]));
  render();
}

function openMatch(id) {
  const match = matches.find((item) => item.id === id);
  if (!match) return;
  activeMatchId = id;
  const dialog = document.querySelector("#matchDialog");
  document.querySelector("#dialogStage").textContent = stageLabel(match);
  document.querySelector("#dialogTeams").textContent = `${zhName(match.home)} vs ${zhName(match.away)}`;
  document.querySelector("#dialogBj").textContent = formatBj(match.utc);
  document.querySelector("#dialogEt").textContent = formatEt(match);
  document.querySelector("#dialogVenue").textContent = match.venueCn;
  document.querySelector("#dialogMatch").textContent = `${match.id} / ${stageNames[match.stage] || match.stage}`;
  const action = document.querySelector("#dialogFavorite");
  action.textContent = favorites.has(match.id) ? "取消关注" : "加入关注";
  action.onclick = () => {
    toggleFavorite(match.id);
    dialog.close();
  };
  loadModelInputs(id);
  dialog.showModal();
}

function numberValue(id) {
  const value = document.querySelector(`#${id}`).value.trim();
  if (!value) return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function setNumberValue(id, value) {
  document.querySelector(`#${id}`).value = value ?? "";
}

function currentInput() {
  return {
    homeXg: numberValue("homeXg"),
    awayXg: numberValue("awayXg"),
    goalLine: numberValue("goalLine"),
    homeOdds: numberValue("homeOdds"),
    drawOdds: numberValue("drawOdds"),
    awayOdds: numberValue("awayOdds"),
    overOdds: numberValue("overOdds"),
    underOdds: numberValue("underOdds")
  };
}

function loadModelInputs(id) {
  const saved = modelStore[id] || {};
  ["homeXg", "awayXg", "goalLine", "homeOdds", "drawOdds", "awayOdds", "overOdds", "underOdds"].forEach((key) => {
    setNumberValue(key, saved[key]);
  });
  document.querySelector("#modelResults").innerHTML = saved.homeXg ? renderModel(saved) : "";
}

function saveModelInputs() {
  if (!activeMatchId) return;
  const input = currentInput();
  modelStore[activeMatchId] = input;
  localStorage.setItem("wc26Models", JSON.stringify(modelStore));
  document.querySelector("#modelResults").innerHTML = renderModel(input);
}

function clearModelInputs() {
  if (!activeMatchId) return;
  delete modelStore[activeMatchId];
  localStorage.setItem("wc26Models", JSON.stringify(modelStore));
  ["homeXg", "awayXg", "goalLine", "homeOdds", "drawOdds", "awayOdds", "overOdds", "underOdds"].forEach((key) => setNumberValue(key, ""));
  document.querySelector("#modelResults").innerHTML = "";
}

function factorial(n) {
  let value = 1;
  for (let i = 2; i <= n; i += 1) value *= i;
  return value;
}

function poisson(lambda, goals) {
  return Math.exp(-lambda) * Math.pow(lambda, goals) / factorial(goals);
}

function buildModel(homeXg, awayXg, line) {
  const maxGoals = 12;
  let home = 0;
  let draw = 0;
  let away = 0;
  const totals = new Map();
  const scores = [];
  for (let h = 0; h <= maxGoals; h += 1) {
    for (let a = 0; a <= maxGoals; a += 1) {
      const p = poisson(homeXg, h) * poisson(awayXg, a);
      if (h > a) home += p;
      else if (h === a) draw += p;
      else away += p;
      totals.set(h + a, (totals.get(h + a) || 0) + p);
      scores.push({ score: `${h}-${a}`, p });
    }
  }
  scores.sort((x, y) => y.p - x.p);
  return { home, draw, away, totals, scores: scores.slice(0, 6), line };
}

function sumTotals(totals, predicate) {
  let sum = 0;
  totals.forEach((p, goals) => {
    if (predicate(goals)) sum += p;
  });
  return sum;
}

function asianOutcome(model, side) {
  const line = model.line;
  const floorHalf = Math.floor(line * 2) / 2;
  const ceilHalf = line * 2 === Math.floor(line * 2) ? floorHalf : floorHalf + 0.5;
  const frac = Math.abs(line - Math.floor(line));
  const totals = model.totals;
  if (side === "over") {
    if (Math.abs(frac - 0.25) < 0.001) {
      return {
        fullWin: sumTotals(totals, (g) => g > ceilHalf),
        halfWin: 0,
        push: 0,
        halfLoss: totals.get(floorHalf) || 0,
        fullLoss: sumTotals(totals, (g) => g < floorHalf)
      };
    }
    if (Math.abs(frac - 0.75) < 0.001) {
      return {
        fullWin: sumTotals(totals, (g) => g > ceilHalf),
        halfWin: totals.get(ceilHalf) || 0,
        push: 0,
        halfLoss: 0,
        fullLoss: sumTotals(totals, (g) => g < floorHalf)
      };
    }
    return {
      fullWin: sumTotals(totals, (g) => g > line),
      halfWin: 0,
      push: Number.isInteger(line) ? totals.get(line) || 0 : 0,
      halfLoss: 0,
      fullLoss: sumTotals(totals, (g) => g < line)
    };
  }
  if (Math.abs(frac - 0.25) < 0.001) {
    return {
      fullWin: sumTotals(totals, (g) => g < floorHalf),
      halfWin: totals.get(floorHalf) || 0,
      push: 0,
      halfLoss: 0,
      fullLoss: sumTotals(totals, (g) => g > ceilHalf)
    };
  }
  if (Math.abs(frac - 0.75) < 0.001) {
    return {
      fullWin: sumTotals(totals, (g) => g < floorHalf),
      halfWin: 0,
      push: 0,
      halfLoss: totals.get(ceilHalf) || 0,
      fullLoss: sumTotals(totals, (g) => g > ceilHalf)
    };
  }
  return {
    fullWin: sumTotals(totals, (g) => g < line),
    halfWin: 0,
    push: Number.isInteger(line) ? totals.get(line) || 0 : 0,
    halfLoss: 0,
    fullLoss: sumTotals(totals, (g) => g > line)
  };
}

function asianEv(outcome, odds) {
  return (odds - 1) * outcome.fullWin + 0.5 * (odds - 1) * outcome.halfWin - 0.5 * outcome.halfLoss - outcome.fullLoss;
}

function fairOdds(outcome) {
  const winUnits = outcome.fullWin + 0.5 * outcome.halfWin;
  const lossUnits = outcome.fullLoss + 0.5 * outcome.halfLoss;
  if (winUnits <= 0) return null;
  return 1 + lossUnits / winUnits;
}

function pickJudgement(ev, edge, isMarketProbability) {
  const second = isMarketProbability ? edge : edge;
  if (ev >= 0.08 && second >= 0.03) return "可下注";
  if (ev >= 0.03 && second >= 0.015) return "小注";
  if (ev > 0 && second > 0) return "仅观察";
  if (second > 0) return "方向有利/价不够";
  return "放弃/观望";
}

function pct(value) {
  return `${(value * 100).toFixed(1)}%`;
}

function odds(value) {
  return value ? value.toFixed(2) : "-";
}

function renderModel(input) {
  const required = ["homeXg", "awayXg", "goalLine", "homeOdds", "drawOdds", "awayOdds", "overOdds", "underOdds"];
  if (required.some((key) => input[key] === null || input[key] === undefined || input[key] <= 0)) {
    return `<div class="empty-state">请填完整 xG、盘口和赔率</div>`;
  }
  const model = buildModel(input.homeXg, input.awayXg, input.goalLine);
  const inv = [1 / input.homeOdds, 1 / input.drawOdds, 1 / input.awayOdds];
  const sumInv = inv.reduce((a, b) => a + b, 0);
  const sides = [
    { name: "主胜", p: model.home, price: input.homeOdds, market: inv[0] / sumInv },
    { name: "平局", p: model.draw, price: input.drawOdds, market: inv[1] / sumInv },
    { name: "客胜", p: model.away, price: input.awayOdds, market: inv[2] / sumInv }
  ].map((row) => {
    const ev = row.price * row.p - 1;
    const edge = row.p - row.market;
    return { ...row, ev, edge, fair: 1 / row.p, judgement: pickJudgement(ev, edge, true) };
  });

  const overOutcome = asianOutcome(model, "over");
  const underOutcome = asianOutcome(model, "under");
  const overFair = fairOdds(overOutcome);
  const underFair = fairOdds(underOutcome);
  const totalsRows = [
    { name: "大球", p: overOutcome.fullWin + 0.5 * overOutcome.halfWin, price: input.overOdds, fair: overFair, ev: asianEv(overOutcome, input.overOdds), edge: overFair ? input.overOdds / overFair - 1 : -1 },
    { name: "小球", p: underOutcome.fullWin + 0.5 * underOutcome.halfWin, price: input.underOdds, fair: underFair, ev: asianEv(underOutcome, input.underOdds), edge: underFair ? input.underOdds / underFair - 1 : -1 }
  ].map((row) => ({ ...row, judgement: pickJudgement(row.ev, row.edge, false) }));

  const rows = [...sides, ...totalsRows].sort((a, b) => b.ev - a.ev);
  const betRows = rows.filter((row) => ["可下注", "小注"].includes(row.judgement));
  const leanRows = rows.filter((row) => ["仅观察", "方向有利/价不够"].includes(row.judgement));
  const summaryRows = betRows.length ? betRows : leanRows.slice(0, 2);
  const scoreText = model.scores.map((item) => `${item.score} ${pct(item.p)}`).join(" / ");
  const goalBand = topGoalBand(model.totals);
  return `
    <div class="result-section direction-section">
      <div class="result-title">
        <strong>下注方向</strong>
        <span>${summaryRows.length ? "按EV排序" : "无可买方向"}</span>
      </div>
      ${
        summaryRows.length
          ? summaryRows.map((row, index) => directionRow(row, index)).join("")
          : `<div class="empty-model">当前赔率下没有达到下注标准</div>`
      }
    </div>
    <div class="result-section">
      <div class="result-title">
        <strong>比分</strong>
        <span>总xG ${(input.homeXg + input.awayXg).toFixed(2)}</span>
      </div>
      <div class="score-grid">
        ${model.scores.slice(0, 4).map((item, index) => `
          <div class="score-card ${index === 0 ? "best" : ""}">
            <strong>${item.score}</strong>
            <span>${pct(item.p)}</span>
          </div>
        `).join("")}
      </div>
      <div class="goal-band">进球数倾向：${goalBand}</div>
    </div>
    <div class="result-section">
      <div class="result-title">
        <strong>胜平负</strong>
        <span>去水后对比</span>
      </div>
      ${sides.map(resultRow).join("")}
    </div>
    <div class="result-section">
      <div class="result-title">
        <strong>大小球</strong>
        <span>真实亚盘EV</span>
      </div>
      ${totalsRows.map(resultRow).join("")}
    </div>
  `;
}

function topGoalBand(totals) {
  const bands = [
    { name: "0-1球", p: sumTotals(totals, (g) => g <= 1) },
    { name: "1-2球", p: sumTotals(totals, (g) => g >= 1 && g <= 2) },
    { name: "2-3球", p: sumTotals(totals, (g) => g >= 2 && g <= 3) },
    { name: "3球以上", p: sumTotals(totals, (g) => g >= 3) }
  ].sort((a, b) => b.p - a.p);
  return `${bands[0].name} ${pct(bands[0].p)}`;
}

function badgeClass(judgement) {
  if (judgement === "可下注") return "bet";
  if (judgement === "小注") return "small";
  if (judgement === "仅观察" || judgement === "方向有利/价不够") return "watch";
  return "";
}

function resultRow(row) {
  return `
    <div class="result-row">
      <strong>${row.name}</strong>
      <span>概率 ${pct(row.p)}　公平 ${odds(row.fair)}　EV ${pct(row.ev)}</span>
      <em class="badge ${badgeClass(row.judgement)}">${row.judgement}</em>
    </div>
  `;
}

function directionRow(row, index) {
  return `
    <div class="direction-row">
      <span class="rank">${index + 1}</span>
      <div>
        <strong>${row.name}</strong>
        <span>EV ${pct(row.ev)} / 公平赔率 ${odds(row.fair)}</span>
      </div>
      <em class="badge ${badgeClass(row.judgement)}">${row.judgement}</em>
    </div>
  `;
}

document.addEventListener("click", (event) => {
  const stageButton = event.target.closest("[data-stage]");
  if (stageButton) {
    state.stage = stageButton.dataset.stage;
    render();
    return;
  }
  const groupButton = event.target.closest("[data-group]");
  if (groupButton) {
    state.group = groupButton.dataset.group;
    if (state.group !== "All") state.stage = "Group";
    render();
    return;
  }
  const segment = event.target.closest("[data-view]");
  if (segment) {
    setView(segment.dataset.view);
    return;
  }
  const favorite = event.target.closest("[data-fav]");
  if (favorite) {
    event.stopPropagation();
    toggleFavorite(favorite.dataset.fav);
    return;
  }
  const card = event.target.closest("[data-open]");
  if (card) openMatch(card.dataset.open);
});

document.querySelector("#searchInput").addEventListener("input", (event) => {
  state.search = event.target.value.trim();
  render();
});

document.querySelector("#dialogClose").addEventListener("click", () => document.querySelector("#matchDialog").close());
document.querySelector("#calculateModel").addEventListener("click", saveModelInputs);
document.querySelector("#clearModel").addEventListener("click", clearModelInputs);

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;
  document.querySelector("#installButton").hidden = false;
});

document.querySelector("#installButton").addEventListener("click", async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  document.querySelector("#installButton").hidden = true;
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js"));
}

document.querySelector("#searchInput").value = state.search;
if (["schedule", "groups", "favorites"].includes(state.view)) setView(state.view);
render();
if (params.get("open")) {
  window.setTimeout(() => openMatch(params.get("open")), 150);
}
