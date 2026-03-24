import { pinyin } from "pinyin-pro";
import { Term } from "../context/TimeContext";

// --- Types ---
export interface StudentProfile {
  name: string;
  id: number;
  groups: string[];
  roles: string[];
  descriptions: string[];
  color: string;
}

// --- Raw Data Base (Shared) ---
export const specialNames = ['陈佳怡', '胡清清', '李昕玥', '刘子曦', '谭明可', '夏思妍', '杨可为'];

// Master list of all students ever in class to maintain consistent IDs
const masterStudentList = [
  "杜玘岳", "匡梓桐", "袁泽博", "张钦涵", "周诚", "周子程",
  "曾浚源", "何牧原", "李嘉峻", "龚鸿仁杰", "邓子轩", "范亦宸", "杨可为", "陈佳怡", "晏子晖", "刘昊梁", "邓一滔", "黎劢", "李皓", "张澍泽", "魏子翔", "李世航", "李昕玥",
  "范文熙", "高铭森", "夏思妍", "艾可为", "喻涵博", "黄季熙", "张天骏", "杨谨逸", "胡清清", "董晋玮", "肖浩寅", "李诺辰", "周彦宏", "杨钰航", "毛敏劼", "刘子曦", "李书坦", "王睿捷", "李晟",
  "孙沛玮", "彭君昊", "康子超", "黄义皓", "李睿",
  "刘宇晗", "游宇哲", "康子航", "李弘逸", "陈嘉奕", "陈彰沛", "李定远", "谭明可", "周浩然",
  "转校生A", "新生B"
];

const pinyinSort = (a: string, b: string) => {
  return pinyin(a, { toneType: 'none' }).localeCompare(pinyin(b, { toneType: 'none' }));
};

const globalIdMap = new Map<string, number>();

