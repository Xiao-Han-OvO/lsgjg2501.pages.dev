import { pinyin } from "pinyin-pro";

// --- Types ---
export interface StudentProfile {
  name: string;
  id: number;
  groups: string[];
  roles: string[];
  descriptions: string[];
  color: string;
}

// --- Raw Data ---
const rawGroups = [
  {
    name: "信息竞赛组",
    color: "from-blue-400 to-cyan-500",
    members: ["杜玘岳", "匡梓桐", "袁泽博", "张钦涵", "周诚", "周子程"]
  },
  {
    name: "数学竞赛组",
    color: "from-red-400 to-pink-500",
    members: ["曾浚源", "何牧原", "李嘉峻", "龚鸿仁杰", "邓子轩", "范亦宸", "杨可为", "陈佳怡", "晏子晖", "刘昊梁", "邓一滔", "黎劢", "李皓", "张澍泽", "魏子翔", "李世航"]
  },
  {
    name: "物理竞赛组",
    color: "from-purple-400 to-indigo-500",
    members: ["范文熙", "高铭森", "夏思妍", "艾可为", "喻涵博", "黄季熙", "张天骏", "杨谨逸", "胡清清", "董晋玮", "肖浩寅", "李诺辰", "周彦宏", "杨钰航", "毛敏劼", "刘子曦", "李书坦", "王睿捷", "李昕玥", "李晟"]
  },
  {
    name: "化学竞赛组",
    color: "from-emerald-400 to-teal-500",
    members: ["孙沛玮", "彭君昊", "康子超", "黄义皓", "李睿"]
  },
  {
    name: "生物竞赛组",
    color: "from-lime-400 to-green-500",
    members: ["刘宇晗", "游宇哲", "康子航", "李弘逸", "陈嘉奕", "陈彰沛", "李定远", "谭明可", "周浩然"]
  }
];

export const committeeData = [
  { role: "学习班长", name: "杨可为", description: `引领学风，统筹学术。负责牵头制定班级学习计划、组织经验分享与竞赛交流，营造\u201C比、学、赶、帮\u201D的学术氛围，是班级求知路上的灯塔与协作者。` },
  { role: "活动班长", name: "陈彰沛", description: "凝聚集体，策划精彩。主导班级文体活动、社会实践与团队建设，让严谨的竞赛生活注入舒展与欢笑的节奏，锻造有温度、有凝聚力的集体记忆。" },
  { role: "班主任助理", name: "杜玘岳", description: "承上启下，衔接内外。协助班主任处理日常事务，做好信息传达与反馈，是师生间的桥梁，保障班级事务运转有序、高效。" },
  { role: "团支部书记", name: "游宇哲", description: "思想引领，组织建设。负责团务工作、主题教育与志愿活动，凝聚青春向党心，带领班级在思想与实践上共同进步。" },
  { role: "学习委员", name: "胡清清", description: "细致落实，助力日常。负责作业收发、学习资料整理，并关注同学学习状态，是学习班长的重要助力，也是大家学习路上的贴心支持者。" },
  { role: "纪律委员", name: "黄季熙", description: "维护秩序，营造静心。负责课堂与自习纪律，协助营造专注、有序的学习环境，让每位同学都能在宁静中深入思考。" },
  { role: "体育委员", name: "艾可为", description: `强健体魄，凝聚活力。组织课间操、体育锻炼及班级体育活动，提醒大家\u201C文明其精神，野蛮其体魄\u201D，为高强度学习储备充沛精力。` },
  { role: "心理委员", name: "董晋玮", description: `聆听陪伴，守护心灵。关注班级情绪氛围，提供倾听与支持，组织开展心理调适活动，是班级温暖的\u201C心灵驿站\u201D。` },
  { role: "心理委员", name: "胡清清", description: `聆听陪伴，守护心灵。关注班级情绪氛围，提供倾听与支持，组织开展心理调适活动，是班级温暖的\u201C心灵驿站\u201D。` },
  { role: "卫生委员", name: "康子超", description: "守护环境，共建舒心。负责教室卫生安排与维护，监督日常保洁，打造整洁、明亮的学习空间，让环境滋养身心。" },
  { role: "卫生委员", name: "黎劢", description: "守护环境，共建舒心。负责教室卫生安排与维护，监督日常保洁，打造整洁、明亮的学习空间，让环境滋养身心。" },
  { role: "生活委员", name: "高铭森", description: `关照日常，细致入微。专门负责教室电源管理（开关、节能提醒）与绿植养护，是用电安全的\u201C守护者\u201D和班级绿意的\u201C园丁\u201D，让教室既有秩序也有生机。` },
  { role: "文娱委员", name: "周浩然", description: "点燃才情，丰富时光。组织文艺活动、节日庆祝与才艺展示，为班级增添艺术气息与轻松时刻，让青春不止于书本，更绽放于舞台。" },
];

const specialNames = ['陈佳怡', '胡清清', '李昕玥', '刘子曦', '谭明可', '夏思妍', '杨可为'];

// --- Helpers ---
const pinyinSort = (a: string, b: string) => {
  return pinyin(a, { toneType: 'none' }).localeCompare(pinyin(b, { toneType: 'none' }));
};

// --- Precompute Global ID List ---
const globalIdMap = new Map<string, number>();

const initIds = () => {
  const allMembers = rawGroups.flatMap(g => g.members);
  const uniqueMembers = Array.from(new Set(allMembers));
  
  const others = uniqueMembers.filter(m => !specialNames.includes(m));
  const specials = uniqueMembers.filter(m => specialNames.includes(m));
  
  others.sort(pinyinSort);
  specials.sort(pinyinSort);
  
  const sorted = [...others, ...specials];
  sorted.forEach((name, index) => {
    globalIdMap.set(name, index + 1);
  });
};

initIds();

export { rawGroups, specialNames, pinyinSort };

// --- Main Function ---
export function getStudentProfile(name: string): StudentProfile {
  const groups = rawGroups
    .filter(g => g.members.includes(name))
    .map(g => g.name);
  
  const committeeEntries = committeeData.filter(c => c.name === name);
  const roles = committeeEntries.map(c => c.role);
  const descriptions = committeeEntries.map(c => c.description);
  
  const id = globalIdMap.get(name) || 999;
  
  const firstGroup = rawGroups.find(g => g.members.includes(name));
  const color = firstGroup ? firstGroup.color : "from-slate-400 to-slate-500";

  return {
    name,
    id,
    groups,
    roles,
    descriptions,
    color
  };
}