const initIds = () => {
  const uniqueMembers = Array.from(new Set(masterStudentList));
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

export { pinyinSort };

// --- Term Dependent Data ---

export interface GroupData {
  name: string;
  color: string;
  members: string[];
}

export interface CommitteeData {
  role: string;
  name: string;
  description: string;
}

export interface TeacherData {
  name: string;
  subject: string;
  tag?: string;
  desc: string;
  color: string;
}

export interface CoachData {
  name: string;
  subject: string;
  desc: string;
  color: string;
}

export interface TermData {
  rawGroups: GroupData[];
  committeeData: CommitteeData[];
  subjectTeachers: TeacherData[];
  competitionCoaches: CoachData[];
  idList?: string[];
  tuanData?: { name: string; members: string[] }[];
}

const termDataMap: Record<Term, TermData> = {
  "2025秋季学期": {
    rawGroups: [
      { name: "信息竞赛组", color: "from-blue-400 to-cyan-500", members: ["杜玘岳", "匡梓桐", "袁泽博", "张钦涵", "周诚", "周子程"] },
      { name: "数学竞赛组", color: "from-red-400 to-pink-500", members: ["曾浚源", "何牧原", "李嘉峻", "龚鸿仁杰", "邓子轩", "范亦宸", "杨可为", "陈佳怡", "晏子晖", "刘昊梁", "邓一滔", "黎劢", "李皓", "张澍泽", "魏子翔", "李世航", "李昕玥"] },
      { name: "物理竞赛组", color: "from-purple-400 to-indigo-500", members: ["范文熙", "高铭森", "夏思妍", "艾可为", "喻涵博", "黄季熙", "张天骏", "杨谨逸", "胡清清", "董晋玮", "肖浩寅", "李诺辰", "周彦宏", "杨钰航", "毛敏劼", "刘子曦", "李书坦", "王睿捷", "李晟"] },
      { name: "化学竞赛组", color: "from-emerald-400 to-teal-500", members: ["孙沛玮", "彭君昊", "康子超", "黄义皓", "李睿"] },
      { name: "生物竞赛组", color: "from-lime-400 to-green-500", members: ["刘宇晗", "游宇哲", "康子航", "李弘逸", "陈嘉奕", "陈彰沛", "李定远", "谭明可", "周浩然"] }
    ],
    committeeData: [
      { role: "学习班长", name: "杨可为", description: "引领学风，统筹学术。负责牵头制定班级学习计划、组织经验分享与竞赛交流，营造“比、学、赶、帮”的学术氛围，是班级求知路上的灯塔与协作者。" },
      { role: "活动班长", name: "陈彰沛", description: "凝聚集体，策划精彩。主导班级文体活动、社会实践与团队建设，让严谨的竞赛生活注入舒展与欢笑的节奏，锻造有温度、有凝聚力的集体记忆。" },
      { role: "班主任助理", name: "杜玘岳", description: "承上启下，衔接内外。协助班主任处理日常事务，做好信息传达与反馈，是师生间的桥梁，保障班级事务运转有序、高效。" },
      { role: "团支部书记", name: "游宇哲", description: "思想引领，组织建设。负责团务工作、主题教育与志愿活动，凝聚青春向党心，带领班级在思想与实践上共同进步。" },
      { role: "\u5b66\u4e60\u59d4\u5458", name: "\u80e1\u6e05\u6e05", description: "\u7ec6\u81f4\u843d\u5b9e\uff0c\u52a9\u529b\u65e5\u5e38\u3002\u8d1f\u8d23\u4f5c\u4e1a\u6536\u53d1\u3001\u5b66\u4e60\u8d44\u6599\u6574\u7406\uff0c\u5e76\u5173\u6ce8\u540c\u5b66\u5b66\u4e60\u72b6\u6001\uff0c\u662f\u5b66\u4e60\u73ed\u957f\u7684\u91cd\u8981\u52a9\u529b\uff0c\u4e5f\u662f\u5927\u5bb6\u5b66\u4e60\u8def\u4e0a\u7684\u8d34\u5fc3\u652f\u6301\u8005\u3002" },
      { role: "\u7eaa\u5f8b\u59d4\u5458", name: "\u9ec4\u5b63\u7199", description: "\u7ef4\u62a4\u79e9\u5e8f\uff0c\u8425\u9020\u9759\u5fc3\u3002\u8d1f\u8d23\u8bfe\u5802\u4e0e\u81ea\u4e60\u7eaa\u5f8b\uff0c\u534f\u52a9\u8425\u9020\u4e13\u6ce8\u3001\u6709\u5e8f\u7684\u5b66\u4e60\u73af\u5883\uff0c\u8ba9\u6bcf\u4f4d\u540c\u5b66\u90fd\u80fd\u5728\u5b81\u9759\u4e2d\u6df1\u5165\u601d\u8003\u3002" },
      { role: "\u4f53\u80b2\u59d4\u5458", name: "\u827e\u53ef\u4e3a", description: "\u5f3a\u5065\u4f53\u9b44\uff0c\u51dd\u805a\u6d3b\u529b\u3002\u7ec4\u7ec7\u8bfe\u95f4\u64cd\u3001\u4f53\u80b2\u953b\u70bc\u53ca\u73ed\u7ea7\u4f53\u80b2\u6d3b\u52a8\uff0c\u63d0\u9192\u5927\u5bb6\u201c\u6587\u660e\u5176\u7cbe\u795e\uff0c\u91ce\u86ee\u5176\u4f53\u9b44\u201d\uff0c\u4e3a\u9ad8\u5f3a\u5ea6\u5b66\u4e60\u50a8\u5907\u5145\u6c9b\u7cbe\u529b\u3002" },
      { role: "\u5fc3\u7406\u59d4\u5458", name: "\u8463\u664b\u73ae", description: "\u8046\u542c\u966a\u4f34\uff0c\u5b88\u62a4\u5fc3\u7075\u3002\u5173\u6ce8\u73ed\u7ea7\u60c5\u7eea\u6c1b\u56f4\uff0c\u63d0\u4f9b\u503e\u542c\u4e0e\u652f\u6301\uff0c\u7ec4\u7ec7\u5f00\u5c55\u5fc3\u7406\u8c03\u9002\u6d3b\u52a8\uff0c\u662f\u73ed\u7ea7\u6e29\u6696\u7684\u201c\u5fc3\u7075\u9a7f\u7ad9\u201d\u3002" },
      { role: "\u5fc3\u7406\u59d4\u5458", name: "\u80e1\u6e05\u6e05", description: "\u8046\u542c\u966a\u4f34\uff0c\u5b88\u62a4\u5fc3\u7075\u3002\u5173\u6ce8\u73ed\u7ea7\u60c5\u7eea\u6c1b\u56f4\uff0c\u63d0\u4f9b\u503e\u542c\u4e0e\u652f\u6301\uff0c\u7ec4\u7ec7\u5f00\u5c55\u5fc3\u7406\u8c03\u9002\u6d3b\u52a8\uff0c\u662f\u73ed\u7ea7\u6e29\u6696\u7684\u201c\u5fc3\u7075\u9a7f\u7ad9\u201d\u3002" },
      { role: "\u536b\u751f\u59d4\u5458", name: "\u5eb7\u5b50\u8d85", description: "\u5b88\u62a4\u73af\u5883\uff0c\u5171\u5efa\u8212\u5fc3\u3002\u8d1f\u8d23\u6559\u5ba4\u536b\u751f\u5b89\u6392\u4e0e\u7ef4\u62a4\uff0c\u76d1\u7763\u65e5\u5e38\u4fdd\u6d01\uff0c\u6253\u9020\u6574\u6d01\u3001\u660e\u4eae\u7684\u5b66\u4e60\u7a7a\u95f4\uff0c\u8ba9\u73af\u5883\u6ecb\u517b\u8eab\u5fc3\u3002" },
      { role: "\u536b\u751f\u59d4\u5458", name: "\u9ece\u52a2", description: "\u5b88\u62a4\u73af\u5883\uff0c\u5171\u5efa\u8212\u5fc3\u3002\u8d1f\u8d23\u6559\u5ba4\u536b\u751f\u5b89\u6392\u4e0e\u7ef4\u62a4\uff0c\u76d1\u7763\u65e5\u5e38\u4fdd\u6d01\uff0c\u6253\u9020\u6574\u6d01\u3001\u660e\u4eae\u7684\u5b66\u4e60\u7a7a\u95f4\uff0c\u8ba9\u73af\u5883\u6ecb\u517b\u8eab\u5fc3\u3002" },
      { role: "\u751f\u6d3b\u59d4\u5458", name: "\u9ad8\u94ed\u68ee", description: "\u5173\u7167\u65e5\u5e38\uff0c\u7ec6\u81f4\u5165\u5fae\u3002\u4e13\u95e8\u8d1f\u8d23\u6559\u5ba4\u7535\u6e90\u7ba1\u7406\uff08\u5f00\u5173\u3001\u8282\u80fd\u63d0\u9192\uff09\u4e0e\u7efe\u690d\u517b\u62a4\uff0c\u662f\u7528\u7535\u5b89\u5168\u7684\u201c\u5b88\u62a4\u8005\u201d\u548c\u73ed\u7ea7\u7efe\u610f\u7684\u201c\u56ed\u4e01\u201d\uff0c\u8ba9\u6559\u5ba4\u65e2\u6709\u79e9\u5e8f\u4e5f\u6709\u751f\u673a\u3002" },
      { role: "\u6587\u5a31\u59d4\u5458", name: "\u5468\u6d69\u7136", description: "\u70b9\u71c3\u624d\u60c5\uff0c\u4e30\u5bcc\u65f6\u5149\u3002\u7ec4\u7ec7\u6587\u827a\u6d3b\u52a8\u3001\u8282\u65e5\u5e86\u795d\u4e0e\u624d\u827a\u5c55\u793a\uff0c\u4e3a\u73ed\u7ea7\u589e\u6dfb\u827a\u672f\u6c14\u606f\u4e0e\u8f7b\u677e\u65f6\u523b\uff0c\u8ba9\u9752\u6625\u4e0d\u6b62\u4e8e\u4e66\u672c\uff0c\u66f4\u7efd\u653e\u4e8e\u821e\u53f0\u3002" }
    ],
    subjectTeachers: [
      { name: "\u5f90\u4e39", subject: "\u8bed\u6587", tag: "", desc: "\u4ee5\u6587\u5b57\u4e3a\u821f\uff0c\u4ee5\u601d\u60f3\u4e3a\u5e06\u3002\u5e26\u6211\u4eec\u7a7f\u8d8a\u5343\u5e74\u6587\u8109\uff0c\u5728\u8bed\u8a00\u7684\u7586\u754c\u91cc\u611f\u53d7\u903b\u8f91\u4e0e\u7f8e\u611f\u7684\u4ea4\u878d\u3002", color: "from-rose-400 to-pink-500" },
      { name: "\u9648\u8bb0\u94ed", subject: "\u6570\u5b66", tag: "", desc: "\u516c\u5f0f\u5728\u5979\u7b14\u4e0b\u4e0d\u6b62\u662f\u7b26\u53f7\uff0c\u66f4\u662f\u6784\u5efa\u4e16\u754c\u7684\u9aa8\u67b6\u3002\u5979\u4e25\u8c28\u7684\u63a8\u7406\u4e0e\u6e05\u6670\u7684\u6f14\u7ece\uff0c\u4e3a\u6211\u4eec\u5938\u5b9e\u601d\u7ef4\u7684\u57fa\u77f3\u3002", color: "from-red-400 to-orange-500" },
      { name: "\u4efb\u835f\u6893", subject: "\u82f1\u8bed", tag: "\u73ed\u4e3b\u4efb", desc: "\u5979\u662f\u8bed\u8a00\u7684\u4f20\u6388\u8005\uff0c\u66f4\u662f\u6210\u957f\u7684\u5b88\u62a4\u4eba\u3002\u5728\u8bfe\u5802\u4e0a\uff0c\u5979\u5e26\u6211\u4eec\u8fde\u63a5\u4e16\u754c\uff1b\u5728\u73ed\u7ea7\u4e2d\uff0c\u5979\u4ee5\u7ec6\u81f4\u4e0e\u667a\u6167\u51dd\u805a\u96c6\u4f53\u3002", color: "from-amber-400 to-yellow-500" },
      { name: "\u7f57\u91cd\u5b66", subject: "\u7269\u7406", tag: "", desc: "\u4ece\u725b\u987f\u5230\u91cf\u5b50\uff0c\u4ed6\u4e3a\u6211\u4eec\u62c6\u89e3\u5b87\u5b99\u7684\u8fd0\u884c\u6cd5\u5219\u3002\u5b9e\u9a8c\u4e0e\u7406\u8bba\u5728\u4ed6\u624b\u4e2d\u4ea4\u7ec7\uff0c\u8ba9\u62bd\u8c61\u7684\u7269\u7406\u6982\u5ff5\u843d\u5730\u751f\u6839\u3002", color: "from-purple-400 to-indigo-500" },
      { name: "\u6768\u82f1\u4f1f", subject: "\u5316\u5b66", tag: "", desc: "\u5206\u5b50\u5728\u4ed6\u8bb2\u8ff0\u4e2d\u4eff\u4f5b\u6709\u4e86\u751f\u547d\u3002\u4ed6\u7528\u53cd\u5e94\u8be0\u91ca\u53d8\u5316\u4e4b\u7f8e\uff0c\u7528\u5b9e\u9a8c\u70b9\u71c3\u63a2\u7d22\u4e4b\u8da3\u3002", color: "from-emerald-400 to-teal-500" },
      { name: "\u5f6d\u5c0f\u5029", subject: "\u751f\u7269", tag: "", desc: "\u4ece\u7ec6\u80de\u5230\u751f\u6001\u7cfb\u7edf\uff0c\u5979\u4e3a\u6211\u4eec\u94fa\u5f00\u751f\u547d\u7684\u753b\u5377\u3002\u5979\u8bb2\u8ff0\u7684\u4e0d\u4ec5\u662f\u77e5\u8bc6\uff0c\u66f4\u662f\u5bf9\u751f\u547d\u5965\u79d8\u7684\u656c\u754f\u4e0e\u597d\u5947\u3002", color: "from-lime-400 to-green-500" },
    ],
    competitionCoaches: [
      { name: "\u5218\u6b63", subject: "\u6570\u5b66\u7ade\u8d5b", desc: "\u4ed6\u5e26\u9886\u6211\u4eec\u6500\u767b\u7eaf\u601d\u7ef4\u7684\u5dc5\u5cf0\u3002\u5728\u7b26\u53f7\u4e0e\u8bc1\u660e\u7684\u5bc6\u6797\u4e2d\uff0c\u4ed6\u4e3a\u6211\u4eec\u8f9f\u51fa\u8def\u5f84\uff0c\u70b9\u71c3\u7075\u611f\u3002", color: "from-red-400 to-pink-500" },
      { name: "\u8881\u5982\u610f", subject: "\u7269\u7406\u7ade\u8d5b", desc: "\u4e13\u6ce8\u3001\u6df1\u9083\u3001\u4e3e\u91cd\u82e5\u8f7b\u3002\u4ed6\u4ee5\u6e05\u6670\u7684\u7269\u7406\u56fe\u50cf\u548c\u7cbe\u5999\u7684\u89e3\u9898\u89c6\u89d2\uff0c\u5c06\u590d\u6742\u7684\u7ade\u8d5b\u96be\u9898\u5316\u4e3a\u6709\u5e8f\u7684\u601d\u7ef4\u8bad\u7ec3\u3002", color: "from-purple-400 to-indigo-500" },
      { name: "\u6768\u82f1\u4f1f", subject: "\u5316\u5b66\u7ade\u8d5b", desc: "\u4ece\u8bfe\u5802\u5230\u7ade\u8d5b\u573a\uff0c\u4ed6\u5e26\u9886\u6211\u4eec\u6df1\u5165\u5316\u5b66\u7684\u66f4\u6df1\u5c42\u3002\u4ed6\u642d\u5efa\u8d77\u4ece\u57fa\u7840\u5230\u9ad8\u9636\u7684\u6865\u6881\uff0c\u8ba9\u70ed\u7231\u5728\u6311\u6218\u4e2d\u6dec\u70bc\u6210\u950b\u8292\u3002", color: "from-emerald-400 to-teal-500" },
      { name: "\u5f6d\u5c0f\u5029", subject: "\u751f\u7269\u7ade\u8d5b", desc: "\u5979\u5e26\u9886\u6211\u4eec\u8d85\u8d8a\u8bfe\u672c\uff0c\u76f4\u9762\u751f\u547d\u79d1\u5b66\u7684\u5e7f\u9614\u524d\u6cbf\u3002\u5728\u5979\u7684\u6307\u5bfc\u4e0b\uff0c\u77e5\u8bc6\u7f51\u7edc\u4e0d\u65ad\u5ef6\u5c55\uff0c\u5bf9\u751f\u547d\u73b0\u8c61\u7684\u7406\u89e3\u4e5f\u8d70\u5411\u7cfb\u7edf\u4e0e\u6df1\u523b\u3002", color: "from-lime-400 to-green-500" },
      { name: "\u5f6d\u793c\u65af", subject: "\u4fe1\u606f\u7ade\u8d5b", desc: "\u5979\u662f\u4ee3\u7801\u4e16\u754c\u7684\u67b6\u6784\u5e08\u3002\u4ece\u7b97\u6cd5\u601d\u7ef4\u5230\u5b9e\u6218\u8c03\u8bd5\uff0c\u5979\u966a\u4f34\u6211\u4eec\u5728\u865a\u62df\u7a7a\u95f4\u4e2d\u6784\u5efa\u903b\u8f91\u7684\u57ce\u5821\u3002", color: "from-blue-400 to-cyan-500" },
    ]
  },
  "2026春季学期": {
    idList: ["艾可为", "曾浚源", "陈嘉奕", "陈铭涛", "陈有邻", "陈彰沛", "邓一涛", "杜玘岳", "范文熙", "范亦宸", "高铭森", "龚鸿仁杰", "郭润", "黄季熙", "黄义皓", "康子超", "康子航", "匡梓桐", "黎励", "李晟", "李定远", "李泓逸", "李嘉峻", "李明远", "李诺辰", "李睿", "李世航", "李书坦", "李拙成", "刘昊梁", "刘宇晗", "罗志恒", "彭君昊", "彭岚筠", "宋承熹", "孙沛玮", "王睿捷", "肖浩寅", "熊晓斌", "晏子晖", "杨谨逸", "杨牧野", "杨又豪", "姚骅城", "喻涵博", "袁泽博", "张钦涵", "张天骏", "周诚", "周豪焕", "周子程", "雷书瑶", "刘子曦", "罗雅楠", "谭明可"],
    rawGroups: [
      { name: "信息竞赛组", color: "from-blue-400 to-cyan-500", members: ["周诚", "周子程", "杜玘岳", "匡梓桐", "张钦涵", "袁泽博"] },
      { name: "数学竞赛组", color: "from-red-400 to-pink-500", members: ["邓一涛", "范亦宸", "李嘉峻", "李拙成", "黎励", "郭润", "曾浚源", "陈铭涛", "刘昊梁", "晏子晖", "彭岚筠", "李世航", "龚鸿仁杰"] },
      { name: "物理竞赛组", color: "from-purple-400 to-indigo-500", members: ["喻涵博", "周豪焕", "李晟", "肖浩寅", "李书坦", "范文熙", "黄季熙", "刘子曦", "李诺辰", "杨谨逸", "艾可为", "姚骅城", "宋承熹", "张天骏", "高铭森", "王睿捷", "熊晓斌"] },
      { name: "化学竞赛组", color: "from-emerald-400 to-teal-500", members: ["黄义皓", "雷书瑶", "彭君昊", "罗志恒", "李睿", "康子超", "孙沛玮", "杨又豪"] },
      { name: "生物竞赛组", color: "from-lime-400 to-green-500", members: ["罗雅楠", "刘宇晗", "陈彰沛", "李定远", "陈嘉奕", "杨牧野", "李泓逸", "康子航", "谭明可", "陈有邻"] }
    ],
    tuanData: [
      { name: "一团", members: ["喻涵博", "黄义皓", "邓一涛", "周诚", "周豪焕", "范亦宸", "罗雅楠"] },
      { name: "二团", members: ["刘宇晗", "李晟", "周子程", "雷书瑶", "肖浩寅", "李嘉峻"] },
      { name: "三团", members: ["李拙成", "李书坦", "杜玘岳", "范文熙", "彭君昊", "陈彰沛", "黎励"] },
      { name: "四团", members: ["罗志恒", "李定远", "郭润", "黄季熙", "匡梓桐", "刘子曦", "曾浚源"] },
      { name: "五团", members: ["李诺辰", "陈嘉奕", "杨谨逸", "杨牧野", "李睿", "艾可为", "陈铭涛"] },
      { name: "六团", members: ["姚骅城", "李泓逸", "宋承熹", "康子超", "刘昊梁", "晏子晖", "彭岚筠"] },
      { name: "七团", members: ["张天骏", "张钦涵", "康子航", "谭明可", "孙沛玮", "高铭森"] },
      { name: "八团", members: ["李世航", "陈有邻", "杨又豪", "龚鸿仁杰", "袁泽博", "王睿捷", "熊晓斌"] }
    ],
    committeeData: [
      { role: "学习班长", name: "杨谨逸", description: "引领学风，统筹学术。负责牵头制定班级学习计划、组织经验分享与竞赛交流，营造“比、学、赶、帮”的学术氛围，是班级求知路上的灯塔与协作者。" },
      { role: "活动班长", name: "杜玘岳", description: "凝聚集体，策划精彩。主导班级文体活动、社会实践与团队建设，让严谨的竞赛生活注入舒展与欢笑的节奏，锻造有温度、有凝聚力的集体记忆。" },
      { role: "团支部书记", name: "邓一涛", description: "思想引领，组织建设。负责团务工作、主题教育与志愿活动，凝聚青春向党心，带领班级在思想与实践上共同进步。" },
      { role: "\u5b66\u4e60\u59d4\u5458", name: "\u9ec4\u4e49\u7693", description: "\u7ec6\u81f4\u843d\u5b9e\uff0c\u52a9\u529b\u65e5\u5e38\u3002\u8d1f\u8d23\u4f5c\u4e1a\u6536\u53d1\u3001\u5b66\u4e60\u8d44\u6599\u6574\u7406\uff0c\u5e76\u5173\u6ce8\u540c\u5b66\u5b66\u4e60\u72b6\u6001\uff0c\u662f\u5b66\u4e60\u73ed\u957f\u7684\u91cd\u8981\u52a9\u529b\uff0c\u4e5f\u662f\u5927\u5bb6\u5b66\u4e60\u8def\u4e0a\u7684\u8d34\u5fc3\u652f\u6301\u8005\u3002" },
      { role: "\u5b66\u4e60\u59d4\u5458", name: "\u7f57\u96c5\u6960", description: "\u7ec6\u81f4\u843d\u5b9e\uff0c\u52a9\u529b\u65e5\u5e38\u3002\u8d1f\u8d23\u4f5c\u4e1a\u6536\u53d1\u3001\u5b66\u4e60\u8d44\u6599\u6574\u7406\uff0c\u5e76\u5173\u6ce8\u540c\u5b66\u5b66\u4e60\u72b6\u6001\uff0c\u662f\u5b66\u4e60\u73ed\u957f\u7684\u91cd\u8981\u52a9\u529b\uff0c\u4e5f\u662f\u5927\u5bb6\u5b66\u4e60\u8def\u4e0a\u7684\u8d34\u5fc3\u652f\u6301\u8005\u3002" },
      { role: "\u7eaa\u5f8b\u59d4\u5458", name: "\u9ec4\u5b63\u7199", description: "\u7ef4\u62a4\u79e9\u5e8f\uff0c\u8425\u9020\u9759\u5fc3\u3002\u8d1f\u8d23\u8bfe\u5802\u4e0e\u81ea\u4e60\u7eaa\u5f8b\uff0c\u534f\u52a9\u8425\u9020\u4e13\u6ce8\u3001\u6709\u5e8f\u7684\u5b66\u4e60\u73af\u5883\uff0c\u8ba9\u6bcf\u4f4d\u540c\u5b66\u90fd\u80fd\u5728\u5b81\u9759\u4e2d\u6df1\u5165\u601d\u8003\u3002" },
      { role: "\u4f53\u80b2\u59d4\u5458", name: "\u827e\u53ef\u4e3a", description: "\u5f3a\u5065\u4f53\u9b44\uff0c\u51dd\u805a\u6d3b\u529b\u3002\u7ec4\u7ec7\u8bfe\u95f4\u64cd\u3001\u4f53\u80b2\u953b\u70bc\u53ca\u73ed\u7ea7\u4f53\u80b2\u6d3b\u52a8\uff0c\u63d0\u9192\u5927\u5bb6\u201c\u6587\u660e\u5176\u7cbe\u795e\uff0c\u91ce\u86ee\u5176\u4f53\u9b44\u201d\uff0c\u4e3a\u9ad8\u5f3a\u5ea6\u5b66\u4e60\u50a8\u5907\u5145\u6c9b\u7cbe\u529b\u3002" },
      { role: "\u4f53\u80b2\u59d4\u5458", name: "\u5f6d\u5c9a\u7b60", description: "\u5f3a\u5065\u4f53\u9b44\uff0c\u51dd\u805a\u6d3b\u529b\u3002\u7ec4\u7ec7\u8bfe\u95f4\u64cd\u3001\u4f53\u80b2\u953b\u70bc\u53ca\u73ed\u7ea7\u4f53\u80b2\u6d3b\u52a8\uff0c\u63d0\u9192\u5927\u5bb6\u201c\u6587\u660e\u5176\u7cbe\u795e\uff0c\u91ce\u86ee\u5176\u4f53\u9b44\u201d\uff0c\u4e3a\u9ad8\u5f3a\u5ea6\u5b66\u4e60\u50a8\u5907\u5145\u6c9b\u7cbe\u529b\u3002" },
      { role: "\u536b\u751f\u59d4\u5458", name: "\u5eb7\u5b50\u8d85", description: "\u5b88\u62a4\u73af\u5883\uff0c\u5171\u5efa\u8212\u5fc3\u3002\u8d1f\u8d23\u6559\u5ba4\u536b\u751f\u5b89\u6392\u4e0e\u7ef4\u62a4\uff0c\u76d1\u7763\u65e5\u5e38\u4fdd\u6d01\uff0c\u6253\u9020\u6574\u6d01\u3001\u660e\u4eae\u7684\u5b66\u4e60\u7a7a\u95f4\uff0c\u8ba9\u73af\u5883\u6ecb\u517b\u8eab\u5fc3\u3002" },
      { role: "\u536b\u751f\u59d4\u5458", name: "\u674e\u665f", description: "\u5b88\u62a4\u73af\u5883\uff0c\u5171\u5efa\u8212\u5fc3\u3002\u8d1f\u8d23\u6559\u5ba4\u536b\u751f\u5b89\u6392\u4e0e\u7ef4\u62a4\uff0c\u76d1\u7763\u65e5\u5e38\u4fdd\u6d01\uff0c\u6253\u9020\u6574\u6d01\u3001\u660e\u4eae\u7684\u5b66\u4e60\u7a7a\u95f4\uff0c\u8ba9\u73af\u5883\u6ecb\u517b\u8eab\u5fc3\u3002" },
      { role: "\u5ba3\u4f20\u59d4\u5458", name: "\u96f7\u4e66\u7476", description: "\u4f20\u9012\u58f0\u97f3\uff0c\u5c55\u793a\u98ce\u91c7\u3002\u8d1f\u8d23\u73ed\u7ea7\u5ba3\u4f20\u5de5\u4f5c\u3001\u6d3b\u52a8\u62a5\u9053\u4e0e\u6587\u5316\u5c55\u793a\uff0c\u7528\u6587\u5b57\u4e0e\u521b\u610f\u8bb0\u5f55\u73ed\u7ea7\u7684\u6bcf\u4e00\u4e2a\u7cbe\u5f69\u77ac\u95f4\u3002" }
    ],
    subjectTeachers: [
      { name: "\u5f90\u4e39", subject: "\u8bed\u6587", tag: "", desc: "\u4ee5\u6587\u5b57\u4e3a\u821f\uff0c\u4ee5\u601d\u60f3\u4e3a\u5e06\u3002\u5e26\u6211\u4eec\u7a7f\u8d8a\u5343\u5e74\u6587\u8109\uff0c\u5728\u8bed\u8a00\u7684\u7586\u754c\u91cc\u611f\u53d7\u903b\u8f91\u4e0e\u7f8e\u611f\u7684\u4ea4\u878d\u3002", color: "from-rose-400 to-pink-500" },
      { name: "\u9648\u8bb0\u94ed", subject: "\u6570\u5b66", tag: "", desc: "\u516c\u5f0f\u5728\u5979\u7b14\u4e0b\u4e0d\u6b62\u662f\u7b26\u53f7\uff0c\u66f4\u662f\u6784\u5efa\u4e16\u754c\u7684\u9aa8\u67b6\u3002\u5979\u4e25\u8c28\u7684\u63a8\u7406\u4e0e\u6e05\u6670\u7684\u6f14\u7ece\uff0c\u4e3a\u6211\u4eec\u5938\u5b9e\u601d\u7ef4\u7684\u57fa\u77f3\u3002", color: "from-red-400 to-orange-500" },
      { name: "\u4efb\u835f\u6893", subject: "\u82f1\u8bed", tag: "\u73ed\u4e3b\u4efb", desc: "\u5979\u662f\u8bed\u8a00\u7684\u4f20\u6388\u8005\uff0c\u66f4\u662f\u6210\u957f\u7684\u5b88\u62a4\u4eba\u3002\u5728\u8bfe\u5802\u4e0a\uff0c\u5979\u5e26\u6211\u4eec\u8fde\u63a5\u4e16\u754c\uff1b\u5728\u73ed\u7ea7\u4e2d\uff0c\u5979\u4ee5\u7ec6\u81f4\u4e0e\u667a\u6167\u51dd\u805a\u96c6\u4f53\u3002", color: "from-amber-400 to-yellow-500" },
      { name: "\u5362\u5999\u8a00", subject: "\u7269\u7406", tag: "", desc: "\u4ee5\u4e25\u8c28\u7684\u903b\u8f91\u4e0e\u751f\u52a8\u7684\u8bb2\u89e3\uff0c\u4e3a\u6211\u4eec\u63ed\u793a\u7269\u7406\u4e16\u754c\u7684\u6df1\u5c42\u89c4\u5f8b\u3002\u5979\u5f15\u5bfc\u6211\u4eec\u5728\u529b\u4e0e\u573a\u7684\u4ea4\u7ec7\u4e2d\uff0c\u9886\u609f\u81ea\u7136\u7684\u7cbe\u5999\u4e0e\u548c\u8c10\u3002", color: "from-purple-400 to-indigo-500" },
      { name: "\u6768\u82f1\u4f1f", subject: "\u5316\u5b66", tag: "", desc: "\u5206\u5b50\u5728\u4ed6\u8bb2\u8ff0\u4e2d\u4eff\u4f5b\u6709\u4e86\u751f\u547d\u3002\u4ed6\u7528\u53cd\u5e94\u8be0\u91ca\u53d8\u5316\u4e4b\u7f8e\uff0c\u7528\u5b9e\u9a8c\u70b9\u71c3\u63a2\u7d22\u4e4b\u8da3\u3002", color: "from-emerald-400 to-teal-500" },
      { name: "\u5f6d\u5c0f\u5029", subject: "\u751f\u7269", tag: "", desc: "\u4ece\u7ec6\u80de\u5230\u751f\u6001\u7cfb\u7edf\uff0c\u5979\u4e3a\u6211\u4eec\u94fa\u5f00\u751f\u547d\u7684\u753b\u5377\u3002\u5979\u8bb2\u8ff0\u7684\u4e0d\u4ec5\u662f\u77e5\u8bc6\uff0c\u66f4\u662f\u5bf9\u751f\u547d\u5965\u79d8\u7684\u656c\u754f\u4e0e\u597d\u5947\u3002", color: "from-lime-400 to-green-500" },
    ],
    competitionCoaches: [
      { name: "\u5218\u6b63", subject: "\u6570\u5b66\u7ade\u8d5b", desc: "\u4ed6\u5e26\u9886\u6211\u4eec\u6500\u767b\u7eaf\u601d\u7ef4\u7684\u5dc5\u5cf0\u3002\u5728\u7b26\u53f7\u4e0e\u8bc1\u660e\u7684\u5bc6\u6797\u4e2d\uff0c\u4ed6\u4e3a\u6211\u4eec\u8f9f\u51fa\u8def\u5f84\uff0c\u70b9\u71c3\u7075\u611f\u3002", color: "from-red-400 to-pink-500" },
      { name: "\u8881\u5982\u610f", subject: "\u7269\u7406\u7ade\u8d5b", desc: "\u4e13\u6ce8\u3001\u6df1\u9083\u3001\u4e3e\u91cd\u82e5\u8f7b\u3002\u4ed6\u4ee5\u6e05\u6670\u7684\u7269\u7406\u56fe\u50cf\u548c\u7cbe\u5999\u7684\u89e3\u9898\u89c6\u89d2\uff0c\u5c06\u590d\u6742\u7684\u7ade\u8d5b\u96be\u9898\u5316\u4e3a\u6709\u5e8f\u7684\u601d\u7ef4\u8bad\u7ec3\u3002", color: "from-purple-400 to-indigo-500" },
      { name: "\u6768\u82f1\u4f1f", subject: "\u5316\u5b66\u7ade\u8d5b", desc: "\u4ece\u8bfe\u5802\u5230\u7ade\u8d5b\u573a\uff0c\u4ed6\u5e26\u9886\u6211\u4eec\u6df1\u5165\u5316\u5b66\u7684\u66f4\u6df1\u5c42\u3002\u4ed6\u642d\u5efa\u8d77\u4ece\u57fa\u7840\u5230\u9ad8\u9636\u7684\u6865\u6881\uff0c\u8ba9\u70ed\u7231\u5728\u6311\u6218\u4e2d\u6dec\u70bc\u6210\u950b\u8292\u3002", color: "from-emerald-400 to-teal-500" },
      { name: "\u5f6d\u5c0f\u5029", subject: "\u751f\u7269\u7ade\u8d5b", desc: "\u5979\u5e26\u9886\u6211\u4eec\u8d85\u8d8a\u8bfe\u672c\uff0c\u76f4\u9762\u751f\u547d\u79d1\u5b66\u7684\u5e7f\u9614\u524d\u6cbf\u3002\u5728\u5979\u7684\u6307\u5bfc\u4e0b\uff0c\u77e5\u8bc6\u7f51\u7edc\u4e0d\u65ad\u5ef6\u5c55\uff0c\u5bf9\u751f\u547d\u73b0\u8c61\u7684\u7406\u89e3\u4e5f\u8d70\u5411\u7cfb\u7edf\u4e0e\u6df1\u523b\u3002", color: "from-lime-400 to-green-500" },
      { name: "\u5f6d\u793c\u65af", subject: "\u4fe1\u606f\u7ade\u8d5b", desc: "\u5979\u662f\u4ee3\u7801\u4e16\u754c\u7684\u67b6\u6784\u5e08\u3002\u4ece\u7b97\u6cd5\u601d\u7ef4\u5230\u5b9e\u6218\u8c03\u8bd5\uff0c\u5979\u966a\u4f34\u6211\u4eec\u5728\u865a\u62df\u7a7a\u95f4\u4e2d\u6784\u5efa\u903b\u8f91\u7684\u57ce\u5821\u3002", color: "from-blue-400 to-cyan-500" },
    ]
  }
};

export const getTermData = (term: Term) => {
  return termDataMap[term];
};

export function getStudentProfile(name: string, term: Term): StudentProfile {
  const data = termDataMap[term];
  
  const groups = data.rawGroups
    .filter(g => g.members.includes(name))
    .map(g => g.name);
  
  const committeeEntries = data.committeeData.filter(c => c.name === name);
  const roles = committeeEntries.map(c => c.role);
  const descriptions = committeeEntries.map(c => c.description);

  const firstGroup = data.rawGroups.find(g => g.members.includes(name));
  const groupName = firstGroup ? firstGroup.name : "该竞赛组";

  if (data.tuanData) {
    const tuan = data.tuanData.find(t => t.members.includes(name));
    if (tuan) {
      roles.push(tuan.name);
      descriptions.push(`G2501班集体的一员，属于${groupName}。`);
    }
  }
  
  let id = 999;
  if (data.idList) {
    const index = data.idList.indexOf(name);
    if (index !== -1) id = index + 1;
  } else {
    id = globalIdMap.get(name) || 999;
  }
  
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
